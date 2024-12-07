import Logo  from "../assets/logo-hi5-black.png";

function LoginGoogle() {
    
    return ( 
        <div className="app-login">
        <div className="wrapper-container-login">
          <div className="container-login">
            <div className="welcome-section">
              <h2 className="welcome-title">
                Welcome to{" "}
                <span className="highlight">HIGHTFIVE Restaurant+</span>
              </h2>
              {/* <Link to="/"> */}
                <img src={Logo} alt="Logo" className="logo" />
              {/* </Link> */}
              <p className="description">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="copyright">Copyright Hight Five Group</p>
            </div>
            <div className="form-section">
              <form className="form-login"
              
            //    onSubmit={handleSubmit}
               >
                <input
                  className="input-login"
                  type="email"
                  placeholder="Email"
                  name="email"
                //   onChange={handleChangeInputs}
                />
                <input
                  className="input-login"
                  type="password"
                  placeholder="Password"
                  name="password"
                //   onChange={handleChangeInputs}
                />
                <button type="submit" className="btn"
                //  disabled={isSubmitting}
                 >
                {/* {isSubmitting ? 'Đang thực hiện...' : 'Login'} */}
                </button>
                <div className="forgot-password">
                  {/* <Link to="/forgot-password">Forgot password?</Link> */}
                </div>
              </form>
              <p className="account">
                Do not have an account?{" "}
                {/* <Link className="redirect-link" to="/signup"> */}
                  Create an account
                {/* </Link> */}
              </p>
              <div className="social-buttons">
                <button
                  className="facebook icon-social-network"
                //   onClick={handleClickFacebook}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                  <p className="text-social-network">Facebook</p>
                </button>
                <button
                  className="google icon-social-network"
                //   onClick={handleClickGoogle}
                >
                  <i className="fa-brands fa-google"></i>
                  <p className="text-social-network">Google</p>
                </button>
              </div>
              {/* <div className="social-buttons">
                <button className="facebook icon-social-network">
                  <i className="fa-brands fa-facebook-f"></i>
                  <p className="text-social-network">Facebook</p>
                </button>
                <button className="google icon-social-network">
                  <i className="fa-brands fa-google"></i>
                  <p className="text-social-network">Google</p>
                </button>
              </div> */}
              <p className="team-info">HightFive Team © 2024</p>
            </div>
          </div>
        </div>
      </div>
     );
}

export default LoginGoogle;