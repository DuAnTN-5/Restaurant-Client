import "./App.css";
import Footer from "./component/Footer";

import Header from "./component/Header2";
import { Outlet } from "react-router-dom";
import ProfileUser from "./pages/ProfileUser";
import FavouritePage from "./pages/FavouritePage.jsx";

// import { Outlet, useLocation } from "react-router-dom";

function App() {
 

  return (
    <>
      <Header />
      {/* <ProfileUser /> */}
      {/* <FavouritePage/> */}
      <Outlet/>  
      {/* Đây sẽ là nơi hiển thị các trang con */}
      <Footer />

      {/* {!isAuthPage && <Footer />} Chỉ hiển thị Footer nếu không phải là trang đăng nhập hoặc đăng ký */}

      {/* {!isAuthPage && <Header />}
      <Outlet />
      {!isAuthPage && <Footer />} */}
    </>
  );
}

export default App;
