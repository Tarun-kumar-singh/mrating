import React  from 'react';
import MovieTable from './moviesTable';

const MovieDetails = (props) =>{

    const { match } = props
    return(
        <h2> Movie Id:   { match.params.id}</h2>
    )

}

export default MovieDetails;