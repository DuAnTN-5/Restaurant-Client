import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import { Outlet, useLocation } from 'react-router-dom';
function App() {
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại

  // Kiểm tra xem đường dẫn có phải là login hoặc signup hay không
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Header />} {/* Chỉ hiển thị Header nếu không phải là trang đăng nhập hoặc đăng ký */}
      
      <main className="content"> {/* Khu vực chính để hiển thị các trang con */}
        <Outlet />  {/* Đây là nơi mà các trang con sẽ được render */}
      </main>

      {!isAuthPage && <Footer />} {/* Chỉ hiển thị Footer nếu không phải là trang đăng nhập hoặc đăng ký */}
    </>
  );
}

export default App;
