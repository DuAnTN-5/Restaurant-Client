import '../css/BookingForm.css';
import iconFire from '../assets/fire.png'

function BookTable() {
  return (
    <div className="book-table">
      <div className='form-book'>
        <div className='icon-cook'>icon</div>
        <h2>Book a table</h2>
        <input type="text" placeholder="+4733378901" />
        <select>
          <option>1 Person</option>
          <option>2 People</option>
        </select>
        <input type="date" />
        <input type="time" placeholder="10:00 AM" />
        <button>Book A Table</button>
      </div>

      <div className="popular-category">
        <div className='popular-swiper'>
          <div className='swiper' id='swiper-left'></div>
          <div className='swiper'></div>
        </div>
        <h2><img src={iconFire} alt="" /> Our Popular Category</h2>
        <div className="category-list">
          <div className="category-item">
            <span>Sea Food</span>
            <h5>Salmon Fry</h5>
            </div>
          <div className="category-item">
            <span>Hot chocolate</span>
            <h5>Beverage</h5>
          </div>
          <div className="category-item">
            <span>Desserts </span>
            <h5>Cheesecakes</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookTable;