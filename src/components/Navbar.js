import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ cart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const toggleIcons = () => {
    setIsVisible((prevState) => !prevState);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className='flex justify-between items-center h-16 p-2 top-0 left-0 right-0'>
      {/* Logo Section */}
      <div className='h-20 w-40'>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/logo.png`} 
          alt='Logo' 
          className='h-full w-auto' 
        />
      </div>

      {/* Navigation Links */}
      <div className='relative flex gap-4 font-semibold mx-4'>
        <p onClick={() => handleNavigation('/')}>Home</p>
        <p onClick={() => handleNavigation('/collections')}>Collection</p>
        <p onClick={() => handleNavigation('/about')}>About</p>
        <p onClick={() => handleNavigation('/contact')}>Contact</p>
      </div>

      {/* Icons for Small Screens */}
      <div className='relative flex items-center gap-4 md:hidden'>
        {/* Collapsed Icon */}
        <img
          src={`${process.env.PUBLIC_URL}/assets/menu_icon.png`}
          alt='Menu Icon'
          className='h-5 w-5 cursor-pointer'
          onClick={toggleIcons}
        />

        {/* Dropdown Menu */}
        <div
          className={`absolute right-0 mt-auto w-max flex flex-row gap-2 p-2 transition-transform duration-300 ease-in-out ${isVisible ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0 pointer-events-none'}`}
          style={{ marginTop: isVisible ? '120px' : '0' }}
        >
          <div className="my-4 md:mt-6 sm:mt-4">
            <input type="text" placeholder='search' className="border border-gray-500 rounded-lg" />
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/assets/search_icon.png`}
            alt='Search'
            className='h-5 w-5 md:mt-6 sm:mt-4'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/profile_icon.png`}
            alt='User'
            className='h-5 w-5 md:mt-6 sm:mt-4'
          />
          <div className='relative'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/cart_icon.png`}
              alt='Cart'
              className='h-5 w-5 md:mt-6 sm:mt-4'
              onClick={() => handleNavigation('/cart')}
            />
            {cart.length > 0 && (
              <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Icons for Larger Screens */}
      <div className='hidden md:flex gap-5'>
        <div>
          <input type="text" placeholder='search' className="border border-gray-500 rounded-lg" />
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/search_icon.png`}
          alt='Search'
          className='h-5 w-5'
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/profile_icon.png`}
          alt='User'
          className='h-5 w-5'
        />
        <div className='relative'>
          <img
            src={`${process.env.PUBLIC_URL}/assets/cart_icon.png`}
            alt='Cart'
            className='h-5 w-5'
            onClick={() => handleNavigation('/cart')}
          />
          {cart.length > 0 && (
            <span className='absolute top-0 mx-3 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs'>
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
