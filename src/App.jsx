import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import ProfileUser from "./pages/ProfileUser";
import FavouritePage from './pages/FavouritePage.jsx';

function App() {
  // const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

  // // Kiểm tra xem đường dẫn có phải là login hoặc signup hay không
  // const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {/* <Header /> */}
      <ProfileUser />
      {/* <FavouritePage/> */}
      {/* <Outlet/>   */}
      {/* Đây sẽ là nơi hiển thị các trang con */}
      {/* <Footer /> */}

      {/* {!isAuthPage && <Footer />} Chỉ hiển thị Footer nếu không phải là trang đăng nhập hoặc đăng ký */}
    </>
  );
}

export default App;
