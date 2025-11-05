import React, { useState } from 'react';
import { IoArrowBack, IoFilter } from 'react-icons/io5'; 
import SearchBar from '../components/ui/SearchBar'; 
import FilterBar from '../components/ui/FilterBar'; 
import PropertyCarousel from '../components/listings/PropertyCarousel';
import VerticalPropertyCard from '../components/listings/VerticalPropertyCard';

import houseImg from '../assets/house1.webp';
import houseImg2 from '../assets/house2.webp';
import houseImg3 from '../assets/house3.webp';

// --- HARD CODED DATA ---
const MOCK_DATA = {
    featured_listings: [
        { title: "Premium Flat, North Gate", price: "₦200,000/Yr", image: houseImg },
        { title: "Paid Placement Studio", price: "₦500,000/Yr", image: houseImg2 },
    ],
    recommended_listings: [
        { title: "Top Rated, Near Transit", price: "₦200,000/Yr", image: houseImg3  },
        { title: "High Value, Quiet Area", price: "₦300,000/Yr", image: houseImg },
    ],
    new_listings: [
        { title: "Spacious 1-Bedroom", location: "Just outside North Gate", price: "₦200,000/Yr", type: "Self-Con Flat", distance: "5 minutes to Gate", image: houseImg2 },
        { title: "Cozy Shared Apartment", location: "Near East Gate Transit", price: "₦200,000/Yr", type: "Shared", distance: "10 minutes to  Gate", image: houseImg3 },
    ],
};
// -----------------------

const Properties = () => {
    const [isSearching, setIsSearching] = useState(false);
    
    const handleSearchFocus = (focusState) => setIsSearching(focusState);
    const handleGoBack = () => setIsSearching(false);

    return (
        <div className="bg-white font-montserrat min-h-screen">

            {/* --- HEADER CONTAINER (Handles 16px outer margin) --- */}
            <div className="flex items-center h-14 px-4 pt-4 bg-white"> 
                
                {/* LEFT SIDE CONTENT SWAP: Logo/Arrow */}
                {isSearching ? (
                    // Back Arrow
                    <button onClick={handleGoBack} className="p-2 rounded-full text-gray-700 hover:bg-gray-100 mr-2">
                        <IoArrowBack size={24} />
                    </button>
                ) : (
                    // Campus Crib Logo
                    <div className="text-xl font-bold text-primary mr-2">LOGO</div>
                )}

                {/* SearchBar Component */}
                <SearchBar isSearching={isSearching} onFocusChange={handleSearchFocus} />
            </div>

            {/* CONDITIONAL FILTER BAR */}
            {isSearching && <FilterBar />} 
            
            {/* --- 1. FEATURED LISTINGS (Paid Placement) --- */}
            <div className="mt-6"> 
                <PropertyCarousel 
                    title="🔥 Featured Listings" 
                    listings={MOCK_DATA.featured_listings} 
                />
            </div>

            {/* --- 2. RECOMMENDED LISTINGS (Curated) --- */}
            <div className="mt-8">
                <PropertyCarousel 
                    title="⭐️ Recommended For You" 
                    listings={MOCK_DATA.recommended_listings} 
                />
            </div>
            
            {/* --- 3. NEWLY ADDED LISTINGS (Vertical Feed) --- */}
            <div className="px-4 mt-8">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Newly Added Listings</h2>
                
                <div className="pb-16">
                    {MOCK_DATA.new_listings.map((listing, index) => (
                        <VerticalPropertyCard key={index} {...listing} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Properties;