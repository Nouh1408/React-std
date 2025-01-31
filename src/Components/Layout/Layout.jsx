import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet /> {/* Child routes will render here */}
      <footer>Footer</footer>
    </>
  );
}