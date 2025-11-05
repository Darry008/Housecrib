// src/components/ui/FilterBar.jsx
import React from 'react';
import LocationDropdown from '../filters/LocationDropdown';
import ApartmentTypeDropdown from '../filters/ApartmentTypeDropdown';

const FilterBar = () => {
    return (
        // Wrapper: 'px-4' = 16px outer margin. 'mb-4' separates it from results.
        <div className="px-4 mb-4 mt-4"> 
            
            <div className="flex flex-wrap items-start">
                
                {/* Location Chip: mr-2 for 8px space to the next chip */}
                <LocationDropdown /> 
                
                {/* Apartment Type Chip: This is the primary chip, colored with your brand color */}
                <ApartmentTypeDropdown />
            </div>
            
            {/* Horizontal divider */}
            <hr className="mt-4 border-gray-200" />
            
        </div>
    );
};

export default FilterBar;