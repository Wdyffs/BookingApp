import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }
  return (
    <ul className={style.paginationList}>
      {pages.map((pageNumber) => (
        <button
          type="button"
          className={style.paginationItem}
          onClick={() => paginate(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </ul>
  );
};

export default Pagination;
