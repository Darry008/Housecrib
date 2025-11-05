// src/pages/Properties.jsx
import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5'; 
import SearchBar from '../components/ui/SearchBar'; 
import FilterBar from '../components/ui/FilterBar'; 

const Properties = () => {
  const [isSearching, setIsSearching] = useState(false);
  
  // 1. Handler to control the state
  const handleSearchFocus = (focusState) => {
    setIsSearching(focusState);
  };
  
  // 2. Function to exit search mode (called by the Back Arrow)
  const handleGoBack = () => {
    setIsSearching(false);
  };

  return (
    <div className="bg-white min-h-screen">

      {/* --- HEADER CONTAINER (Logo/Arrow + Search Bar) --- */}
      <div className="flex items-center h-14 px-4 pt-4 bg-white"> 
        
        {/* LEFT SIDE CONTENT SWAP */}
        {isSearching ? (
          // A. Back Arrow (When searching)
          <button 
            onClick={handleGoBack} 
            className="p-2 rounded-full text-gray-700 hover:bg-gray-100 mr-2"
          >
            <IoArrowBack size={24} />
          </button>
        ) : (
          // B. Campus Crib Logo (When not searching)
          <div className="text-xl font-bold text-primary mr-2">
            Campus Crib
          </div>
        )}

        {/* The SearchBar component handles the rest of the row */}
        {/* Pass the current state to the SearchBar so it knows what to display */}
        <SearchBar isSearching={isSearching} onFocusChange={handleSearchFocus} />
      </div>

      {/* Conditional Filter Chips */}
      {isSearching && <FilterBar />} 
      
      {/* Main Content Title */}
      <div className="px-4 mt-6 text-xl font-bold text-gray-800">
        {isSearching ? 'Search Results' : 'Featured Listings'}
      </div>
      
    </div>
  );
}

export default Properties;