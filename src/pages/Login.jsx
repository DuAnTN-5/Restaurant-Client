import "../style/Login.css";
// import logohi5 from '../assets/logo-hi-5.png';
import logo from "../assets/logo-hi5-black.png";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../api";
import { toast } from "react-toastify";

function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       // Gửi yêu cầu đăng nhập tới API
//       const response = await axios.post("API/login(Thay)", {
//         email,
//         password,
//       });

//       // Nếu đăng nhập thành công
//       if (response.status === 200) {
//         // Lưu thông tin người dùng hoặc token nếu cần
//         localStorage.setItem("token", response.data.token);
//         navigate("/");
//       }
//     } catch (error) {
//       // Xử lý lỗi
//       if (error.response) {
//         // Lỗi từ server
//         setErrorMessage(error.response.data.message);
//       } else {
//         // Lỗi mạng
//         setErrorMessage("An error occurred. Please try again.");
//       }
//     }
//   };

const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  
  const handleChangeInputs = (event) => {
    const { name, value } = event.target;
    // console.log(name, value)
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value })); // dấu tròn là return về luôn
  };

  
  function handleSubmit(event){
    event.preventDefault();
    api
    .post("/login", inputs)
    .then(res =>{
        console.log(res)
        if(res.data.success === true){
            const tokenUser = res.data.data.token
            toast.success("Đăng nhập thành công")
            console.log(tokenUser)
            localStorage.setItem("token", JSON.stringify(tokenUser)) // lưu vào local
            navigate("/")
        }
    })
    .catch(error=>{
        console.log(error)
        if(error.response.data.success === false){
            toast.error("Tên đăng nhập hoặc mật khẩu không chính xác")

        }
    })
}
console.log(inputs)

  return (
    <div className="app-login">
      <div className="wrapper-container-login">
        <div className="container-login">
          <div className="welcome-section">
            <h2 className="welcome-title">
              Welcome to{" "}
              <span className="highlight">HIGHTFIVE Restaurant+</span>
            </h2>
            {/* <Link to="/"> <img src={logohi5} alt="Logo" className="logo" /></Link> */}
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
            </Link>
            <p className="description">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="copyright">Copyright Hight Five Group</p>
          </div>
          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChangeInputs}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChangeInputs}
              />
              <button type="submit" className="btn">
                Login
              </button>
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            </form>
            <p className="account">
              Do not have an account?{" "}
              <Link className="redirect-link" to="/signup">
                Create an account
              </Link>
            </p>
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
}

export default Login;
