import React, { Component } from 'react';
import BackgroundTheme from './backgroundTheme';
import MovieCard from "./movieCard";

const RatedMovies = (props)=>{

    return(
        <div>
            <BackgroundTheme />
            <MovieCard
            rated = {1}
            />
        </div>   
    )
}


export default RatedMovies;  