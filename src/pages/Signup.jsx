import '../style/Signup.css';
import logohi5 from '../assets/logo-hi-5.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.'); // Kiểm tra mật khẩu
            return;
        }

        try {
            // Gửi yêu cầu đăng ký tới API
            const response = await axios.post('API/signup', {
                name,
                email,
                password
            });

            // Nếu đăng ký thành công
            if (response.status === 201) {
                navigate('/login');
            }
        } catch (error) {
            // Xử lý lỗi
            if (error.response) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="app-signup">
            <div className="wrapper-container-signup">
                <div className="container-signup">
                    <div className="welcome-section">
                        <h2 className="welcome-title">Welcome to <span className="highlight">HIGHTFIVE Restaurant+</span></h2>
                        <Link to="/"><img src={logohi5} alt="Logo" className="logo" /></Link>
                        <p className="description">
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p className="copyright">Copyright Hight Five Group</p>
                    </div>
                    <div className="form-section">
                        {errorMessage && <p className="error">{errorMessage}</p>}
                        <form className='form-signup' onSubmit={handleRegister}>
                            <input className="input-signup"
                                type="text"
                                placeholder="Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input className="input-signup"
                                type="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input className="input-signup"
                                type="password"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input className="input-signup"
                                type="password"
                                placeholder="Confirm Password"
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div className="checkbox">
                                <input className='checkbox-button' type="checkbox" id="terms" required />
                                <label htmlFor="terms">Agree to the terms and policy</label>
                            </div>
                            <button type="submit" className="btn">Register</button>
                        </form>
                        <p className='account'>Already have an account? <Link className='redirect-link' to="/login">Login</Link></p>
                        <div className="social-buttons">
                            <button className="facebook icon-social-network">
                                <i className="fa-brands fa-facebook-f"></i>
                                <p className="text-social-network">Facebook</p>
                            </button>
                            <button className="google icon-social-network">
                                <i className="fa-brands fa-google"></i>
                                <p className="text-social-network">Google</p>
                            </button>
                        </div>
                        <p className="team-info">HightFive Team © 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
