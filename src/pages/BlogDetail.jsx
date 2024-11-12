import "../css2/BlogDetail.css";

const BlogDetail = () => {
  return (
    <div className="Blog-container">
      <div className="blog-content">
        <div className="Blog-main">
          <img
            src="https://freebw.com/templates/royate/images/blog-standard-1.jpg"
            alt="Bài viết blog 1"
            className="post-image"
          />
          <p className="title-detail">Various versions have</p>
          <div>
          <div className="post-meta">
            <img
              src="https://freebw.com/templates/royate/images/widget-person.png"
              alt="Tác giả"
              className="author-image"
            />
            <span className="author-small">Andrea Silva</span>
            <span>Tráng miệng / Nấu ăn / Thực phẩm</span>
          </div>
        </div>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis volup-tas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat.
        </p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
        <div className="img-container">
          <div className="img3">
            <div className="img2">
              <div>
                <img
                  src="https://freebw.com/templates/royate/images/blog-single-1.jpg"
                  alt="anh1"
                  className="anh-nho1"
                />
              </div>
              <div>
                <img
                  src="https://freebw.com/templates/royate/images/blog-single-1.jpg"
                  alt="anh1"
                  className="anh-nho1"
                />
              </div>
            </div>
            <div>
              <img
                src="https://freebw.com/templates/royate/images/blog-single-3.jpg"
                alt="anh1"
                className="anh-nho2"
              />
            </div>
          </div>
          <div>
            <img
              src="https://freebw.com/templates/royate/images/blog-single-4.jpg"
              alt="anh1"
              className="anh-nho3"
            />
          </div>
        </div>
        <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will
        </p>
        {/* <div>
          <link>Share</link>
          <div>
            <div className="logo"></div>
            <div className="logo"></div>
            <div className="logo"></div>
            <div className="logo"></div>
          </div>
        </div> */}
        <div className="comment-container">
            <h1>COMMENTS</h1>
            <div className="comment">
            <img
              src="https://freebw.com/templates/royate/images/widget-person.png"
              alt="author"
              className="comment-img"
            />
                <div>
                    <div className="author-comment">
                        <h2 className="author">Amber Reyes</h2>
                        <p className="time">March 28, 2018 at 9:12 am</p>
                    </div>
                    <div className="content-comment">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual</div>
                </div>
            </div>
        </div>
        </div>
        <div className="blog-sidebar-custom">
          <div>
            <img
              src="https://freebw.com/templates/royate/images/widget-person.png"
              alt="author"
              className="author-img"
            />
            <h1 className="author">Bryan Bennett</h1>
            <p className="job">Master Chef</p>
            <img
              src="https://freebw.com/templates/royate/images/signature-3.png"
              alt="author"
              className="author-img"
            />
          </div>
          {/* <div className="category">
          <h1>CATEGORIES</h1>
          <div>
            <link>Seafood</link>
            <link>Coffee</link>
            <link>Restaurant</link>
            <link>Cupcake</link>
            <link>Lunch</link>
          </div>
        </div>
        <div className="latest-post">
          <h1>LATEST POST</h1>
          <div>
            <div>
              <img
                src="https://freebw.com/templates/royate/images/signature-3.png"
                alt="author"
                className="author-img"
              />
              <div>
                <link className="title-post">There many variations</link>
                <p>July 23, 2018</p>
              </div>
            </div>
            <div>
              <img
                src="https://freebw.com/templates/royate/images/signature-3.png"
                alt="author"
                className="author-img"
              />
              <div>
                <link className="title-post">There many variations</link>
                <p>July 23, 2018</p>
              </div>
            </div><div>
              <img
                src="https://freebw.com/templates/royate/images/signature-3.png"
                alt="author"
                className="author-img"
              />
              <div>
                <link className="title-post">There many variations</link>
                <p>July 23, 2018</p>
              </div>
            </div><div>
              <img
                src="https://freebw.com/templates/royate/images/signature-3.png"
                alt="author"
                className="author-img"
              />
              <div>
                <link className="title-post">There many variations</link>
                <p>July 23, 2018</p>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
