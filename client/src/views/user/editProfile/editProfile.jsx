import React, { useState, useEffect } from 'react';
import Input from '../../../components/formElements/Input';
import TextArea from '../../../components/formElements/textArea';
import { useNavigate } from 'react-router';
import editIcon from '../../../images/editIcon.png'
import FileBase from 'react-file-base64';
import { getProfile } from '../../../store/actions/profile';
import './editProfile.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../../store/actions/profile';
import { useLocation } from 'react-router';


//profile model
const profile = {
    user: "", profilePhoto: "", about: "", address: "", mobile: "", socialMedia: {
        facebook: "",
        instagram: ""
    }
};


const EditProfile = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const errors = useSelector((state) => state.errors);
    const dispatch = useDispatch();
    console.log(profile); 

    
    
    const user = JSON.parse(localStorage.getItem('profile'));
    const [userProfile, setUserProfile] = useState(profile);
    const [id, setId] = useState(user.result.googleId ? user.result.googleId : user.result.id);
    
    
    
    //   useEffect(() => {
        //    dispatch(getProfile(user.result.email))
       
            
            
            //  },[location])
            
            
            //  if(preProfile) setUserProfile(preProfile);
            
            useEffect(() => {
             dispatch(getProfile(user.result.email))
                
            }, [user.result.email])

            const preProfile = useSelector((state) =>state.userProfile.profile);
            useEffect(() => {
                setUserProfile(preProfile)
            }, [preProfile])
            
            

    
    //checking if the user exists to acces the page
    if (!user) {
        navigate('/home')
    }


    // soving form data to the state
    const handleChange = (e) => {
        if (e.target.name === "facebook" || e.target.name === "instagram") {
            setUserProfile((prevState) => ({
                ...prevState,
                socialMedia: { ...prevState.socialMedia, [e.target.name]: e.target.value, }
            }));
        }else{
          //  setUserProfile({ ...userProfile, [e.target.name]: e.target.value });
          setUserProfile({
            profilePhoto: preProfile.profilePhoto,
             about: preProfile.about,
              address: preProfile.address,
               mobile: preProfile.mobile,
            socialMedia:  preProfile.socialMedia
           })
            
        }
       };
 
   console.log(userProfile);
    const handleSubmit = async (e) => {
        e.preventDefault();

            dispatch(updateProfile(userProfile,id,navigate));
        };


    return (
        <div className='container-fluid py-5 edit-profile '>
            <form className='border border-warning  p-4  mx-5    edit-form ' onSubmit={handleSubmit}>
                <h3>Update Profile</h3>

                <div className='row'>
                    <div className='col-md-6 col-sm-6   imagecont'>
                        <img className=" profile-image " src={userProfile.profilePhoto} alt='profile image' />
                        <div className="imag-upload">

                            <FileBase id="file-input" type='file' multiple={false} onDone={({ base64 }) => setUserProfile({ ...userProfile, profilePhoto: base64 })} />


                        </div>
                    </div>
                    <div className='col-md-6 col-sm-6'>

                        <fieldset disabled>

                            <Input placeholder={user?.result.name} label="Name" id="disabledTextInput" />
                            <Input placeholder={user?.result.email} label="Email" id="disabledTextInput" />
                        </fieldset>
                    </div>

                </div>
                <div>
                    <TextArea
                        label="About"

                        name="about"
                        placeholder="few lines about yourself..."
                        onChange={handleChange}
                        value={userProfile.about}
                        error={errors.about}
                    />
                    <TextArea
                        label="Address"
                        name="address"
                        placeholder="Enter your Address..."
                        onChange={handleChange}
                        value={userProfile.address}
                        error={errors.address}
                    />


                    <div className='row mt-3'>
                        <div className='col-sm-6 com-md-6'>

                            <Input
                                label="Phone Number"

                                name="mobile"
                                onChange={handleChange}
                                value={userProfile.mobile}
                                error={errors.mobile}
                            />
                        </div>
                        <h5>Social Media</h5>
                        <div className='col-md-6 col-sm-6'>
                            <Input label="Facebook"
                                name="facebook"
                                onChange={handleChange}
                                error={errors.facebook}
                                value={userProfile.socialMedia.facebook? userProfile.socialMedia.facebook : " "}

                            />
                        </div>
                        <div className='col-md-6 col-sm-6'>
                            <Input label="Instagram"
                                name="instagram"
                                onChange={handleChange}
                                error={errors.instagram}
                                value={userProfile.socialMedia.instagram? userProfile.socialMedia.instagram : " "}
                            />

                        </div>


                    </div>
                    <hr/>
                    <div className='col-12 col-md-12 col-sm-12 col-lg-12 text-center mt-5'>

                    <button type='submit' onClick={handleSubmit}  className='btn btn-outline-warning px-5 button'>Update</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default EditProfile;
