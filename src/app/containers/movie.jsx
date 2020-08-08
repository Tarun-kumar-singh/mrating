import React, { Component } from 'react';
import Pagination from '../component/pagination';
import ListGroup from '../component/listGroup'
import { movieServices } from "../component/getService";
import  serviceGenre from "../component/serviceGenre";
import MoviesTable from "../component/moviesTable";
import BackgroundTheme from '../component/backgroundTheme';
import { connect } from "react-redux";
import { renderInput } from "../component/comman/form";


 
class Movie extends Component {
 
    componentDidMount(){ this.props.setInitState('INIT') }
    
    handleChange = event => event.target.value.trim() === ''
                               ? 
                            this.props.setInitState('INIT') : this.props.setSearchResult(event.target.value) 
    

    render() {

      const filteredMovies = this.props.selectedGenre 
       ? this.props.movies.filter(movie => movie.genre.name === this.props.selectedGenre.name)
       : this.props.movies
       
      return (
         <div>
 
          <BackgroundTheme />
            <div className='row'>
             
               <div className='col-2'>
                  
                  <ListGroup 
                    items = { this.props.genres } 
                    onItemSelect = { this.handleGenreSelect }
                    selectedItem = { this.props.selectedGenre }
                  />

               </div>

              <div className='col-8'>

               <p className='text-danger'>  { filteredMovies.length > 0 
                      ? filteredMovies.length !== 1 ? filteredMovies.length + ' Movies are showing.. ' :  filteredMovies.length + ' movie is showing..'
                      : 'No movie listed '}  </p>
                
                {renderInput('username', '', this.handleChange, '', '', 'Search', 'Search')}       

                <MoviesTable 
                  movies = { filteredMovies }
                  onDelete = { this.onDelete }
                  PageSize = { this.props.pageSize }
                  currentPage = { this.props.currentPage }
                  onSort = { this.handleSort }
                  sortColumn = { this.props.sortColumn }
                 />
               
                <Pagination
                  itemsCount = { filteredMovies.length }
                  PageSize = { this.props.pageSize }
                  onPageChange = { this.handlePagechange }
                  currentPage = { this.props.currentPage }
                />

            </div>
            </div>

            
            </div>
        );
      }            

        handleSort = (sortColumn) => this.props.setSortColumn(sortColumn)
        onDelete = (movieID) => {

          this.props.setDelete('DEL_MOVIE', movieID)

          this.props.setCurrentPage('SET_CURRENT_PAGE', (this.props.selectedGenre 
          ? this.props.movies.filter(movie => movie.genre.name === this.props.selectedGenre.name)
          : this.props.movies).length, this.props.currentPage)
        
        }
        handlePagechange = (page) => this.props.setPageChange('SET_PAGE', page)         
        handleGenreSelect = (genreSelected) => {
          this.props.setGenreSelect(genreSelected)            
           this.props.setCurrentPageGenre('SET_CURRENT_PAGE_GENRE')

        } 
                 
}


const mapStateToProps = (state)=>{
 
  return{
      movies: state.MovieReducers.movies,
      genres: state.MovieReducers.genres,
      pageSize: state.MovieReducers.PageSize,
      selectedGenre: state.MovieReducers.selectedGenre ,
      currentPage: state.MovieReducers.currentPage,
      sortColumn: state.MovieReducers.sortColumn

  }
}

const mapDispatchToProps = (dispatch) => {

  return{

      setSearchResult : (searchValue) => {
        dispatch({
          type:'SET_SEARCH_RESULT',
          payload: {searchValue}
        })
      },

      setCurrentPageGenre : (type) =>{
      dispatch({ type })
    },

      setCurrentPage : (type, filteredmovieslength, currentpage) => {
         dispatch({
          type,
          payload: {filteredmovieslength, currentpage}
        })
      }, 

      setSortColumn : (sortColumn) => {
        dispatch({
          type:'SORT_COLUMN',
          payload: sortColumn
        })
      },

      setGenreSelect : (genre) => {        
          dispatch({
            type: 'SELECT_GENRE',
            payload: genre
            
          })
      },

      setInitState: (type)=> {
         dispatch({
          type
          })
      },

      setDelete: (type, Id) => {
        dispatch({
          type,
          payload: Id
        })
      },

      setPageChange : (type, page) =>{
          dispatch({
            type,
            payload: page
          })
      },
 

  }

}
 

export default connect(mapStateToProps,mapDispatchToProps)(Movie)

// export default Movie;

