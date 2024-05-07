import React, { useState } from 'react';
import '../styles/registration.css';
import imageSrc from '../assests/logo.png';

function Registration() {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div>
            <div className="registration-form">
                <div className="login-section">
                    <img src={imageSrc} alt="" />
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        {isSignUp && <input type="text" placeholder="Username" />}
                        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                    </form>
                    <p onClick={toggleSignUp}>
                        {isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
