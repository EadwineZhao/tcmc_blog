import React from 'react'
import { Header } from '.';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <>
        <Header 
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        {!toggleMenu && children  }
    </>
  )
};

export default Layout