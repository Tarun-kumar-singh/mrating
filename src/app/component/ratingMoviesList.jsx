import React from 'react';
import Carousel from "react-multi-carousel";




const RateMovieList = (props) =>{

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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

    return(
        <div>
        
        <h3> <span class="badge badge-success"> Rate your favourite movie</span></h3>
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

    <div class="card" style={{width : '14rem'}}>
    
    <img class="card-img-top" src="https://i.pinimg.com/474x/b9/92/f8/b992f8ff7b6bbb1245a6608806445614.jpg"
     alt="Card image cap" height = '150px' />
    
    <div class="card-body bg-dark">
      <h5 class="text-light"> Movie Kalank </h5>
      <button type="button" class="btn btn-outline-danger">Rate</button>
     </div>
   
  </div>

  <div class="card" style={{width : '14rem'}}>
    
    <img class="card-img-top" src="https://i.pinimg.com/474x/b9/92/f8/b992f8ff7b6bbb1245a6608806445614.jpg"
     alt="Card image cap" height = '150px' />
    
    <div class="card-body bg-dark">
      <h5 class="text-light"> Movie Kalank </h5>
      <a href="/rate/1">
      <button type="button" class="btn btn-outline-danger">Rate</button>
      </a>
     </div>
   
  </div>

  <div class="card" style={{width : '14rem'}}>
    
    <img class="card-img-top" src="https://i.pinimg.com/474x/b9/92/f8/b992f8ff7b6bbb1245a6608806445614.jpg"
     alt="Card image cap" height = '150px' />
    
    <div class="card-body bg-dark">
      <h5 class="text-light"> Movie Kalank </h5>
      <a href="/rate/1">
      <button type="button" class="btn btn-outline-danger">Rate</button>
      </a>     </div>
   
  </div>

  <div class="card" style={{width : '14rem'}}>
    
    <img class="card-img-top" src="https://i.pinimg.com/474x/b9/92/f8/b992f8ff7b6bbb1245a6608806445614.jpg"
     alt="Card image cap" height = '150px' />
    
    <div class="card-body bg-dark">
      <h5 class="text-light"> Movie Kalank </h5>
      <a href="/rate/1">
      <button type="button" class="btn btn-outline-danger">Rate</button>
      </a>     </div>
   
  </div>

  <div class="card" style={{width : '14rem'}}>
    
    <img class="card-img-top" src="https://i.pinimg.com/474x/b9/92/f8/b992f8ff7b6bbb1245a6608806445614.jpg"
     alt="Card image cap" height = '150px' />
    
    <div class="card-body bg-dark">
      <h5 class="text-light"> Movie Kalank </h5>
      <a href="/rate/1">
      <button type="button" class="btn btn-outline-danger">Rate</button>
      </a>     </div>
   
  </div>


  </Carousel>
        
        </div>    
    )

}



export default RateMovieList