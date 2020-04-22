import React from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";

const Pagination = ({ usersPerPage, currentPage, totalUsers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="table-footer">
      <div>
            <Link to="/user/add">
              <button className="btn">
                <i className="fas fa-plus"></i> Thêm
              </button>
            </Link>
          </div>
    <div className="pagination">
      <button
              className={classNames("pagination-item", {
            disable: currentPage === 1
        })}
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
        title="Trang trước"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <ul className="pagination-list mb-0">
        {pageNumbers.map((page) => {
          return (
            <li
              key={page}
              className={classNames("pagination-item", {
                activePagination: page === currentPage,
              })}
              onClick={() => paginate(page)}
            >
              {page}
            </li>
          );
        })}
      </ul>
      <button
        className={classNames("pagination-item", {
            disable: currentPage === pageNumbers.length
        })}
        disabled={currentPage === pageNumbers.length}
        onClick={() => paginate(currentPage + 1)}
        title="Trang sau"
      >
       <i className="fas fa-chevron-right"></i>
      </button>
      </div>
      </div>
  );
};

export default Pagination;
