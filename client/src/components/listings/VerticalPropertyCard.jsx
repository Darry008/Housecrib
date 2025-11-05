// src/components/listings/VerticalPropertyCard.jsx
import React from 'react';
import { IoHeartOutline, IoLocationOutline } from 'react-icons/io5'; 

const VerticalPropertyCard = ({ title, location, price, type, distance, image }) => (
    // Card Container
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-100">
        
        {/* 1. Full-Width Image */}
        <div className="relative">
            <img 
                src={image || "/placeholder.jpg"} 
                alt={title} 
                className="w-full h-56 object-cover" 
            />
            
           
        </div>

        {/* 2. Details Section */}
        <div className="p-4">
            
            {/* Price (Large and uses primary brand color) */}
            <div className="text-xl font-extrabold text-primary">
                {price}
            </div>

            {/* Location (Darker text, main description) */}
            <div className="text-base font-semibold text-gray-800 mt-1 mb-3">
                {location || title}
            </div>

            {/* --- NEW STACKED DISTANCE & TYPE CONTAINER --- */}
            {/* Uses pt-3 and border-t to separate from the price/location above */}
            <div className="">
                
                {/* 1. PROPERTY TYPE (Own Line) */}
                <div className="text-sm font-bold text-primary mb-1">
                    {type || "Self-Con Flat"}
                </div>
                
                {/* 2. DISTANCE TO SCHOOL (Own Line below Type) */}
                <div className="flex items-center text-sm font-semibold text-gray-600">
                    <IoLocationOutline size={16} className="mr-1.5" />
                    {distance || "5 min walk to School"} 
                </div>

            </div>
            
            {/* THE BUTTON: View Details (mt-4 spaces it from the metrics above) */}
            <button 
                className="w-full text-md font-bold bg-primary text-white py-2.5 mt-4 rounded-lg transition hover:bg-primary-dark"
                onClick={() => console.log('Navigating to detail page...')} 
            >
                View Details
            </button>
        </div>
    </div>
);

export default VerticalPropertyCard;