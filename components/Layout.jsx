import React, { useEffect } from 'react'
import { Header, Hero } from '.';
import { useState } from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <>
        <Header 
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        {!toggleMenu && 
        children  }
        {!toggleMenu && <Footer />}
    </>
  )
};

export default Layout

