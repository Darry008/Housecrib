// src/components/ui/PropertyCarousel.jsx
import React from 'react';

// Example Property Card Component (Sits inside the carousel)
const PropertyCard = ({ title, price, image }) => (
    // Set a fixed width (e.g., w-64 for 256px wide)
    <div className="flex-shrink-0 w-64 bg-white overflow-hidden border border-gray-100">
        <img src={image} alt={title} className="w-full h-36 object-cover" />
        <div className="p-3">
            <div className="text-sm font-semibold text-gray-800 truncate">{title}</div>
            <div className="text-md font-bold text-primary mt-1">{price}</div>
            <button className="w-full text-md font-bold bg-primary text-white py-2.5 mt-4 rounded-lg transition hover:bg-primary-dark">
    View Details
</button>
        </div>
    </div>
);


const PropertyCarousel = ({ title, listings }) => {
    // Check if there are listings before rendering the whole section
    if (!listings || listings.length === 0) return null;

    return (
        <div className="mb-8"> 
            
            {/* Heading: Aligned with the 16px outer margin (px-4) */}
            <h2 className="px-4 text-lg font-bold text-gray-800 mb-4">
                {title}
            </h2>

            {/* Carousel Content Wrapper */}
            <div className="flex overflow-x-scroll whitespace-nowrap scrollbar-hide">
                
                {/* KEY ALIGNMENT: 'pl-4' aligns the first card at the 16px margin.
                  'space-x-4' adds 16px of space between the cards.
                */}
                <div className="flex pl-4 space-x-4 pb-2"> {/* pb-2 avoids scrollbar cutting off shadow */}
                    {listings.map((item, index) => (
                        <PropertyCard key={index} {...item} />
                    ))}
                    
                    {/* Add an empty div with 'pr-4' to ensure the last item is pushed 
                        to the 16px margin mark on the right when scrolling.
                    */}
                    <div className="flex-shrink-0 w-4"></div> 
                </div>
            </div>
        </div>
    );
};

export default PropertyCarousel;