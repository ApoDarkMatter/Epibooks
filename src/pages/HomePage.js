import React from "react";
import { Books } from "../components/LatestRelease/LatestRelease";
import NavBar from "../components/NavBar/NavBar";
import MyFooter from '../components/MyFooter/MyFooter'
import { navLinks } from "../data/myNavBarLinks"
import { footerLinks } from "../data/myFooterLinks"

const HomePage = () => {

  return (
    <>
        <NavBar links={navLinks}/>
        <Books />
        <MyFooter links={footerLinks} />
    </>
  );
};

export default HomePage;
