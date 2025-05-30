import React from 'react';

const categories = [
  'Fiction',
  'Science Fiction',
  'Classic',
  'Adventure',
  'Dystopian Fiction',
  'Historical Fiction',
  'Fantasy',
  'Horror',
 ];

const BookCategories = ({ onCategorySelect }) => {
  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  return (
    <div >
      <h3 className='centered-heading'>Book Categories:</h3>
      <div className="cat-list">
        {categories.map((category, index) => (
          <button
            key={index}
            className="cat-item"
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookCategories;