import NavBar from './NavBar';
import React from 'react';
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
