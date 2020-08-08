
export const RateReducer = (state = 
    { rate:0, rated: false
     }, action) => {

    switch (action.type) {

        case 'CHANGE_RATING':
            state = { 
                ...state,
                    rate: action.payload.rating,
            };
            break;
      
        case 'CLEAR_RATING':
            state = {
                ...state,
                rate: 0
            }
            break
        case 'CONFIRMED_RATING':
            state = {
                ...state,
                rated : true
            }
            break
        case 'RESET_RATE':
            state = {
                ...state,
                rate: 0,
                rated: false
            }
            break          
    }    
 return state
}



 