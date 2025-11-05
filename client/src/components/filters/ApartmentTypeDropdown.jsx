// src/components/filters/ApartmentTypeDropdown.jsx
import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5'; 

const apartmentTypes = ['Self-Con Flat', 'Shared Apartment', 'Studio', '1 Bedroom', '2 Bedrooms'];

const ApartmentTypeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('Apartment Type');

  const handleSelect = (type) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  return (
    // No right margin needed if this is the last chip in the row
    <div className="relative inline-block text-left"> 
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        // KEY CHANGE: Using bg-primary (your #34A264) and hover:bg-primary-dark
        className="inline-flex justify-center items-center h-9 px-4 rounded-full bg-primary text-white text-sm font-medium transition duration-150 ease-in-out hover:bg-primary-dark"
      >
        {selectedType}
        <IoChevronDown size={14} className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {apartmentTypes.map((type) => (
              <a
                key={type}
                href="#"
                onClick={() => handleSelect(type)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {type}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ApartmentTypeDropdown;