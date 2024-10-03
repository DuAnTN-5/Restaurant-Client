import Content from "../component/Content";
import HomeSection from "../component/HomeSection";
import BookingForm from "../component/BookingForm-2";
import FavoriteFood from "../component/FavoriteFood";
import AboutUs from "../component/AboutUs";
function Home() {
  return (
    <>
      <HomeSection />
      <BookingForm />
      <FavoriteFood />
      <AboutUs />
      <Content />
    </>
  );
}

export default Home;
