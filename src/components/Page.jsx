import React from "react";

function Page({ onLeftClick, onRightClick, page, totalPages }) {
  return (
    <div className="arrow-div">
      <button className="arrow" onClick={onLeftClick}>
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button className="arrow" onClick={onRightClick}>
        <span class="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
}

export default Page;
