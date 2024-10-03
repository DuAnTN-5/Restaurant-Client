import '../css/FavoriteFood.css';
import imgFavoriteFood from '../assets/favorite-food.jpg'
import user from '../assets/user.png'

const foodItems = [
  {
    id: 1,
    name: 'Pizza Slice',
    description: 'Cheese, Ham & Pineapple',
    rating: 5.0,
    image: imgFavoriteFood,
    orderLink: '#'
  },
  {
    id: 2,
    name: 'Cheese Burger',
    description: 'Cheese, Ham & Pineapple',
    rating: 4.8,
    image: imgFavoriteFood,
    orderLink: '#'
  },
  {
    id: 3,
    name: 'Chicken Paradise',
    description: 'Cheese, Ham & Pineapple',
    rating: 4.5,
    image: imgFavoriteFood,
    orderLink: '#'
  },
  {
    id: 4,
    name: 'Shawarma',
    description: 'Cheese, Ham & Pineapple',
    rating: 5.0,
    image: imgFavoriteFood,
    orderLink: '#'
  }
];

const FoodCategory = () => {
  return (
    <div className="food-category">
      <h2 className="category-title">The Best Foods</h2>
      <div className="food-items">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} className="food-image" />
              <div className="rating-section">
                <span className="rating">
                  <i className="fa-solid fa-star icon-star"> </i>
                  {item.rating}</span>
                <div className="reviewers">
                  <img src={user} alt="reviewer" />
                  <img src={user} alt="reviewer" />
                  <img src={user} alt="reviewer" />
                </div>
              </div>
            <div className="food-info">
              <h3 className="food-name">{item.name}</h3>
              <p className="food-description">{item.description}</p>
              <a href={item.orderLink} className="order-link">
                <p className='order-now'>
                ORDER NOW
                </p>
                <i className="fa-solid fa-arrow-right fa-rotate-by icon-arrow"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
