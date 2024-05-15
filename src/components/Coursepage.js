import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Navbar from './LearnerComponent/Navbar';
import CourseComponent from './CourseComponent';

const Coursepage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
        
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <CourseComponent searchQuery={searchQuery} />
    </div>
  );
};

export default Coursepage;
