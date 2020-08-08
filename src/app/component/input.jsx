import React from 'react';

const Input = (props) => { 
     return(
            <div className="form-group col-lg-4">
                <label htmlFor = { props.name }> { props.label } </label>
                <input  
                    value = { props.username } 
                    onChange = {props.onChange} 
                    id = {props.name}
                    name = { props.name}
                    type = {props.type}
                    placeholder = { props.placeholder}
                    className="form-control form-group"/>

                    { props.errors && <div className="alert alert-danger"> { props.errors } </div> }
            </div>   
    )
}


export default Input;