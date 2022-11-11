import View from './view';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was succesfully uploaded.';

  _overlay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();

    // Listen to add recipe button click
    this._addHandlerShowWindow();

    // Listen to close recipe button / overlay click
    this._addHandlerHideWindow();
  }

  _toggleWindow = function () {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  };

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this._toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    const overlayCloseBtn = [this._overlay, this._btnClose];

    overlayCloseBtn.forEach(element => {
      element.addEventListener('click', this._toggleWindow.bind(this));
    });
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      // Getting data from the form.
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      // Passing form data to handler.
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
