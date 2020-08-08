
import { movieServices } from "../component/getService";
import  serviceGenre from "../component/serviceGenre";
 

const copyMovies = movieServices()
export const MovieReducers = (state = 
   
    {
        movies : [...copyMovies],
        genres: serviceGenre(),
        PageSize: 4,
        selectedGenre:'',
        currentPage: 1,
        sortColumn: { path:'title', order:'asc' } 
    }, action) => {

    switch (action.type) {

        case 'SET_SEARCH_RESULT':
            const regex = new RegExp(`^${action.payload.searchValue}`,'gi')
            state = {
                    ...state,
                    movies : copyMovies.filter(movie =>  movie.title.match(regex))
            }
            break;

        case 'SET_CURRENT_PAGE_GENRE':
            state = {
                ...state,
                currentPage:1
            }

            break

        case 'SET_CURRENT_PAGE': 
       if((action.payload.filteredmovieslength - 1) % 4 === 0){
                 const newCurrentPage =  Math.ceil((action.payload.filteredmovieslength - 1) / 4);
                  state = {
                    ...state,
                    currentPage : newCurrentPage
                }
            }   
            break;

        case 'SORT_COLUMN':
             state = {
                ...state,
                sortColumn : action.payload
            }
            break;
        case 'SELECT_GENRE':
            state = {
               ...state,
               selectedGenre: action.payload 
            }
            break;

        case 'INIT':
            state = {
                ...state,
                movies: [...copyMovies]
            }
            break;

        case 'DEL_MOVIE':
             state = {
                ...state,
                movies : state.movies.filter((movie) => movie._id !== action.payload),
              }        
            break;

        case 'SET_PAGE':
            state = {
                ...state,
                currentPage:action.payload
            }
            break;

        default:
            state = {
                ...state
            }
                 
    }
     return state
}