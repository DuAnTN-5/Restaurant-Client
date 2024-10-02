import { IoMdMailUnread } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="mt-[100px]">
      <div>
        {/* {hộp mail} */}
        <div className="flex justify-center relative z-10">
          <div className="bg-orange-400 p-[20px] w-[1000px] h-[150px] rounded-[20px]  flex items-center justify-center absolute top-[-80px]">
            <div className="flex items-center w-[500px] mr-[100px]">
            <IoMdMailUnread className="mr-[15px] text-white mt-[-50px] ml-[20px] w-[50px] h-[50px]" />
              {/* <MailOpen  className="mr-[15px] text-white mt-[-50px] ml-[20px] w-[50px] h-[50px]" /> */}
              <h1 className="text-white font-semibold text-xl mt-[-50px]">
                Subscribe now to get latest updates
              </h1>
            </div>

            <div className="mr-[30px]">
              <input
                type="text"
                placeholder="Email Address"
                className="border-b-[3px] mb-6 border-white p-2 bg-orange-400 text-white w-[490px]   focus:outline-none placeholder-gray-200"
              />

              <button className="bg-red-600 flex items-center justify-center  text-white w-[500px] h-[40px] rounded-[20px]">
                Send
                {/* <Send className="w-[18px] ml-2" /> */}
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          {/* Hình nền */}
          <img
            className="absolute inset-0 w-full h-[350px] object-cover "
            src="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?cs=srgb&dl=pexels-adrien-olichon-1257089-2387793.jpg&fm=jpg"
            alt=""
          />

          {/* Nội dung trên nền */}
          <div className="relative z-10 flex pt-[100px] justify-center h-[350px] w-[1000px]">
            <div className="w-[250px] mr-[50px] ">
              <img
                className="w-[100px] mb-4 rounded-full "
                src="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239825.png"
                alt=""
              />
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur it dasdashfasi
                fhsaifhasidhas ijdhiasjdhaidh
              </p>
              <div className="flex text-white mt-5 gap-5 ">
                {/* <Facebook />
                <Youtube />
                <Linkedin />
                <Twitter /> */}
              </div>
            </div>
            <div className="text-white ml-3 mr-[100px]">
              <h1 className="text-[24px] font-bold mb-[20px]">Links</h1>
              <ul className="grid grid-cols-1 gap-1">
                {/* <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/blog" className="text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li> */}
              </ul>
            </div>
            <div className="mr-[100px]">
              <h1 className="text-[24px] font-bold mb-[20px] text-white">
                Galery
              </h1>
              <div className="grid grid-cols-3 w-[210px] gap-2">
                <img
                  className="rounded-[10px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcZWOlm6LESdMkbWnkmyFIgdHBl4HA-youw&s="
                  alt=""
                />
                <img
                  className="rounded-[10px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcZWOlm6LESdMkbWnkmyFIgdHBl4HA-youw&s="
                  alt=""
                />
                <img
                  className="rounded-[10px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcZWOlm6LESdMkbWnkmyFIgdHBl4HA-youw&s="
                  alt=""
                />
                <img
                  className="rounded-[10px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcZWOlm6LESdMkbWnkmyFIgdHBl4HA-youw&s="
                  alt=""
                />
                <img
                  className="rounded-[10px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcZWOlm6LESdMkbWnkmyFIgdHBl4HA-youw&s="
                  alt=""
                />
                <img
                  className="rounded-[10px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcZWOlm6LESdMkbWnkmyFIgdHBl4HA-youw&s="
                  alt=""
                />
              </div>
            </div>
            <div className="text-white ">
              <h1 className="text-[24px] font-bold mb-[20px]">Contact</h1>
              <div className="flex mb-3 gap-3 ">
                {/* <MapPin /> */}
                <p>123 Nguyen Van Linh</p>
              </div>
              <div className="flex mb-3 gap-3 ">
                {/* <Phone /> */}
                <p>09090909090909</p>
              </div>
              <div className="flex mb-3 gap-3 ">
                {/* <Timer /> */}
                <p>Mon-Sun 8AM : 8PM</p>
              </div>
              <div className="flex mb-3 gap-3 ">
                {/* <Mail /> */}
                <p> 123@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
