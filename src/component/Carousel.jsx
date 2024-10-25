import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/Carousel.css"; // Thêm file CSS cho các chi tiết bổ sung


const Carousel = () => {
  const slides = [
    {
      image: "https://your-image-source.com/image1.jpg", // Đường dẫn hình ảnh
      name: "Anthom Bu Spar",
      position: "Marketing Manager",
      rating: 5,
      title: "Awesome and delicious food",
      feedback:
        "Targeting consultation discover apartments. Indulgence of under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing.",
      avatars: [
        "https://your-avatar-source.com/avatar1.jpg",
        "https://your-avatar-source.com/avatar2.jpg",
        "https://your-avatar-source.com/avatar3.jpg",
      ],
    },
    // Thêm các slide khác theo mẫu trên
  ];

  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 lg:px-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row items-center lg:items-start">
                <div className="relative w-full lg:w-1/2 h-auto">
                  <img
                    src={slide.image}
                    alt="Customer"
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute bottom-0 left-0 flex space-x-3 p-4">
                    {slide.avatars.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt={`avatar-${index}`}
                        className="w-12 h-12 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-6 lg:px-12 mt-6 lg:mt-0">
                  <h2 className="text-xl font-bold">{slide.title}</h2>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">{`${slide.rating}/5`}</span>
                    <span className="ml-2 text-sm">({slide.rating} stars)</span>
                  </div>
                  <p className="mt-4 text-gray-300">{slide.feedback}</p>
                  <div className="mt-4">
                    <h4 className="text-lg font-bold">{slide.name}</h4>
                    <p className="text-red-400">{slide.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
