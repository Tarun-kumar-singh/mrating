import React, { Component } from 'react';
import BackgroundTheme from "./backgroundTheme";
import Gallery from './multiImageCoursal';
import BannerCarousel from "./bannerCarousel";
import UpcomingMovies from "./upcomingMovies";
import Footer from '../component/footer';
import RateMovieList from "./ratingMoviesList";


const HomeMovie = () => {

    return(
        <div>
            <BackgroundTheme/>
          
            <BannerCarousel/>
            <br/><br/>  
            <RateMovieList />
            <br/><br/><br/>
            <Gallery />
            <br/><br/>
           
            <UpcomingMovies />
            <br/><br/>
            <Footer />
        </div>

    )
}


export default HomeMovie;