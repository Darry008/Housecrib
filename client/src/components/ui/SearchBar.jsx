// src/components/ui/SearchBar.jsx
import React from 'react';
import { IoFilter, IoSearch } from 'react-icons/io5'; 

const SearchBar = ({ isSearching, onFocusChange }) => {
  return (
    <div className="flex flex-grow items-center">
      
      <div className="flex-grow flex items-center h-10 bg-gray-input rounded-lg px-3">
        
        <IoSearch size={20} className="text-gray-500 mr-2" />
        
        <input
          type="text"
          placeholder="Search Your Campus/Gate"
          // CRITICAL: Ensure this onFocus event is firing correctly.
          onFocus={() => onFocusChange(true)} 
          readOnly={!isSearching} 
          className="w-full bg-transparent text-gray-800 placeholder-gray-500 focus:outline-none text-base"
        />
      </div>

      <button className="p-2 ml-3 rounded-full text-gray-700 hover:bg-gray-100">
        <IoFilter size={24} /> 
      </button>

    </div>
  );
};

export default SearchBar;