import React from 'react';
import StarRatings from 'react-star-ratings';
 

const StarRated = (props)=>{

        
     return(
         <StarRatings
         rating={props.rated}
         starDimension={props.starDimension}
         starSpacing={props.starSpacing}
         starRatedColor = {props.starRatedColor}
         />
    )
}

export default StarRated;