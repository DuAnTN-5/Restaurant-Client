import '../css/Header.css';
import logo from '../assets/The_Chef-removebg-preview.png'


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <p>Phone: +4733378901 | Email: food@restan.com</p>
          <p>Address: 175 10th Street, Berlin</p>
        </div>
        <div className='header-logo'>
            <img src={logo} alt="Logo" />
          </div>
        <nav className="navbar">
          <div className="nav-left">
            <a href="#">Home</a>
            <a href="#">Pages</a>
            <a href="#">Menu</a>
          </div>
          <div className="nav-right">
            <a href="#">Blog</a>
            <a href="#">Shop</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;