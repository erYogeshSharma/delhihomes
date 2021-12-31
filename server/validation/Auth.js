import Validator from "validator";
import isEmpty from "./isempty.js";

export const validateAuthInput = ( data ) => {
    let errors ={ };
    

    data.firstName =!isEmpty(data.firstName) ? data.firstName : "";
    data.lastName =!isEmpty(data.lastName) ? data.lastName : "";
    data.email =!isEmpty(data.email) ? data.email : "";
    data.password =!isEmpty(data.password) ? data.password : "";
    data.password2 =!isEmpty(data.confirmPassword) ? data.confirmPassword : "";
    
    if(Validator.isEmpty(data.firstName)){
        errors.firstName = " First Name feild is required";
    }
    
    if(!isEmpty(data.name)){
        if(!Validator.isLength(data.firstName, {min:2, max: 30 })){
            errors.firstName="First Name must be between 2 and 30 characters";
        }
    }
    if(Validator.isEmpty(data.lastName)){
        errors.lastName ="Last Name feild is required";
    }
    
    if(!isEmpty(data.lastName)){
        if(!Validator.isLength(data.lastName, {min:2, max: 30 })){
            errors.lastName="Last Name must be between 2 and 30 characters";
        }
    }
    if(Validator.isEmpty(data.email)){
        errors.email ="Email feild is required";
    }

    if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid"
    }
    if(Validator.isEmpty(data.password)){
        errors.password ="password feild is required";
    }
    
    if(!Validator.isLength(data.password, {min:8 , max:30})){
        errors.password="Password must be atlease 8 characters"
    }
    if(Validator.isEmpty(data.password2)){
        errors.confirmPassword ="Confirm password feild is required";
    }

    if(!Validator.equals(data.password,data.password2)){
        errors.confirmPassword ="Passwords must match"
    }

    return{
    
        errors,
        isValid: isEmpty(errors)
    };
  
    




} ;
export const validateLoginInput = ( data ) => {
    let errors ={ };
    

   
    data.email =!isEmpty(data.email) ? data.email : "";
    data.password =!isEmpty(data.password) ? data.password : "";
    
    
    
    
    if(Validator.isEmpty(data.email)){
        errors.email ="Email feild is required";
    }

    if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid"
    }
    if(Validator.isEmpty(data.password)){
        errors.password ="password feild is required";
    }
    
  

    return{
    
        errors,
        isValid: isEmpty(errors)
    };
  
    




} ;


 
 