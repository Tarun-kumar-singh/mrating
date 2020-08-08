import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { connect } from "react-redux";
import BackgroundTheme from '../component/backgroundTheme';
import StarRated from '../component/starRated';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
 

const Rate = (props) => {

        const btnClass = 'btn btn-danger'

        toast.configure()
        const handleClear = () => props.setClearRating('CLEAR_RATING')
        const handleRating = (rating,name) => {props.setRating(rating,name)}
        const handleConfirm = async () => { 
    
            props.setConformRating() 
                // 1.  Update the UI
                // 2.  Call the API
                try{  
                    
                    // If success display the success toast 
                    toast.success('Rated ! Thanks')
                }
                catch(ex){

                    // If error then revert back with error toast 
                    props.setReset()
                    toast.error(ex.message)
                }    
            } 

            return(
                
                <div className='container'>
 
                    <BackgroundTheme />
                    <div className='row justify-content-md-center'>

                    <div className=''>
                        <div className="card border-danger" style={{ maxwidth: '25rem' }} >
                        <img src="https://i.pinimg.com/474x/b9/92/f8/b992f8ff7b6bbb1245a6608806445614.jpg" height='200px' className="card-img-top" alt="..." />
                        
                        <div className="card-body bg-dark " >        
                        
                        {
                          props.rated ? 
                            
                            <StarRated
                                rated = {props.rate}
                                starDimension = {'35px'}
                                starSpacing = {'1px'}
                                starRatedColor = {'yellow'}
                            />
                            : 
                            (<div>
                                    <StarRatings
                                        rating = { props.rate }
                                        starRatedColor="red"
                                        starEmptyColor = 'gray'
                                        starHoverColor='red'
                                        changeRating={handleRating}
                                        numberOfStars={5}
                                        name='rating' 
                                    />
                                    <br/> 
                                    <button type="button" onClick = { handleConfirm } className = { props.rate > 0 ? btnClass + ' visible' : 'invisible'}>Done</button>
                                    <button type = 'button' onClick = { handleClear } className = { props.rate > 0 ? 'btn btn-info float-right ' + ' visible' : 'invisible'} > Clear </button>
                    
                            </div>)    
                        }
                                </div>

                        </div>  
                        </div> 
     
                    </div> 
                
                   
                </div>
             
            )
}


const mapStateToProps = (state) => {
     return{
        rate : state.RateReducer.rate,
        rated : state.RateReducer.rated
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return{
        
        setReset : () => {
            dispatch({ type : 'RESET_RATE' })
        },
        
        setClearRating : (type) =>{
            dispatch({ type})
        },

        setRating : (rating, name) => {
             dispatch({
                type: 'CHANGE_RATING',
                payload:{ rating }
            })
        },

        setConformRating : () => {
            dispatch ({ type : 'CONFIRMED_RATING' })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rate)
 

// export default Tr;