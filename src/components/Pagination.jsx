import React from "react";
import MyPage from "./UI/page/MyPage";

const Pagination = ({pagesArray, changePage, currentPage}) => {
  return (
    <div className="pages">
      {pagesArray.map((p) => (
        <MyPage
          onClick={() => changePage(p)}
          key={p}
          page={p}
          currentPage={currentPage}
        />
      ))}
    </div>
  );
};

export default Pagination;
