import { Link } from "react-router-dom";
import "../css2/Blog.css";
import { useEffect, useState } from "react";
import { api, url } from "../api";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [category, setCategory] = useState([]);

  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const postsPerPage = 2; // Số bài viết trên mỗi trang

  useEffect(() => {
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
  }, []);

  // Tính toán chỉ số của các bài viết hiển thị trong trang hiện tại
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  // Tạo danh sách các số trang
  const totalPages = Math.ceil(blog.length / postsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }
  // console.log(blog);
  // console.log(currentPosts);

  // const stripHTML = (html) => html.replace(/<\/?[^>]+(>|$)/g, "");
  const stripHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <div className="blog-page text-vphu">
      <h1 className="title-cart-page title-vphu">Tin tức của chúng tôi</h1>
      {/* <h1 className="menu-main-title title-vphu">Thực Đơn Đặc Biệt</h1> */}
      <div className="blog-container">
        {/* Nội dung chính */}
        <main className="blog-main">
          {currentPosts.map((item) => (
            <div className="blog-post" key={item.id}>
              <div className="post-image-wrapper">
                <Link to={"/blog-detail/" + item.slug}>
                  <img
                    src={`${url}/${item.image_url}`}
                    alt="Bài viết blog"
                    className="post-image"
                  />
                </Link>
                <div className="post-date">
                  <span>
                    {item.created_at.time},{item.created_at.date}
                  </span>
                  {/* <span>{item.created_at.time}</span> */}
                </div>
              </div>
              <div className="post-content">
                <h2 className="post-title">{item.title}</h2>
                <p className="post-excerpt">{stripHTML(item.summary)}</p>
                {/* <p className="post-excerpt">{item.summary}</p> */}
                <Link to={"/blog-detail/" + item.slug}>
                  <button className="read-more">XEM THÊM</button>
                </Link>
              </div>
            </div>
          ))}
        </main>

        {/* Sidebar */}
        <aside className="blog-sidebar-custom">
          <div className="profile-card-custom">
            <img
              src="https://freebw.com/templates/royate/images/widget-person.png"
              alt="Hồ sơ"
              className="profile-image-custom"
            />
            <h3>Trần Minh Quân</h3>
            <p>Đầu bếp trưởng</p>
            {/* <div className="signature-custom">Chữ ký</div> */}
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
          <div className="sidebar-section-custom latest-posts-custom">
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
      {/* Phân trang */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`page-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
