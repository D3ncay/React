import React from "react";

const MyPage = ({ page, currentPage, onClick }) => {
  return (
    <span
      className={page === currentPage ? "pages-item current" : "pages-item"}
      onClick={() => onClick()}
    >
      {page}
    </span>
  );
};

export default MyPage;
