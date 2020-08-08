import React, { useEffect} from 'react';
import { connect } from "react-redux";
import http from "../services/http";


const Customers = (props) => {


    useEffect(() => {
        props.getUsers()
      }, [])

    return props.loading ? 
        (<h2>Loading...</h2>) :

         props.error ? (<h3>{props.error}</h3>) : 
         (
            <div>
              <h2>Users List</h2>
              <div>
                { 
                  
                  props.users.map( user => <p> {user.id } - { user.name } - { user.email } </p> )
                  
                  }
              </div>
            </div>
          )

}


const mapStateToProps = (state) => {
    
      return{
        users : state.CustomerReducer.data,
        loading : state.CustomerReducer.loading,
        error : state.CustomerReducer.error
    }
};

 

const fetchUserRequest = () => {
    return{ type: 'FETCH_USERS_REQUEST' }
}


const fetchUserSuccess = (users) => {
    return{ type: 'FETCH_USERS_SUCCESS', payload: users }
}

const fetchUserFailure = (err) => {
    return{ type: 'FETCH_USERS_FAILURE', payload : err   }
}


const getUsers = () => {
    
    return async function(dispatch){
        
        try{  

            dispatch(fetchUserRequest())
             try{
                const { data : users} = await http.get('https://jsonplaceholder.typicode.com/users')
                dispatch(fetchUserSuccess(users))

            }
            catch(ex){
                console.log('here...')
                dispatch(fetchUserFailure(ex.message))
        }   
            }

        
        catch(ex){
            dispatch(fetchUserFailure(ex.message))
        }   
    }
    
}

const mapDispatchToProps = (dispatch) => {
    
    return {
   
        getUsers : () => {
            dispatch(getUsers())
    }
}

}


// export default Customers;
export default connect(mapStateToProps,mapDispatchToProps)(Customers)
 