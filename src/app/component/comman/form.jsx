
import React from 'react';
import Input from "../input";


export const renderButton = (label, validate) => {
            return(
            <button 
            disabled = { Object.keys(validate()).length === 0 ? false : true }
            className="btn btn-primary">{label}</button>
            )
        } 

export const renderInput = (name, label = '', handleChange, errors, username, type='text', placeHolder='' ) => {
             return(
                <Input
                    label = {label}
                    name = {name}
                    type = {type}
                    name = {name}
                    onChange = {handleChange}
                    errors = {errors}
                    value = {username}
                    placeholder = {placeHolder}
             />
            )
  }