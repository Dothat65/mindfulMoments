import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/passwordReset.css';
import imageSrc from '../assests/logo.png';

function NewPassword() {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Add validation to check if newPassword and confirmPassword are the same

        // Send a request to your backend to update the password
        const url = `http://localhost:8080/users/${username}/reset-password`; 

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({newPassword: newPassword})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Navigate to the login page after successful request
            navigate('/registration');
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle the error
            // This might include showing an error message to the user
        });
    };

    return (
        <form onSubmit={handleSubmit} className="reset-form">
            <img src={imageSrc} alt="" />
            <input type="text" className="reset-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <div className="input-wrapper">
                <input type={showPassword ? "text" : "password"} className="reset-input" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                <button type="button" className="show-password-button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
            <div className="input-wrapper">
                <input type={showPassword ? "text" : "password"} className="reset-input" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="button" className="show-password-button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
            <button type="submit" className="reset-button">Reset Password</button>
        </form>
    );
}

export default NewPassword;