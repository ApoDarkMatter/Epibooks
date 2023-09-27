import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import { navLinks } from "../data/myNavBarLinks"

export default function About() {
  return (
    <>
        <NavBar links={navLinks}/>
        <div className="container">
          <div className="row">
              <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                  <h1 className="display-3">About Page</h1>
                  <h2>Epibooks Inc</h2>
              </div>
          </div>
        </div>
    </>
      
      
  )
}
