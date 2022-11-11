import View from './view';
import icons from 'url:../../img/icons.svg';

import { RESULTS_PER_PAGE } from '../config';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _paginationBtnsMarkup(currPage, buttons) {
    const nextBtn = `
      <button data-goto = "${
        currPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button>
    `;

    const previousBtn = `
      <button data-goto = "${
        currPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
      </button>
    `;

    if (buttons === 'next') return nextBtn;
    if (buttons === 'previous') return previousBtn;
    if (buttons === 'both') return previousBtn + nextBtn;
  }

  _generateMarkup() {
    const numPages = Math.ceil(this._data.results.length / RESULTS_PER_PAGE);
    const currPage = this._data.page;

    // Page 1 and there are other pages
    if (currPage === 1 && numPages > 1)
      return this._paginationBtnsMarkup(currPage, 'next');

    // Last page
    if (currPage === numPages && numPages > 1)
      return this._paginationBtnsMarkup(currPage, 'previous');

    // Other pages
    if (currPage < numPages)
      return this._paginationBtnsMarkup(currPage, 'both');

    // Page 1 and there are no other pages
    return '';
  }
}

export default new PaginationView();
