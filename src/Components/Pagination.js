import React from "react";

function Pagination({
  totalPages,
  handleClick,

  page,
  setPage,

  
}) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  // Previous button click...
  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };

  // Next button click...
  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div style={{border: '1px solid black', width:'fit-content', margin: 'auto'}}>
      <button style={{cursor: 'pointer'}}
        onClick={(event) => {
          previousPage(event);
        }}
        disabled={page == 1}
      >
        Prev
      </button>

      {pages.map((num) => (
        <button style={{cursor: 'pointer'}} key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}

      <button style={{cursor: 'pointer'}} onClick={(event) => nextPage(event)} disabled={page == 10}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
