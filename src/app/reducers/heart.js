

export const HeartReducer = (state = { 
    liked : false,
    classes : 'btn-sm fa fa-heart-o',
    liking: false }, action) => {
          
        switch (action.type) {
            case 'LIKED':
                state = {
                    ...state,
                    liked: true,
                    classes: 'btn-sm fa fa-heart'
                };
                break;
            case 'UNLIKED':
                state = { 
                    ...state,
                    liked: false,
                    classes: 'btn-sm fa fa-heart-o'
                }
                break; 
            
        }
         return state
    }


