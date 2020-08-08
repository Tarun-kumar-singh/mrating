import React, { Component } from 'react';
 


 const BannerCarousel = (props) => {

    return(
    
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="https://in.bmscdn.com/showcaseimage/eventimage/baaghi-3-16-03-2020-05-35-19-543.jpg" height='250px' alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://in.bmscdn.com/showcaseimage/eventimage/baaghi-3-16-03-2020-05-35-19-543.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://in.bmscdn.com/showcaseimage/eventimage/baaghi-3-16-03-2020-05-35-19-543.jpg" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
 
        )

}

export default BannerCarousel