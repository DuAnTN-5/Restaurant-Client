import "./css/Login.css";
import logohi5 from '../assets/logo-hi-5.png'

function Login() {
    return (
        <div className="App">
            <div className="container">
               <div className="container-login">
               <div className="welcome-section">
                    <h2 className="welcome-title">Welcome to <span className="highlight">HIGHTFIVE Restaurant+</span></h2>
                    <img src={logohi5} alt="Logo" className="logo" />
                    <p className="description">
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p className="copyright">Copyright Hight Five Group</p>
                </div>
                <div className="form-section">
                    <h3>Login</h3>
                    <form>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <div className="forgot-password">
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn">Login</button>
                    </form>
                    <p className="account">Do not have an account? <a className="redirect-link" href="./Signup">Create an account</a></p>
                    <div className="social-buttons">
                        <button className="facebook icon-social-network">
                        <i className="fa-brands fa-facebook-f"></i>
                            <p className="text-social-network">
                            Facebook
                            </p>
                            </button>
                        <button className="google icon-social-network">
                        <i className="fa-brands fa-google"> </i>
                        <p className="text-social-network">
                            Google
                        </p>
                            </button>
                    </div>
                    <p className="team-info">HightFive Team © 2024</p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Login;

