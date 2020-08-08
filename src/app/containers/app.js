import React from 'react';
import Movie from './movie';
import {Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import NavBar from './navBar'
import Customers from '../component/customers'
import MovieDetails from '../component/movieDetails'
import NotFound from '../component/notFound'
import LoginForm from '../component/loginForm';
import Rate from './tr'; 
import HomeMovie from '../component/homeMovie';
import Status from "./status";
  
 
function App(props) {
  
  return (
   
      <React.Fragment>

          <BrowserRouter>
            <NavBar />

              <div className="container" style={{ marginTop : '50px' }}>

                <Switch>
                  <Route path="/customers" exact component={Customers} />  
                  <Route path="/rate" exact component={Rate} /> 
                   <Route path="/login" exact component={LoginForm} />
                  <Route path="/status" exact component={Status} />
                  <Route path="/home" exact component={HomeMovie} />
                  <Route path="/" exact component={Movie} />
                  <Route path='/notfound' component={NotFound} />
                  <Redirect  to='/notfound' />
                </Switch>

              </div>
          </BrowserRouter>
    </React.Fragment>
   
   );
}

export default App;
 
