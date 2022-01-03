import React,{useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../../store/actions/profile';
import './dashboard.css';




const Dashboard = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const userProfile = useSelector((state) => state.userProfile);
    const user = JSON.parse(localStorage.getItem('profile'));
     

    const [isUser, setisUser] = useState(false);
    

    //check if the viewer is the same user
    useEffect(() => {   
        setisUser(((user? (user.result.googleId ? user.result.googleId : user.result.id) : "null" )
         === userProfile.profile.user)? true : false)
         }, [userProfile])
    
    //dispatch email 
    useEffect(()=> {
        dispatch(getProfile(params.email))
    },[params.email]);
       

    
    return (
        <div className='container-fluid dashboard py-5 '>
         <div className='row profile-container mx-3 py-3'>
             <div className='col-12 col-md-5 col-sm-5 col-lg-5'>
             <img src={userProfile.profile.profilePhoto} className=" mx-auto d-block profile-pic" alt="..."/>

             </div>
             <div className='col-12 col-md-7 col-sm-7 col-lg-7 mx-auto d-block '>
                <p className='  fs-1 fw-lighter'>{userProfile.user.name} 

                {(isUser == true) && (
                 <span> <a href="/edit-profile" as={Link} className ="btn btn-outline-success">Edit Profile</a></span>
                )}
                </p> 
                <p className='  fs-3 fw-light m-0 '>{userProfile.user.email}</p>   
                <p className='  fs-5 fw-light m-0 '> {userProfile.profile.about}</p>   
                <p className='  fs-3 fw-normal m-0'> 7 Properties</p>   
             </div>
         </div>
             
        </div>
    )
}

export default Dashboard;
