import "../css/Blog-detail.css";
import { FaCalendarAlt } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
function BlogDetail() {
    return ( 
        <>
<div className="blog-container">
      <div className="blog-post">
        <img 
          className="post-image" 
          src="https://via.placeholder.com/800x400" 
          alt="Post" 
        />
        <div className="post-info">
          <p>
            <FaCalendarAlt /> May 13, 2024 &nbsp; | &nbsp; Validthème &nbsp; | &nbsp; 
            <AiFillEye /> 137 Views
          </p>
        </div>
        <div className="post-content">
          <p>Give lady of they such they sure it. Me contained explained my education...</p>
          <p>New had happen unable uneasy. Drawings can followed improved...</p>
        </div>
      </div>

      <div className="sidebar">
     
        <div className="recent-posts">
          <h3>Recent Post</h3>
          <div className="post">
            <img src="https://via.placeholder.com/80" alt="Recent post" />
            <div>
              <p>May 13, 2024</p>
              <p>Exotic Flavors, Global Adventure</p>
            </div>
          </div>
          <div className="post">
            <img src="https://via.placeholder.com/80" alt="Recent post" />
            <div>
              <p>May 13, 2024</p>
              <p>Prefabricated passive house sustainable</p>
            </div>
          </div>
          <div className="post">
            <img src="https://via.placeholder.com/80" alt="Recent post" />
            <div>
              <p>May 13, 2024</p>
              <p>Picked up a Brussels burger Sprouts ham</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
     );
}

export default BlogDetail;