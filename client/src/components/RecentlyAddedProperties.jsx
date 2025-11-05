import React from "react";
import propertyImage from "../assets/house.webp"; // replace with your actual image path
import { useNavigate } from "react-router-dom";
const properties = [
  {
    id: 1,
    title: "Preston RD Boston",
    details: "1 Bed | 1 Toilet | 1 Kitchen",
    price: "₦100,000",
    image: propertyImage,
  },
  {
    id: 2,
    title: "Preston RD Boston",
    details: "1 Bed | 1 Toilet | 1 Kitchen",
    price: "₦100,000",
    image: propertyImage,
  },
  {
    id: 3,
    title: "Preston RD Boston",
    details: "1 Bed | 1 Toilet | 1 Kitchen",
    price: "₦100,000",
    image: propertyImage,
  },
];

const primaryButtonClass =
  "bg-[#34A264] hover:bg-[#2d8b54] text-white font-semibold py-2 px-6 rounded-md transition duration-300";

const RecentlyAddedProperties = () => {
  const navigate = useNavigate();
  return (
    <section className="md:py-16 py-6 px-4 md:px-12 lg:px-20 bg-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl text-left md:text-center md:text-3xl font-bold font-montserrat text-gray-900">
          Recently Added Featured Properties
        </h2>
        <p className="text-gray-600 text-left md:text-center max-w-2xl mx-auto mt-2 font-light font-montserrat">
          Hand-picked and verified properties that offer the best balance of
          affordability, safety, and convenience for you.
        </p>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white  overflow-hidden w-full max-w-sm"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="text-lg font-semibold text-gray-900 font-montserrat">
                {property.title}
              </h3>
              <p className="text-gray-600 mt-1 font-light font-montserrat">
                <span className="text-[#34A264]">{property.details}</span>
              </p>
              <p className="text-[#34A264] font-semibold text-lg mt-2">
                {property.price}
              </p>
              <button className={`${primaryButtonClass} mt-4`}>
                Contact Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Listings */}
      <div className="flex justify-center mt-14">
  <button
    onClick={() => navigate('/properties')}
    className="bg-white hover:bg-gray-100 text-[#34A264] font-semibold font-montserrat py-3 px-10 rounded-md shadow-md transition-all duration-300"
  >
    View All Listings
  </button>
</div>

    </section>
  );
};

export default RecentlyAddedProperties;
