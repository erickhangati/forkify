import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  render(recipe, render = true) {
    // Check if we have data on the search results.
    if (!recipe || (Array.isArray(recipe) && recipe.length === 0))
      return this.renderError();

    // Assign the data to the state.
    this._data = recipe;

    // Generate html markup for render.
    const html = this._generateMarkup();

    if (!render) return html;

    // Add html markup to parent element.
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  update(recipe) {
    // Assign the data to the state.
    this._data = recipe;

    // Generate new html markup for render.
    const newHtml = this._generateMarkup();

    // Convert the new html string into new virtual DOM
    const newDOM = document.createRange().createContextualFragment(newHtml);

    // Getting new elements from the virtual DOM
    const newElements = Array.from(newDOM.querySelectorAll('*'));

    // Getting the current elements on the DOM rendered on the page for comparison
    const currElements = Array.from(this._parentElement.querySelectorAll('*'));

    // Looping over the two to compare for changes
    newElements.forEach((newElement, i) => {
      const currElement = currElements[i];

      // Update changed TEXT
      if (
        !newElement.isEqualNode(currElement) &&
        newElement.firstChild?.nodeValue.trim() !== ''
      )
        currElement.textContent = newElement.textContent;

      // Update changed attributes
      if (!newElement.isEqualNode(currElement))
        Array.from(newElement.attributes).forEach(attribute =>
          currElement.setAttribute(attribute.name, attribute.value)
        );
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const html = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderError(error = this._errorMessage) {
    const html = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${error}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  renderMessage(error = this._message) {
    const html = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${error}</p>
      </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
