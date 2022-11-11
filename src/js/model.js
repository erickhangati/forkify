import { API_URL, RESULTS_PER_PAGE, KEY } from './config';
import { AJAX } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    page: 1,
    results: [],
  },
  bookmarks: [],
};

const createRecipeObject = function (recipe) {
  return {
    id: recipe.id,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    publisher: recipe.publisher,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    title: recipe.title,
    cookingTime: recipe.cooking_time,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const response = await AJAX(`${API_URL}${id}?key=${KEY}`);

    // Renaming the data coming from the API and saving on state.
    const { recipe } = response.data;
    state.recipe = createRecipeObject(recipe);

    // Check for recipe is bookmarked
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    // Reset to page 1 incase of a previous pagination move.
    state.search.page = 1;

    // Get search query.
    state.search.query = query;
    const response = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);

    // Renaming the data coming from the API and saving on state.
    state.search.results = response.data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        image: recipe.image_url,
        publisher: recipe.publisher,
        ...(recipe.key && { key: recipe.key }),
      };
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  // Keeping track of the current page.
  state.search.page = page;

  // Get the start and end based on showing 10 results per page
  const start = (page - 1) * RESULTS_PER_PAGE;
  const end = page * RESULTS_PER_PAGE;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  // Updating the quantities of ingredients with new servings
  // (Formula) newQty = oldQty * newServings / oldServings
  state.recipe.ingredients.forEach(ingredient => {
    ingredient.quantity =
      (ingredient.quantity * newServings) / state.recipe.servings;
  });

  // Updating the servings
  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  // Persist bookmarks to local storage
  persistBookmarks();
};

export const removeBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  // Persist bookmarks to local storage
  persistBookmarks();
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());

        // Check if ingredients entered in right format.
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format.'
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    // Reassigning the data to fit API naming format when uploading
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: newRecipe.cookingTime,
      servings: newRecipe.servings,
      ingredients,
    };

    // Sending the recipe to the API
    const response = await AJAX(`${API_URL}?key=${KEY}`, recipe);

    // Saving the recipe in the state in our
    const data = response.data.recipe;
    state.recipe = createRecipeObject(data);

    // Add bookmark to our recipe
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  // Get bookmarks from local storage.
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // Restore bookmarks.
  if (bookmarks) state.bookmarks = bookmarks;
};

init();
