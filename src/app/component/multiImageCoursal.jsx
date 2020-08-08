import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { Component, useState } from 'react';
import StarRated from './starRated';
  

const Gallery  = (props) => {

   const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5,
              slidesToSlide: 1, // optional, default to 1.
              partialVisibilityGutter: 50// this is needed to tell the amount of px that should be visible.

            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 4,
              slidesToSlide: 1, // optional, default to 1.
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 2,
              slidesToSlide: 1, // optional, default to 1.
            },
          };
 
         return ( 
          <div>          
      <h3> <span class="badge badge-dark">Latest Rated Movies</span></h3>

            <Carousel 
                partialVisible={true}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlaySpeed={0}
                keyBoardControl={true}
                // customTransition="all .5"
                customTransition="all 0"
                transitionDuration={0}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px coursal"
            >
  <div>            
    <img className="card-img-top" src="https://i.pinimg.com/474x/b9/92/f8/b992f8ff7b6bbb1245a6608806445614.jpg"
       height='100px' width='10px' alt="Card image cap" />
       <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>

  <div> 
    <img className="card-img-top "   src="https://i.pinimg.com/474x/57/99/15/579915751b2825ac9ee683dff012efe8.jpg" height='100px' width='10px' alt="Card image cap" />
  <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>

<div> 
  <img className="card-img-top "   src="https://i.pinimg.com/474x/38/cd/a3/38cda31774250d33a2d0be333d3ece28.jpg" height='100px' width='10px' alt="Card image cap" />

  <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>
  
  <div> 
    <img className="card-img-top "   src="https://i.pinimg.com/474x/ab/e6/f1/abe6f1af824e4f8d6ab84eed0ecbbfed--ranveer-singh-the-spirit.jpg" height='100px' width='10px'  alt="Card image cap" />
  <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>
  <div>            <img className="card-img-top "   src="https://i.pinimg.com/474x/38/33/97/383397c554a3e7b248795daad90223f5--veg-recipes-bread-recipes.jpg" height='100px' width='10px'  alt="Card image cap" />

  <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>
  <div>            <img className="card-img-top "   src="https://i.pinimg.com/474x/2c/52/8a/2c528ae21c8062c7625bd531062e6b0c.jpg" height='100px' width='10px' alt="Card image cap" />

  <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>
  <div>            <img className="card-img-top "   src="https://i.pinimg.com/474x/fb/8e/eb/fb8eebd1657dac60287970f3ad29e158.jpg" height='100px' width='10px' alt="Card image cap" />

  <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>
  <div>            <img className="card-img-top "   src="https://i.pinimg.com/474x/55/6b/22/556b227a15c3f1f9bd5111c8886c88da.jpg" height='100px' width='10px' alt="Card image cap" />
  <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>
<div>              <img className="card-img-top "   src="https://i.pinimg.com/474x/2c/52/8a/2c528ae21c8062c7625bd531062e6b0c.jpg" height='100px' width='10px' alt="Card image cap" />

<StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />
</div>
  <div>            <img className="card-img-top "   src="https://i.pinimg.com/474x/fb/8e/eb/fb8eebd1657dac60287970f3ad29e158.jpg" height='100px' width='10px' alt="Card image cap" />
  <StarRated
          rated = {3}
          starDimension = {'20px'}
          starSpacing = {'1px'}
          starRatedColor = {'yellow'}
       />

</div>
</Carousel>
         
      </div>
         );
    }
  
 
export default Gallery;