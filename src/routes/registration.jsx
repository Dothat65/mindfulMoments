import React, { useState } from 'react';
import '../styles/registration.css';
import imageSrc from '../assests/logo.png';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    let navigate = useNavigate();

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
    };

    const handleResetPassword = () => {
            navigate('/new-password');
        };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSignUp && password !== reEnterPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        const url = isSignUp ? 'http://localhost:8080/users' : 'http://localhost:8080/users/login';
        const body = isSignUp ? {
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password,
            username: username,
        } : {
            username: username,
            password: password,
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
        .then(async response => {
            if (!response.ok) {
                const text = await response.text();
                return await Promise.reject(text);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/');  // navigate to home page
        })
        .catch((error) => {
            setErrorMessage(error);
        });
    };

    return (
        <div>
            <div className="registration-form">
                <div className="login-section">
                    <img src={imageSrc} alt="" />
                    <form onSubmit={handleSubmit}>
                        {isSignUp && <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />}
                        {isSignUp && <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />}
                        {isSignUp && <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />}
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <div className="password-input">
                            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
                        </div>
                        {isSignUp && (
                            <div className="password-input">
                                <input type={showPassword ? "text" : "password"} placeholder="Re-enter Password" value={reEnterPassword} onChange={(e) => setReEnterPassword(e.target.value)} />
                                <span onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</span>
                            </div>
                        )}
                        <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                        {!isSignUp && (
            <button onClick={handleResetPassword}>Reset Password</button>
        )}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
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