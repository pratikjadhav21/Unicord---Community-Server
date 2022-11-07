import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import GoogleLogin from 'react-google-login'

import './Login.css'
import { auth } from "./Firebase";
const styleForLogo = {
    color: 'white',
    height: '12vh',
    width: '12vh'
};



export default function Login() {
    const navigate = useNavigate(); // Previously it was useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(nickname)
    const signIn = e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                navigate('/home');
            })
            .catch(error => alert(error.message))

    }
    const register = e=>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) =>{ // if auth is not null
                console.log(auth);
                if(auth){
                    navigate('/home')
                }
            })
            .catch(error => alert(error.message)) // Do it alert("Account already exists")
    }

    const onGoogleSuccess = (response)=>{
        console.log(response);
        // console.log(response.profileObj);
        navigate('/home');
    }
    const onGoogleFailure = (response)=>{
        console.log(response);
        alert('Unsuccessful Login, Maybe try again later!');
    }
  return (
    <div className="login">
        <div className="login__logo__container">
            <SportsEsportsIcon
             style={styleForLogo}
            />
        </div>

        <div className="login__container">
            <h2>Sign-in</h2>
            <form >
                <div className="form__contents">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    
                    
                    <button type='submit' onClick={signIn}>Sign-In</button>
                </div>
            </form>
            <p>
                By signing-in you agree to the conditions of VIT's Community Server. Please
                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className='login__registerButton' onClick={register}>Create Account</button>
        </div>
        <div className="google__signin">
        {/* also the client Secret is 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 */}
            <GoogleLogin className='google__login'
            clientId='987083654885-3ucol4aj3m15bnu10gnbi8oqhuv99hsq.apps.googleusercontent.com'
            buttonText='Continue with Google'
            onSuccess={onGoogleSuccess}
            onFailure={onGoogleFailure}
            cookiePolicy={'single_host_origin'}
             
            />
        </div>
        
    </div>
    
  )
  
}

