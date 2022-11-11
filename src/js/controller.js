import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';
import bookmarksView from './views/bookmarksView';
import addRecipeView from './views/addRecipeView';

import { MODAL_CLOSE } from './config';

// Polyfilling for old browsers
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Hot module reloading (Parcel)
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async () => {
  try {
    // Load recipe ID
    const id = window.location.hash.slice(1);
    if (!id) return;

    // Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // Loading spinner as we wait for recipe
    recipeView.renderSpinner();

    // Loading the recipe from the API
    await model.loadRecipe(id);

    // Render the recipe from the API on to the webpage
    recipeView.render(model.state.recipe);

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Update bookmarks view
    bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

controlRecipes();

const controlSearchResults = async function () {
  try {
    // Get the query from the search form.
    const query = searchView.getQuery();
    if (!query) return;

    // Loading spinner as we wait for search results.
    resultsView.renderSpinner();

    // Load search results from API.
    await model.loadSearchResults(query);

    // Render search results.
    resultsView.render(model.getSearchResultsPage());

    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    throw err;
  }
};

const controlPagination = function (goto) {
  // Render new search results.
  resultsView.render(model.getSearchResultsPage(goto));

  // Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update recipe view
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // Add / Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else if (model.state.recipe.bookmarked)
    model.removeBookmark(model.state.recipe.id);

  // Reload the updated bookmarked recipe.
  recipeView.update(model.state.recipe);

  // Render bookmark list.
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show the loading spinner as we wait
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);

    // Render recipe in the recipe view
    recipeView.render(model.state.recipe);

    // Display success message
    addRecipeView.renderMessage();

    // Close form window
    setTimeout(function () {
      addRecipeView._toggleWindow();
    }, MODAL_CLOSE * 1000);
  } catch (err) {
    addRecipeView.renderError(err.message);
    console.error(err);
  }
};

const init = function () {
  // Listening to the page load event and also the hash change on the link.
  recipeView.addHandlerRender(controlRecipes);

  // Listening for servings button clicks.
  recipeView.addHandlerUpdateServings(controlServings);

  // Listening to search submission.
  searchView.addHandlerSearch(controlSearchResults);

  // Listening to pagination buttons clicks.
  paginationView.addHandlerClick(controlPagination);

  // Listening for bookmark button click.
  recipeView.addHandlerAddBookmark(controlAddBookmark);

  // Render bookmarks.
  bookmarksView.addHandlerRender(controlBookmarks);

  // Upload recipe.
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
