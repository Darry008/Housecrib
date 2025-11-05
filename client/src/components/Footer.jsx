import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6' // X (Twitter)

const Footer = () => {
  return (
    <footer className="bg-[#34A264] text-white py-10 px-6 mt-6 font-montsertext">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">LOGO</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6">
          <a href="#about" className="hover:underline hover:text-gray-200 transition">
            About Us
          </a>
          <a href="#privacy" className="hover:underline hover:text-gray-200 transition">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 text-xl">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Red Student Housing. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
