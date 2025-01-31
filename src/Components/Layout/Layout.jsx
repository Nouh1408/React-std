import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        NAVBAR
      </nav>

      {/* This is where the child route components will be rendered */}
      <Outlet />

      <footer>
        Footer
      </footer>
    </>
  );
}
