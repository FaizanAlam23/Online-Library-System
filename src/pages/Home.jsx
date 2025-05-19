import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookCategories from '../components/BookCategories';
import BookList from '../components/BookList';

const Home = () => {
  const books = useSelector((state) => state.book.books);
  const [selectedCategory, setSelectedCategory] = useState('');


  // Filter books based on the selected category
  const filteredBooks = books.filter((book) => {
    if (selectedCategory) {
      return book.genre === selectedCategory;
    }
    return true; // Show all books if no category is selected
  });
  console.log('Books in Redux:', books);

  return (
    <div>
      <h2 className='centered-heading'><i>"Step into a world of stories. Your next favorite book awaits!"</i></h2>
      {/* Book Categories with a "Clear Filter" button */}
      <div >
        <BookCategories
          onCategorySelect={(category) => setSelectedCategory(category)}
        />
        {selectedCategory && (
          <button
            className="clear-filter-button"
            onClick={() => setSelectedCategory('')}
          >
            Go Back
          </button>
        )}
      </div>
      <h3 className='centered-heading'>Popular Books</h3>
      
      {/* Display filtered books */}
      <BookList books={filteredBooks} />
    </div>
  );
};

export default Home;