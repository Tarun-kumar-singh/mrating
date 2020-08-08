import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app/containers/app';
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from "react-redux";
import { Store } from './app/store';


ReactDOM.render(

      <Provider store={ Store }> 
      <App />
      </Provider>
                
,  document.getElementById('root'))