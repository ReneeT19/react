import React from 'react';
import GoogleLogin from 'react-google-login';
import { userNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';

// tailwindcss h-screen: to make an element span the entire height of the viewport
const Login = () => {
  const responseGoogle = (response) => {

  }
  return (
    /*w-full: full width h-full: full height */
    <div className="flex justify-start items-center flex-col h-screen"> 
      <div className="relative w-full h-full"> 
        <video 
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        {/* position a div absolutely on top of the current div and the overlay provides black overlay on current video*/}
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" /> 
          </div>
          <div className="shadow-2xl">
            <GoogleLogin 
              // leave it empty as we need to get it from google
              clientId=''
              // render a callback function
              render={(renderProps) => (
                // p-3 means padding 3
                // onClick comes from renderProps which comes from GoogleLogin package
                <button 
                type="button" 
                className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}> 
                  <FcGoogle className="mr-4" />Sign in with Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle} //responseGoogle function is implemented in the beginning
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Login