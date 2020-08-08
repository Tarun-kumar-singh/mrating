
export const NavBarReducer = (state = {
    currentLink:'Movie'
}, action) => {

    switch (action.type) {
        case 'Home':
            state = {
                ...state,
                currentLink: action.type
             };
            break;
        case 'Customers':
            state = {
                ...state,
                currentLink: action.type
             };
            break;
        case 'Rentals':
            state = {
                ...state,
                currentLink: action.type
             };
             break;
        case 'Login':
            
            state = {
                ...state,
                currentLink: action.type
             };
             break;              
    }

    return state

}