import React from "react";

function Pagination  ({ totalPages, handleClick, previousPage,nextPage, canPreviousPage, canNextPage }) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div>
    <button onClick={() => previousPage()} disabled={!canPreviousPage}>Prev</button>

      {pages.map((num) => (
        <button 
        key={num} 
        onClick={()=> handleClick(num)}>{num}</button>
      ))}
    
   
  
      
      <button onClick={()=> nextPage()} disabled={!canNextPage}>Next</button>
 
      
      
    </div>
  );
};

export default Pagination;
