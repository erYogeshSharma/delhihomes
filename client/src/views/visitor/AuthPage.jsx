import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Row,   Button } from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
   

import {signup,signin, googleLogin  } from '../../store/actions/auth';
import Input from '../../components/formElements/Input';
import { AUTH  } from '../../store/actionTypes';
import './authpage.css'
import { ReactComponent as YourSvg } from '../../images/svg/lock.svg';


const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '', errors: {} };

const AuthPage = () => {
    
   
    const msg = useSelector((state) =>  state.message.msg);
    const errors = useSelector((state) =>  state.errors);
    const data = useSelector((state) => state);
    console.log(data);
    
    
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
 
    
    if(msg) {
        toast.success(msg)
        
    };
    if(errors.error){
        toast.error(errors.error)
    };
    
   

    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
     
        if (isSignup) {
            dispatch(signup(form, navigate));
           if(form.length > 0) setIsSignup(false)
            
        }else{
            dispatch(signin(form,navigate));
        }
    };
   const googleSuccess = async (res) => {
       const result = res?.profileObj;
       const token = res?.tokenId;
  
       try{
        dispatch(googleLogin(result,token));
        navigate('/');
       }catch(error){
           console.log(error);
       }
   };
    const googleError = () => console.log.apply("Google Sign in was unsuccesful. Try again later");

     
    
    const handleChange = (e) =>  setForm( {...form, [e.target.name] : e.target.value})

    return (
        
     
        <div className="container-fluid authcontainer   ">
       
       
          <ToastContainer/>
            <div className="row py-5  ">
                <div className=" authpage col-lg-4 col-md-6 col-sm-8 col-10 offset-md-4 offset-1 offset-sm-2 border p-3 pb-4">
                    <form className='form authform' onSubmit={handleSubmit} >
                        
                        <div className="title font-weight-bold text-center display-6 my-5">{isSignup ? "Sign up to Delhi Homes" : "Sign in "}</div>
                        {isSignup && <Row>
                            <Input classes='col-md-6' label='First Name'  onChange={handleChange}  name="firstName" error={errors.firstName} />
                            <Input classes='col-md-6' label='Last Name' onChange={handleChange}  name="lastName" error={errors.lastName} />
                        </Row>}
                        <Input label='Email'  onChange={handleChange} name="email" error={errors.email} />
                        <Input label='Password'  onChange={handleChange} type='password' name="password" error={errors.password} />
                        {isSignup && <Input label='Confirm Password'  onChange={handleChange} type='password'  name="confirmPassword" error={errors.confirmPassword} />}



                        <div className="d-grid gap-2 mt-4">
                            <Button variant="warning" size="lg" onClick={handleSubmit}>
                                {isSignup ? "Sign-Up" : "Sign In"}
                            </Button>
                            <GoogleLogin 
                            clientId= "907428189436-v0j01nvq3soe7j5nc6t3ut8iuk959dra.apps.googleusercontent.com"
                            render={(renderProps) => (
                            <Button variant="danger" size="lg"  onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                Login with Google
                            </Button>

                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleError}
                            cookiePolicy='single_host_origin'

                            />

                           

                            <Button    onClick={switchMode} className=' switchmode text-center '> {isSignup ? 'Already have a account? Sign in' : "Don't have a account Sign Up"}</Button>
      
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default AuthPage;
