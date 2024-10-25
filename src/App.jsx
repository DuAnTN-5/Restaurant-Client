import "./App.css";
import Footer from "./component/Footer";

import Header from "./component/Header2";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import ProfileUser from "./pages/ProfileUser";
import FavouritePage from "./pages/FavouritePage.jsx";
=======
import { Outlet, useLocation } from "react-router-dom";
>>>>>>> 0a6d923558f409e0fb87a84b9259cacd3230866b

// import { Outlet, useLocation } from "react-router-dom";

function App() {
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

  // Kiểm tra xem đường dẫn có phải là login hoặc signup hay không
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";
  // console.log("Current Path:", location.pathname);
  // console.log("Is Auth Page:", isAuthPage);
 

  return (
    <>
<<<<<<< HEAD
      <Header />
      {/* <ProfileUser /> */}
      {/* <FavouritePage/> */}
      <Outlet/>  
      {/* Đây sẽ là nơi hiển thị các trang con */}
      <Footer />

      {/* {!isAuthPage && <Footer />} Chỉ hiển thị Footer nếu không phải là trang đăng nhập hoặc đăng ký */}

      {/* {!isAuthPage && <Header />}
=======
      {!isAuthPage && <Header />}
>>>>>>> 0a6d923558f409e0fb87a84b9259cacd3230866b
      <Outlet />
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
