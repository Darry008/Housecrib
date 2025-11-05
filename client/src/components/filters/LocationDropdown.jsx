// src/components/filters/LocationDropdown.jsx
import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5'; 

const campusGates = ['North Gate', 'South Gate', 'East Gate', 'West Gate'];

const LocationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGate, setSelectedGate] = useState('Location');

  const handleSelect = (gate) => {
    setSelectedGate(gate);
    setIsOpen(false);
  };

  return (
    // 'mr-2' separates this chip from the next one (8px space)
    <div className="relative inline-block text-left mr-2"> 
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center h-9 px-4 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-50"
      >
        {selectedGate}
        <IoChevronDown size={14} className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {campusGates.map((gate) => (
              <a
                key={gate}
                href="#"
                onClick={() => handleSelect(gate)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {gate}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;