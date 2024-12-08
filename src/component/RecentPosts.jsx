import "../css/RecentPosts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api, url } from "../api";

const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/posts")
      .then((res) => {
        setPosts(res.data.data); // Lấy dữ liệu bài viết từ API
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="recent-posts-container">
      <h2 className="recent-posts-title title-vphu">Bài Viết Mới</h2>
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <Link to={`/blog-detail/${post.slug}`}>
              <img
                src={`${url}/${post.image_url}`}
                alt={post.title}
                className="post-card-image"
              />
            </Link>
            <div className="post-card-content">
              <p className="post-card-date">
                <span className="post-card-date-text">{post.created_at.date}</span>{" "}
                <span className="post-author">Admin</span>
              </p>
              <h3 className="post-card-title">{post.title}</h3>
              <Link to={`/blog-detail/${post.slug}`}>
                <p className="post-read-more">Read more</p>
              </Link>
              <p className="post-comments">💬 {post.comments || 0}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
