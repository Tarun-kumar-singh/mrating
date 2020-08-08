import React from 'react';
import _ from 'lodash'
import propTypes from "prop-types";
 

function Pagination(props){

         const { itemsCount, PageSize, onPageChange, currentPage } = props;
         const pagesCount = Math.ceil(itemsCount / PageSize);
         if(pagesCount === 1) return ''
         const pages = _.range(1, pagesCount + 1)
      return(
        <nav aria-label="Page navigation example">
         <ul className="pagination justify-content-center">

            { pages.map((page, index) => (
        
                 <li key={ index } className= { page === currentPage ? "page-item active" : "page-item" }>
                     <a className="page-link"  onClick = { () => onPageChange(page)} >{ page } </a>
                 </li>

            ))}
         </ul>
        </nav>
    )
}


Pagination.propTypes = {

    itemsCount: propTypes.number.isRequired,
    PageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired

}

export default Pagination;