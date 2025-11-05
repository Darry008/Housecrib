import React from 'react'

const CTO = () => {
  return (
    <div className="relative bg-[#34A264] text-white font-montsertext py-12 px-4 md:px-12 mt-12 rounded-lg mx-6 overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-lg"></div>

      {/* Text content */}
      <div className="relative z-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl 
             font-bold mt-6 md:mt-4 leading-tight">
          Become an Agent. List Your Properties Today.
        </h1>

        <p className="text-base text-left sm:hidden font-light mt-4 mb-10 px-2">
          Join our platform and connect with students seeking housing.
        </p>

        <p className="hidden sm:block text-base  sm:text-lg md:text-xl font-light mt-4 mb-10 px-2 md:px-20">
          Join our platform as an agent and gain access to a vast network of students seeking quality housing.
          List your properties with us and connect with potential tenants effortlessly.
        </p>

        <button className="bg-white text-[#34A264] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
          Become an Agent
        </button>
      </div>
    </div>
  )
}

export default CTO
