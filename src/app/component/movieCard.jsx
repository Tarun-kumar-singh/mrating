import React from 'react';
import StarRated from "./starRated";


const MovieCard = (props) => { 

    return(
        <div className=''>
        <div className="card rounded border border-danger" style = {{ width: '15rem' }}>
            <img className="card-img-top "   src="https://i.pinimg.com/474x/b9/92/f8/b992f8ff7b6bbb1245a6608806445614.jpg" alt="Card image cap" />
            <div className="card-body bg-dark">
                <h6 className="card-title text-danger text-left font-italic font-weight-light">Kalank</h6>
                <p className='text-danger font-italic font-weight-light'>26 March 2020</p>
                <StarRated
                rated = {props.rated}
                />
                 {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
        </div> 
    </div>
           
        )
}

export default MovieCard;