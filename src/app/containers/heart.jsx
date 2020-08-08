import React, { Component } from 'react';
import { connect, Provider } from "react-redux";
import { HeartReducer } from '../reducers/heart';
import { createStore } from 'redux'
 
 
const Heart = (props) => {    

    const setHeart = (id) => { props.setHeartClass('SET_HEART',id) }

    return (
        <i 
          onClick = { setHeart(props.id)  }
          className = { props.classes } aria-hidden="true" id = {props.id}> </i>
          );
 }

  
const mapStateToProps = (state) => {
 
    return{
        classes: state.HeartReducer.classes,
         
        }
    }
  
const mapDispatchToProps = (dispatch) => {
     
    return{
        setHeartClass: (type,id) => {
           dispatch({ 
            type,
            payload: id
             
        })
        }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Heart)
  
  
   
// export default Heart;
//   