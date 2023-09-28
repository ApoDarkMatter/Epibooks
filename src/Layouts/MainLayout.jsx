import React from 'react'
import MyFooter from "../components/MyFooter/MyFooter"
import NavBar from "../components/NavBar/NavBar"
import { navLinks } from "../data/myNavBarLinks"
import { footerLinks } from "../data/myFooterLinks"


function MainLayout({children}) {
  return (
    <>
      <NavBar links={navLinks}/>
        {children}
      <MyFooter links={footerLinks}/>
    </>
  )
}

export default MainLayout