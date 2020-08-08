import React, { useState} from 'react';
import { connect } from "react-redux";
import Input from "./input";
import {renderButton, renderInput } from "./comman/form";
import {GoogleLogin, GoogleLogout} from 'react-google-login';

   
const LoginForm = (props) => { 
    
    const [signed, setsigned] = useState(false);

    const validate = () => {
         const errors = {};
        if(props.username.trim() === '') errors.username = 'Username is required'
        if(props.password.trim() === '') errors.password = 'Password is required'

        return Object.keys(errors).length === 0 ? {} : errors
    }
   
    const handleChange = ({currentTarget : input}) => {
           
            if(input.name === 'username'){ 
                props.setUsername(input.value)
                input.value.trim() === '' ? props.setError({ username : 'Username is required'  }) : delete props.errors.username
            }

            if(input.name === 'password'){ 
                props.setPassword(input.value)
                input.value.trim() === '' ? props.setError({ password : 'Password is required'  }) : delete props.errors.password

            
            }       
        }

    const handleSubmit = (event) => {
        
         event.preventDefault()
         const err = validate();
         props.setError(err)
   
         if(err) return     
        }

    const responseGoogle = (response) => {

        if(response.error) {
            return console.log(response.error)   
        }

        else{

            setsigned(response.isSignedIn())
            console.log(response)
            console.log('Successd logedIn...')
        }
        
    }  
    const onLogoutSuccess = () => {
        console.log(signed)
        console.log(' Success Loged out ')

    } 
    
    const onLogoutFailure = () => {
            console.log('Fail logged out...')
    } 
    
    return(
        <div className="">
          <h4>LogIn</h4>          
        <form onSubmit= {handleSubmit}>

             {renderInput('username', 'Username', handleChange, props.errors.username, props.username)}       
             {renderInput('password', 'Password', handleChange, props.errors.password, props.password, 'password')}
             {renderButton('Submit', validate)}
        
        </form>
       <br/>

        <GoogleLogin
            clientId={"786854697520-o459r4s7jg0tt6m5g5n9ru1dvtsm7vcf.apps.googleusercontent.com"}
            buttonText={"Login with google"}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn = {signed}
            cookiePolicy = {'single_host_origin'}
            />

        <GoogleLogout
            clientId={"786854697520-o459r4s7jg0tt6m5g5n9ru1dvtsm7vcf.apps.googleusercontent.com"}
            buttonText={"Logout"}
            onLogoutSuccess={onLogoutSuccess}
            onFailure = { onLogoutFailure }
             />

         </div>
     )
    
}

const mapStateToProps = (state) => {
    
    return {
            username : state.FormReducer.data.username,
            password : state.FormReducer.data.password,
            errors : state.FormReducer.errors
        }
}
  
const mapDispatchToProps = (dispatch) => {
     
    return{     

        setUsername: (value) => {
               dispatch({ type:'SET_USERNAME', payload: value  })
        },

        setPassword: (value) => {
             dispatch({ type:'SET_PASSWORD', payload: value  })
         },

         setError : (errors) => {
            dispatch({type:'SET_ERROR', payload: errors})
         }

    }

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
