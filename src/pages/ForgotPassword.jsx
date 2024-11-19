import "../style/Login.css";
import { Link } from 'react-router-dom';
import logohi5 from '../assets/logo-hi-5.png';
import { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            // Gửi yêu cầu reset password tới API
            const response = await axios.post('API/forgot-password(Thay)', { email });

            if (response.status === 200) {
                setMessage('A reset password link has been sent to your email.');
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="app-login">
            <div className="wrapper-container-login">
                <div className="container-login">
            <div className="welcome-section">
                        <h2 className="welcome-title">Welcome to <span className="highlight">HIGHTFIVE Restaurant+</span></h2>
                       <Link to="/"> <img src={logohi5} alt="Logo" className="logo" /></Link>
                        <p className="description">
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p className="copyright">Copyright Hight Five Group</p>
                    </div>
            
                    <div className="form-section">
                        <h2 className="welcome-title">Forgot Password</h2>
                        {message && <p className="success-message">{message}</p>}
                        {error && <p className="error">{error}</p>}
                        <form className="form-login" onSubmit={handleForgotPassword}>
                            <input
                                className="input-login"
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" className="btn">Send Reset Link</button>
                        </form>
                        <p className="account">Remembered your password? <Link className="redirect-link" to="/login">Back to Login</Link></p>
                    </div>
                
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
