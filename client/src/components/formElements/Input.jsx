import React from 'react'



const restrictSpace = (e) => {
    if(e.currentTarget.value.startsWith(" ")){
        e.currentTarget.value ="";
    }
};
const Input = ({ error,classes,label,id,placeholder,name, onChange, value,validate, type='text'}) => {
    let msg = "";
    if(error){
        msg = error ? 'is-invalid' : "";
    }
    return (
        <div className = {`form-group ${classes}`}  >
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                className={`form-control ${msg}`}
                placeholder={placeholder}
                label={label}
                
                name = {name}
                onChange={onChange}
                value={value}
                onKeyUp={validate}
                onKeyDown={restrictSpace}
                onFocus={validate}
                id={id}
            />
            <div className='invalid-feedback'>{error}</div>
        </div> 
    )
}

export default Input
