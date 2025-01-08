"use client"; // Ensure client-side interactivity in Next.js
import React from 'react';
import Link from 'next/link'; // Import Link here

// Correctly destructure props
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
    >
      {title}
    </Link>
  );
};

export default NavLink;
