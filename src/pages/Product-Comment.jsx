import { MdAccountCircle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { Avatar } from "../assets";
import { useState } from "react";
// import { FaArrowTurnDown } from "react-icons/fa6";

function ProductComment() {
  const [comment, setComment] = useState("");
  const badWords = [
    "cặc",
    "cẹc",
    "qq",
    "cục",
    "cức",
    "buồi",
    "cẹc",
    "loz",
    "lồn",
    "lòn",
    "cc",
    "què",
    "tật",
  ];

  const handleChangeComment = (event) => {
    const { value } = event.target;
    // console.log(value);
    setComment(value);
  };
  // Hàm kiểm tra và thay thế từ bậy bạ bằng '***'
  const filterBadWords = (text) => {
    // Lọc và thay thế các từ không phù hợp
    return text
      .split(" ") // Tách câu thành mảng từ
      .map((word) => {
        // Nếu từ là từ không phù hợp, thay thế bằng '***'
        return badWords.some((badWord) => word.toLowerCase().includes(badWord))
        // return badWords.includes(word.toLowerCase())
         ? "***" : word;
      })
      .join(" "); // Ghép các từ lại thành câu
  };
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      //sẽ trả về một bản sao của chuỗi gốc nhưng đã loại bỏ tất cả các khoảng trắng ở đầu và cuối chuỗi.
      // Lọc bình luận để thay thế từ bậy bạ
      const filteredComment = filterBadWords(comment);
      console.log(filteredComment);

      setComment(filteredComment);
      setComment("");

      // // Reset lại textarea sau khi gửi bình luận
      console.log("comment:", filteredComment);
    }
  };
  console.log(comment);
  return (
    <>
      <div className="comment-section">
        <h3>Tất cả bình luận</h3>
        <ul className="media-list">
          <li className="media">
            {/* <div className="avatar"> */}
            <img className="avatar" src={Avatar} alt="User Avatar" />
            {/* </div> */}
            <div className="comment-details">
              <div className="comment-meta">
                <ul className="comment-meta-list">
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <MdAccountCircle />
                    </i>
                    <p className="comment-name">LanHuong</p>
                  </li>
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <MdDateRange />
                    </i>
                    <p className="comment-name">22/10/2024</p>
                  </li>
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <IoTimeSharp />
                    </i>
                    <p className="comment-name">10:14 a.m</p>
                  </li>
                </ul>
              </div>
              <p className="comment-content">Món ăn ngon quá!!</p>
              {/* <div className="comment-replay">
                  <i className="replay-icon">
                    <FaArrowTurnDown />
                  </i>
                  <span className="replay-text">Replay</span>
                </div> */}
            </div>
          </li>
          <li className="media">
            {/* <div className="avatar"> */}
            <img
              className="avatar"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/465267652_3665998010379511_6033648866276197112_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t_BIKUIH9MkQ7kNvgGUuAKE&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AwU_cAYDWFmqg4KEPpblq8X&oh=00_AYAkbiEv3qFX8QamvJ_HLwr6vb5b93unitrPQ-CiynVVpQ&oe=67467589"
              alt="User Avatar"
            />
            {/* </div> */}
            <div className="comment-details">
              <div className="comment-meta">
                <ul className="comment-meta-list">
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <MdAccountCircle />
                    </i>
                    <p className="comment-name">LanHuong</p>
                  </li>
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <MdDateRange />
                    </i>
                    <p className="comment-name">22/10/2024</p>
                  </li>
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <IoTimeSharp />
                    </i>
                    <p className="comment-name">10:14 a.m</p>
                  </li>
                </ul>
              </div>
              <p className="comment-content">Món ăn ngon quá!!</p>
              {/* <div className="comment-replay">
                  <i className="replay-icon">
                    <FaArrowTurnDown />
                  </i>
                  <span className="replay-text">Replay</span>
                </div> */}
            </div>
          </li>
          <li className="media">
            {/* <div className="avatar"> */}
            <img
              className="avatar"
              src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/465267652_3665998010379511_6033648866276197112_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t_BIKUIH9MkQ7kNvgGUuAKE&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=AwU_cAYDWFmqg4KEPpblq8X&oh=00_AYAkbiEv3qFX8QamvJ_HLwr6vb5b93unitrPQ-CiynVVpQ&oe=67467589"
              alt="User Avatar"
            />
            {/* </div> */}
            <div className="comment-details">
              <div className="comment-meta">
                <ul className="comment-meta-list">
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <MdAccountCircle />
                    </i>
                    <p className="comment-name">LanHuong</p>
                  </li>
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <MdDateRange />
                    </i>
                    <p className="comment-name">22/10/2024</p>
                  </li>
                  <li className="comment-meta-item">
                    <i className="comment-icon">
                      <IoTimeSharp />
                    </i>
                    <p className="comment-name">10:14 a.m</p>
                  </li>
                </ul>
              </div>
              <p className="comment-content">Món ăn ngon quá!!</p>
              {/* <div className="comment-replay">
                  <i className="replay-icon">
                    <FaArrowTurnDown />
                  </i>
                  <span className="replay-text">Replay</span>
                </div> */}
            </div>
          </li>

          {/* <li className="media second-media">
              <div className="avatar">
                <img
                  src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/451021686_3567165343596112_987871808300877131_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HcSxLjVaVFIQ7kNvgFRmCm4&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&_nc_gid=A3xUAdbDsoCUEymSCQ2zC8e&oh=00_AYCDOLkoVgn8P58WiharXst2cq6V8vhmCxzVGmoTQhkSlQ&oe=671CD678"
                  alt="User Avatar"
                />
              </div>
              <div className="comment-details">
                <div className="comment-meta">
                  <ul className="comment-meta-list">
                    <li className="comment-meta-item">
                      <i className="comment-icon">
                        <MdAccountCircle />
                      </i>
                      <p className="comment-name">LanHuong</p>
                    </li>
                    <li className="comment-meta-item">
                      <i className="comment-icon">
                        <MdDateRange />
                      </i>
                      <p className="comment-name">22/10/2024</p>
                    </li>
                    <li className="comment-meta-item">
                      <i className="comment-icon">
                        <IoTimeSharp />
                      </i>
                      <p className="comment-name">10:14 a.m</p>
                    </li>
                  </ul>
                </div>
                <p className="comment-content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="comment-replay">
                  <i className="replay-icon">
                    <FaArrowTurnDown />
                  </i>
                  <span className="replay-text">Replay</span>
                </div>
              </div>
            </li> */}
        </ul>
        <div className="comment-input">
          <textarea
            value={comment}
            rows="11"
            onChange={handleChangeComment}
            className="comment-textarea"
            placeholder="Viết bình luận của bạn..."
          ></textarea>
          <button className="comment-submit" onClick={handleCommentSubmit}>
            Gửi bình luận
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductComment;
