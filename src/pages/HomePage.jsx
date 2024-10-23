import Content from "../component/Content";
import HomeSection from "../component/HomeSection";
import BookingForm from "../component/BookingForm-3";
import OurPartner from "../component/OurPartner"
import FavoriteFood from "../component/FavoriteFood";
import AboutUs from "../component/AboutUs";
import '../style/HomePage.css';
function HomePage() {
  return (
    <div className="home-page">
      <HomeSection />
      <BookingForm />
      <OurPartner />
      <FavoriteFood />
      <AboutUs />
      <Content />
    </div>
  );
}

export default HomePage;
