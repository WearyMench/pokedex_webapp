import React from "react";
import "../css/Page.css";

function Page({ onLeftClick, onRightClick, onPageClick, page, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages = 5;
  const startPage = Math.max(
    1,
    Math.min(page - 2, totalPages - maxVisiblePages + 1)
  );
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  return (
    <div className="pagination">
      <button className="arrow" onClick={onLeftClick} disabled={page === 1}>
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
      {startPage > 1 && (
        <>
          <button className="page-number" onClick={() => onPageClick(1)}>
            1
          </button>
          {startPage > 2 && <span className="ellipsis">...</span>}
        </>
      )}
      {pages.slice(startPage - 1, endPage).map((p) => (
        <button
          key={p}
          className={`page-number ${p === page ? "active" : ""}`}
          onClick={() => onPageClick(p)}
        >
          {p}
        </button>
      ))}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="ellipsis">...</span>}
          <button
            className="page-number"
            onClick={() => onPageClick(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        className="arrow"
        onClick={onRightClick}
        disabled={page === totalPages}
      >
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
}

export default Page;
