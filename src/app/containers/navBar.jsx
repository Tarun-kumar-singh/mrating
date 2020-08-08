import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const NavBar = (props) => {
  
    const navList = [{name:'Movie',path:'/'}, {name:'Home', path:'/home'}, {name:'Customers', path:'/customers'},
                     {name:'Rentals', path: '/rentals'}, {name:'Login', path:'/login'},
                      {name: 'Rate', path: '/rate'}, {name: 'Details', path: '/moviedetails'},
                        {name:'Status', path:'/status'}
                    ]

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         <Link className=" navbar-brand text-danger" to="/">Videly</Link>
   
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ">
                {navList.map((item)=>(
                    
                    <Link 
                        key = { item.name}
                        className={item.name === props.currentLink ? 'text-danger nav-item nav-link active' : 'text-white nav-item nav-link' }
                        to = {item.path}
                        onClick = {()=> props.setLink(item.name) } > 
                        {item.name} 
                    </Link>
                
                ))}
            </div>
         </div>
        </nav>
    )

}

  
const mapStateToProps = (state) => {
     
    return {
         currentLink : state.NavBarReducer.currentLink
        }
    }
  
const mapDispatchToProps = (dispatch)=> {
     
    return{
        setLink: (type) => {
           dispatch({ type  })
        }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
  


// export default NavBar