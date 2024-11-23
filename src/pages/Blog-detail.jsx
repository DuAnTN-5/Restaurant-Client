import { useParams } from "react-router-dom";
import "../css2/Blog-detail.css";
import { useEffect } from "react";
import { api } from "../api";

export default function BlogDetail() {
  const params = useParams()
  useEffect(() =>{
    api
    .get("/posts/" + params.slug)
    .then(res =>{
      console.log(res)
    })
    .catch(error => console.log(error))
  }, [])
  console.log(params)
  return (
    <div className="blog-detail-page">
      <div className="container">
        <main className="main-content">
          <article>
            <header>
              <div className="post-header">
                <span className="date-badge">20 JUN</span>
                <h1>Various Versions Have</h1>
              </div>
              <div className="post-meta">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=50&q=80"
                  alt="Andrea Silva"
                />
                By <a href="#">Andrea Silva</a>
                <span className="divider">/</span>
                <a href="#">Desserts</a>
                <span className="divider">/</span>
                <a href="#">Cooking</a>
                <span className="divider">/</span>
                <a href="#">Food</a>
              </div>
            </header>

            <img
              src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80"
              alt="Fresh fish with limes"
              className="main-recipe-image"
            />

            <div className="content">
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>

              <div className="recipe-images-grid">
                <img
                  src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
                  alt="Bowl of soup"
                />
                <img
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80"
                  alt="Salmon dish"
                />
                <img
                  src="https://images.unsplash.com/photo-1565680018440-d2ff34dd3d70?auto=format&fit=crop&w=600&q=80"
                  alt="Fresh shrimp"
                />
              </div>

              <div className="share-section">
                <span>Share:</span>
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Pinterest</a>
              </div>
            </div>

            <section className="comments">
              <h3>Comments</h3>
              <div className="comment">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="Amber Reyes"
                />
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-name">Amber Reyes</span>
                    <span className="comment-date">March 28, 2018 9:12 am</span>
                  </div>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system.
                  </p>
                  <a href="#" className="reply-button">
                    REPLY
                  </a>
                </div>
              </div>

              <div className="comment">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80"
                  alt="Zachary Myers"
                />
                <div className="comment-content">
                  <div className="comment-header">
                    <span className="comment-name">Zachary Myers</span>
                    <span className="comment-date">March 28, 2018 9:12 am</span>
                  </div>
                  <p>
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour, or non-characteristic words.
                  </p>
                  <a href="#" className="reply-button">
                    REPLY
                  </a>
                </div>
              </div>
            </section>

            <form className="comment-form">
              <h3>Post a Comment</h3>
              <textarea placeholder="Your Message"></textarea>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <button type="submit" className="submit-btn">
                SUBMIT
              </button>
            </form>
          </article>
        </main>

        <aside className="blog-sidebar-custom">
          {/* Tìm kiếm */}
          {/* <div className="sidebar-section-custom search-custom">
            <input type="text" placeholder="Tìm kiếm" />
            <button type="submit">Tìm kiếm</button>
          </div> */}
          {/* Thẻ cá nhân */}
          <div className="profile-card-custom">
            <img
              src="https://freebw.com/templates/royate/images/widget-person.png"
              alt="Hồ sơ"
              className="profile-image-custom"
            />
            <h3>Trần Minh Quân</h3>
            <p>Đầu bếp trưởng</p>
            <div className="signature-custom">Chữ ký</div>
          </div>

          {/* Danh mục */}
          <div className="sidebar-section-custom">
            <h3 className="title-categories">Danh Mục</h3>
            <ul className="categories-list-custom">
              <li>Hải sản (2)</li>
              <li>Cà phê (5)</li>
              <li>Nhà hàng (18)</li>
              <li>Bánh cupcake (22)</li>
              <li>Bữa trưa (19)</li>
            </ul>
          </div>

          {/* Bài viết mới nhất */}
          <div className="sidebar-section-custom latest-posts-custom">
            <h3 className="title-lastestpost">Bài Viết Mới Nhất</h3>
            <ul>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/latest-post-thumb-1.png"
                  alt="Hình thu nhỏ bài viết"
                />
                <div>
                  <span>Có nhiều biến thể</span>
                  <p>Ngày 23 tháng 7, 2018</p>
                </div>
              </li>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/latest-post-thumb-2.png"
                  alt="Hình thu nhỏ bài viết"
                />
                <div>
                  <span>Tất cả Lorem Ipsum</span>
                  <p>Ngày 23 tháng 7, 2018</p>
                </div>
              </li>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/latest-post-thumb-3.png"
                  alt="Hình thu nhỏ bài viết"
                />
                <div>
                  <span>Dòng đầu tiên của Lorem</span>
                  <p>Ngày 23 tháng 7, 2018</p>
                </div>
              </li>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/latest-post-thumb-4.png"
                  alt="Hình thu nhỏ bài viết"
                />
                <div>
                  <span>Khối chuẩn</span>
                  <p>Ngày 23 tháng 7, 2018</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Theo dõi Instagram */}
          {/* <div className="sidebar-section-custom latest-posts-custom">
            <h3 className="title-instagram">Theo Dõi Instagram</h3>
            <ul className="instagram-gallery">
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/instagram-small-1.jpg"
                  alt="Hình ảnh Instagram 1"
                />
              </li>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/instagram-small-2.jpg"
                  alt="Hình ảnh Instagram 2"
                />
              </li>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/instagram-small-3.jpg"
                  alt="Hình ảnh Instagram 3"
                />
              </li>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/instagram-small-4.jpg"
                  alt="Hình ảnh Instagram 4"
                />
              </li>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/instagram-small-5.jpg"
                  alt="Hình ảnh Instagram 5"
                />
              </li>
              <li>
                <img
                  src="https://freebw.com/templates/royate/images/instagram-small-6.jpg"
                  alt="Hình ảnh Instagram 6"
                />
              </li>
            </ul>
          </div> */}

          {/* Đám mây thẻ */}
          {/* <div className="sidebar-section-custom latest-posts-custom">
            <h3 className="title-tagcloud">Đám Mây Thẻ</h3>
            <ul>
              <li>
                <div className="tags-custom">
                  <a href="#">Tự nhiên</a>
                  <a href="#">Trái cây</a>
                  <a href="#">Khô</a>
                  <a href="#">Thực phẩm tươi</a>
                  <a href="#">Tự nhiên</a>
                  <a href="#">Lành mạnh</a>
                </div>
              </li>
            </ul>
          </div> */}

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
