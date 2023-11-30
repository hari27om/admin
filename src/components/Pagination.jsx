import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  handlePagination,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const isDisabled = (buttonPage) => {
    return (
      buttonPage < 1 ||
      buttonPage > totalPages ||
      (buttonPage === 1 && totalItems === 0) ||
      (buttonPage === currentPage && totalItems !== 0)
    );
  };

  const renderPaginationButtons = () => {
    const pageButtons = [];

    const addButton = (key, page, iconClass) => {
      pageButtons.push(
        <button
          key={key}
          onClick={() => handlePagination(page)}
          disabled={isDisabled(page)}
          className={currentPage === page ? "active" : ""}
        >
          {iconClass && <i className={iconClass}></i>}
          {!iconClass && page}
        </button>
      );
    };

    addButton("first", 1, "fas fa-angle-double-left");
    addButton("previous", currentPage - 1, "fas fa-angle-left");

    for (let page = 1; page <= totalPages; page++) {
      addButton(page, page, null);
    }

    addButton("next", currentPage + 1, "fas fa-angle-right");
    addButton("last", totalPages, "fas fa-angle-double-right");

    return pageButtons;
  };

  return <div className="pagination">{renderPaginationButtons()}</div>;
};

export default Pagination;
