import "./App.css";
import Footer from "./component/Footer";

import Header from "./component/Header";
import { Outlet, useLocation } from "react-router-dom";
import ProfileUser from "./pages/ProfileUser";
import FavouritePage from "./pages/FavouritePage.jsx";

// import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

  // Kiểm tra xem đường dẫn có phải là login hoặc signup hay không
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
  // console.log("Current Path:", location.pathname);
  // console.log("Is Auth Page:", isAuthPage);
 

  return (
    <>
      {/* <Header /> */}
      {/* <ProfileUser /> */}
      {/* <FavouritePage/> */}
      {/* <Outlet/>   */}
      {/* Đây sẽ là nơi hiển thị các trang con */}
      {/* <Footer /> */}

      {/* {!isAuthPage && <Footer />}  */}
      {/* Chỉ hiển thị Footer nếu không phải là trang đăng nhập hoặc đăng ký */}

      {!isAuthPage && <Header />}
      <Outlet />
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
