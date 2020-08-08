import { act } from "react-dom/test-utils";


export const CustomerReducer = (state = {
    
    loading:true,
    data : [],
    error: ''

}, action) => {
     
    switch (action.type) {
       
        case 'FETCH_USERS_REQUEST':
             state = {
                ...state,
                loading : true                
            }
            break;

        case 'FETCH_USERS_SUCCESS':
             state = {
                ...state,
                loading : false,
                data : action.payload,
                error : ''
            }
            
            break;
                
        case 'FETCH_USERS_FAILURE':
            state = {
                ...state,
                data : [],
                loading : false,
                error : action.payload
            }
            break;   
       
    } 
// console.log(state)
    return state
}