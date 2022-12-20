
import React, { useState } from "react";

const Pagination = ({
  charactersPerPage,
  setCharactersPerPage,
  totalCharacters,
  paginate,
  currentPage,
  setCurrentPage,
  

}) => {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    //index is = to one, if index is < or = to the total characters divided by the characters per page rounded up.
    pageNumbers.push(i); //push onto the page numbers array...this will give us the correct amt. of page numbers.
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} className="page-item ">
          <a
            href="#"
            onClick={() => paginate(number)}
            className={
              currentPage === number
                ? "page-link page-numbers active"
                : "page-link not-active-page"
            }
          >
            {number}
          </a>
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = (e) => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <a
        href="#"
        onClick={handleNextBtn}
        className="page-link dots"
        disabled={
          currentPage === pageNumbers[pageNumbers.length] ? true : false
        }
      >
        &hellip;
      </a>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <button href="#" onClick={handlePrevBtn} className="page-link dots">
        &hellip;
      </button>
    );
  }

  const handleLoadMore = () => {
    setCharactersPerPage(charactersPerPage + 6);
  };



  return (
    <nav className="text-center">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            href="#"
            onClick={handlePrevBtn}
            className="page-link dots"
            disabled={currentPage === pageNumbers[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li className="page-item">
          <button
            href="#"
            onClick={handleNextBtn}
            className="page-link dots"
            disabled={
              currentPage === pageNumbers[pageNumbers.length] ? true : false
            }
          >
            Next
          </button>
        </li>
      </ul>
      <div className="d-flex justify-content-space-between"></div>

      <button onClick={handleLoadMore} className="loadMoreBtn mt-1 mb-3">
        Load More
      </button>
    </nav>
  );
};

export default Pagination;
