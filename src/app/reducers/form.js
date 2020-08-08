
export const FormReducer = (state = {
    data:{
        username:'',
        password:'',
    },   
    errors: {}
    }, action) => {

    switch (action.type) {

        case 'SET_USERNAME':
            state = {
                ...state,
                data : { ...state.data, username: action.payload }
             }
            break;

        case 'SET_PASSWORD':
            state = {
                 ...state,
                 data : { ...state.data, password: action.payload }
                }
                break;
                
        case 'SET_ERROR':
            state = {
                ...state,
                errors : action.payload
            }        
     }
  return state
}