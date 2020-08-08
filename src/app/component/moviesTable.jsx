import React from 'react';
import Heart from '../containers/heart';
import paginate from './utils/paginate'
import TableHeader from "./tableHeader";
// import TableBody from './tableBody';
import _ from "lodash";
import { Link } from "react-router-dom";
// import { Heart } from '..containers//heart';
 


 const MovieTable = (props) => {

        const columns = [

            { 
              path:'title',
              label:'Title',
              content: movie => <Link to={`/movie/${movie._id}`}> { movie.title } </Link> 
            },
            {path:'genre.name', label:'Genre'},
            {path:'numberInStock', label:'Stock'},
            {path:'dailyRentalRate', label:'Rate'},
            {},
            {}
        ]
        
    const { movies, onDelete, currentPage, PageSize, onSort, sortColumn } = props;
    const { path, order } = sortColumn
    const sortedMovies = _.orderBy(movies, path, order)
    const moviesPaginated = paginate(sortedMovies, currentPage, PageSize)
     return(
            <table className="table text-light">    

                <TableHeader
                    columns = { columns } 
                    onSort = { onSort }
                    sortColumn = { sortColumn }
                    />

                <tbody>
                    { moviesPaginated.map((movie, index)=> (

                        <tr key = {index} >
                    
                            <td><Link to={`/movie/${movie._id}`}> { movie.title } </Link> </td>
                            <td>{ movie.genre.name}</td>
                            <td>{ movie.numberInStock }</td>
                            <td>{ movie.dailyRentalRate }</td>
                            <td> <Heart
                                    id = { index }
                                  /> </td>
                            <td> <button  onClick = {()=>  onDelete(movie._id) } className ='btn btn-danger btn-sm'>Delete</button> </td>
                        </tr>

                    ))}
                </tbody>
                
            </table> 
    )
 
}


export default MovieTable