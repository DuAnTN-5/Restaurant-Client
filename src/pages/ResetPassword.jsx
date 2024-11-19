import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo-hi5-black.png";
import { useEffect, useState } from "react";
import { api } from "../api";

function ResetPassword() {
  const [input, setInput] = useState({
    password: "",
    c_password: "",
  });
  // const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useParams();
  useEffect(() => {
    if (token) {
      // Gửi yêu cầu xác thực email
      api
        .get(`/verify-email/${token}`)
        .then((response) => {
          if (response.data.success === true) {
            // setMessage("Xác thực thành công !");
            setTimeout(() => {
              navigate("/login"); // Chuyển hướng về trang đăng nhập sau khi xác thực thành công
            }, 3000);
          } else {
            // setMessage(
            //   "Xác thực email thất bại. Mã xác thực không hợp lệ hoặc đã hết hạn."
            // );
            setTimeout(() => {
              navigate("/register");
            }, 5000);
          }
        })
        .catch((error) => {
          console.log(error);
          // setMessage(
          //   "Xác thực email thất bại. Mã xác thực không hợp lệ hoặc đã hết hạn."
          // );
          setTimeout(() => {
            navigate("/register");
          }, 5000);
        });
    } else {
      // setMessage("Không tìm thấy mã xác thực.");
    }
  }, []);

  const handleChangeInputs = (event) => {
    const { name, value } = event.target;
    // console.log(name, value)
    setInput((prevInputs) => ({ ...prevInputs, [name]: value })); // dấu tròn là return về luôn
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="app-signup">
        <div className="wrapper-container-signup">
          <div className="container-signup">
            <div className="welcome-section">
              <h2 className="welcome-title">
                Welcome to{" "}
                <span className="highlight">HIGHTFIVE Restaurant+</span>
              </h2>
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
              {/* <p className="error">{}</p> */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Mật khẩu"
                  name="password"
                  onChange={handleChangeInputs}
                />
                <input
                  type="text"
                  placeholder="Nhập lại mật khẩu"
                  name="c_password"
                  onChange={handleChangeInputs}
                />

                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? "Đang thực hiện..." : "Cập nhật mật khẩu"}
                </button>
              </form>

              <p className="team-info">HightFive Team © 2024</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
