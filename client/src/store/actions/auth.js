import * as actionTypes from '../actionTypes.js';
import * as api from '../../api/index.js';



export const googleLogin = (result, token) => async(dispatch) => {
  try {
    dispatch({type:actionTypes.AUTH , payload: {result, token}});
    await api.googleLogin(result);
    console.log(result);
    
    
    
    

    
  } catch (error) {
    console.log(error);
    
  }
         
}


export const signup = (formData, navigate) => async (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_ERRORS
  });
  dispatch({
    type: actionTypes.CLEAR_MESSAGE
  });

  try {
    

      const { data } = await api.signUp(formData);
      

      dispatch({
        type: actionTypes.SET_MESSAGE,
        payload: data.msg

      });

      dispatch({

        type: actionTypes.CLEAR_MESSAGE
      });

    


  } catch (error) {
    dispatch({
      type: actionTypes.SET_ERRORS,
      payload: error.response.data
    });
    dispatch({
      type: actionTypes.CLEAR_MESSAGE
    });
  }
}

export const signin = (formData, navigate) => async (dispatch) => {
  dispatch({
    type: actionTypes.CLEAR_ERRORS
  });

  try {
    const { data } = await api.signIn(formData);

    if (data) {


      dispatch({
        type: actionTypes.AUTH,
        payload: data
      });
    }
    navigate('/');

  }
  catch (error) {
    dispatch({

      type: actionTypes.SET_ERRORS,
      payload: error.response.data
    });
    dispatch({
      type: actionTypes.CLEAR_ERRORS
    });
  }
};




export const clearError = () => dispatch => {
  dispatch({
    type: actionTypes.CLEAR_ERRORS
  });
};

export const clearMessage = () => dispatch => {
  dispatch({
    type: actionTypes.CLEAR_MESSAGE
  });
};
