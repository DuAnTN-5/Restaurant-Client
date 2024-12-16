import { Link, useParams } from "react-router-dom";
import "../css2/Blog-detail.css";
import { useEffect, useRef, useState } from "react";
import { api, url } from "../api";
// import DOMPurify from "dompurify";
// import parse from 'html-react-parser';
import { MdAccountCircle } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { FaArrowTurnDown } from "react-icons/fa6";
import { toast } from "react-toastify";
import { Avatar } from "../assets";

export default function BlogDetail() {
  const [idComment, setIdComment] = useState(null);
  const [blogDetail, setBlogDetail] = useState({});
  const [comment, setComment] = useState(""); // comment gửi lên
  const [comments, setComments] = useState([]); //comment get về

  const [blog, setBlog] = useState([]);
  const [category, setCategory] = useState([]);

  const params = useParams();

  const inputRef = useRef();

  let token = localStorage.getItem("token");

  useEffect(() => {
    api
      .get("/posts/" + params.slug)
      .then((res) => {
        // console.log(res);
        setBlogDetail(res.data.data);
      })
      .catch((error) => console.log(error));
    api
      .get("/posts")
      .then((res) => {
        setBlog(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    api.get("/product-categories").then((res) => {
      // console.log(res);
      setCategory(res.data.data);
    });
  }, [params.slug]);

  useEffect(() => {
    if (blogDetail && blogDetail.id) {
      api
        .get(`/posts/${blogDetail.id}/comments`)
        .then((res) => {
          console.log(res);
          setComments(res.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [blogDetail]);
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
    "địt",
    "dit",
    "me",
    "má",
    "mẹ",
    "chim",
    "chó",
    "ngu",
  ];

  //lọc và thay thế các từ ngữ k phù hợp
  const filterBadWords = (text) => {
    return text
      .split(" ")// chia chuỗi thành 1 mảng các từ, cách nhau bởi dấu cách
      .map((word) => {
        const isBadWord = badWords.some((badWord) => // kiểm tra có bất kì từ xấu nào trong danh sách
          word.toLowerCase().includes(badWord)  // xác định có chứa k, nếu có isBadword là true
        );

        return isBadWord ? "***" : word;
      })
      .join(" "); // Ghép các từ lại thành câu
  };

  const handleChangeComment = (event) => {
    const { value } = event.target;
    // console.log(value);
    setComment(value);
  };

  const handleClickReplay = (idComment) => {
    // toast.success(idComment)
    setIdComment(idComment); 
    inputRef.current.focus(); // hàm này để khi kick thẻ đag gắn sự kiện onClick thì nó sẽ đc chuyển tới thẻ đag đc chọn để chọt
    //hay còn gọi là focus vào textarea
  };
  const handleCancelReply = () => {
    setIdComment(null); 
    setComment(""); 
  };

  function handleCommentSubmit(event) {
    event.preventDefault();

    if (!token) {
      toast.error("Vui lòng đăng nhập");
    } else if (!comment) {
      toast.error("Vui lòng nhập bình luận");
    } else {
      token = JSON.parse(token);

      let auth = localStorage.getItem("auth");
      if (auth) {
        auth = JSON.parse(auth);
      }
      let config = {
        headers: {
          Authorization: "Bearer " + token,
          "Content-type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      const formData = new FormData();
      formData.append("user_id", auth.id);
      formData.append("post_id", blogDetail.id);
      formData.append("content", comment);
      idComment !== null ? formData.append("parent_id", idComment) : "";

      // gửi lên
      api
        .post("/post-comments", formData, config)
        .then((res) => {
          // console.log(res);
          if (res.data.data) {
            toast.success(res.data.message);
            // cập nhật danh sách bình luận
            api
              .get(`/posts/${blogDetail.id}/comments`)
              .then((res) => {
                // console.log(res);
                setComments(res.data.data);
              })
              .catch((error) => console.log(error));
            setComment("");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // console.log(params)

  // console.log({ comment });

  const stripHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || ""; // Chỉ lấy nội dung văn bản
  };
  return (
    <div className="blog-detail-page">
      <div className="container">
        <main className="main-content">
          <article>
            <header></header>

            <img
              src={`${url}/${blogDetail.image_url}`}
              alt="Fresh fish with limes"
              className="main-recipe-image"
            />

            <div className="content">
              <h2 className="post-title">{blogDetail.title}</h2>
              <div className="post-excerpt">{stripHTML(blogDetail.body)}</div>
              {/* <div className="post-excerpt">{blogDetail.body}</div> */}
            </div>
            <div className="comment-section">
              <h3>Tất cả bình luận</h3>
              <ul className="">
                <ul className="comment-list">
                  {comments.map((parentComment) => {
                    const filteredComment = filterBadWords( // lọc nội dung bình luận qua hàm 
                      parentComment.content
                    );

                    return (
                      <div key={parentComment.id}>
                        <li className="media" key={parentComment.id}>
                          {/* Comment cha */}
                          <div>
                            <img
                              src={
                                parentComment.user.image !== null
                                  ? `${url}/${parentComment.user.image}`
                                  : Avatar
                              }
                              alt="User Avatar"
                              className="avatar"
                            />
                          </div>
                          <div className="comment-details">
                            <div className="comment-meta">
                              <ul className="comment-meta-list">
                                <li className="comment-meta-item">
                                  <i className="comment-icon">
                                    <MdAccountCircle />
                                  </i>
                                  <p className="comment-name">
                                    {parentComment.user?.name || "Anonymous"}
                                  </p>
                                </li>
                                <li className="comment-meta-item">
                                  <i className="comment-icon">
                                    <MdDateRange />
                                  </i>
                                  <p className="comment-name">
                                    {parentComment.created_at}
                                  </p>
                                </li>
                              </ul>
                            </div>
                            <p className="comment-content">{filteredComment}</p>
                            <div className="comment-replay">
                              <i className="replay-icon">
                                <FaArrowTurnDown />
                              </i>
                              <span
                                className="replay-text"
                                onClick={() =>
                                  handleClickReplay(parentComment.id)
                                }
                              >
                                Trả lời
                              </span>
                            </div>
                          </div>
                        </li>
                        {/* Kiểm tra xem bình luận cha có bình luận con k nếu có */}
                        {/* {console.log(parentComment)} */}

                        {parentComment.children &&
                          parentComment.children.length > 0 && (
                            <ul className="child-comment-list">
                              {parentComment.children.map((childComment) => {
                                const filteredChildComment = filterBadWords(
                                  childComment.content
                                );
                                return (
                                  <li
                                    className="media second-media"
                                    key={childComment.id}
                                  >
                                    <div>
                                      <img
                                        src={
                                          childComment.user.image !== null
                                            ? `${url}/${childComment.user.image}`
                                            : Avatar
                                        }
                                        alt="User Avatar"
                                        className="avatar"
                                      />
                                    </div>
                                    <div className="comment-details">
                                      <div className="comment-meta">
                                        <ul className="comment-meta-list">
                                          <li className="comment-meta-item">
                                            <i className="comment-icon">
                                              <MdAccountCircle />
                                            </i>
                                            <p className="comment-name">
                                              {childComment.user?.name ||
                                                "Anonymous"}
                                            </p>
                                          </li>
                                          <li className="comment-meta-item">
                                            <i className="comment-icon">
                                              <MdDateRange />
                                            </i>
                                            <p className="comment-name">
                                              {childComment.created_at}
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                      <p className="comment-content">
                                        {filteredChildComment}
                                      </p>
                                    </div>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                      </div>
                    );
                  })}
                </ul>
              </ul>
              {idComment !== null && (
                <button className="close-replay" onClick={handleCancelReply}>
                  Hủy bỏ trả lời bình luận
                </button>
              )}

              <div className="comment-input">
                <textarea
                  value={comment}
                  rows="11"
                  ref={inputRef}
                  onChange={handleChangeComment}
                  className="comment-textarea"
                  placeholder="Viết bình luận của bạn..."
                ></textarea>
                <button
                  className="comment-submit"
                  onClick={handleCommentSubmit}
                >
                  Gửi bình luận
                </button>
              </div>
            </div>
          </article>
        </main>

        <aside className="blog-sidebar-custom">
          <div className="profile-card-custom">
            <img
              src="https://freebw.com/templates/royate/images/widget-person.png"
              alt="Hồ sơ"
              className="profile-image-custom"
            />
            <h3>Trần Minh Quân</h3>
            <p>Đầu bếp trưởng</p>
          </div>

          {/* Danh mục */}
          <div className="sidebar-section-custom">
            <h3 className="title-categories">Danh Mục</h3>
            <ul className="categories-list-custom">
              {category.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>

          {/* Bài viết mới nhất */}
          <div className="sidebar-section-custom latest-posts-custom-blog-detail">
            <h3 className="title-lastestpost">Bài Viết Mới Nhất</h3>
            <ul>
              {blog.map((item) => (
                <li key={item.id}>
                  <Link to={"/blog-detail/" + item.slug}>
                    <img
                      className="post-new-img"
                      src={`${url}/${item.image_url}`}
                      alt="Hình thu nhỏ bài viết"
                    />
                  </Link>

                  <div>
                    <span className="post-new-span">{item.title}</span>
                    <p className="post-new-p">{item.created_at.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Banner Khuyến mãi */}
          <div className="sidebar-section-custom sale-banner-custom">
            {/* <h3 className="title-sale">Khuyến mãi lên đến 50%</h3> */}
            <img
              src="https://freebw.com/templates/royate/images/widget-banner.jpg"
              alt="Hình ảnh khuyến mãi"
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
