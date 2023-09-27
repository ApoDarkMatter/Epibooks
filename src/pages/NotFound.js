import React from 'react'
import NavBar from "../components/NavBar/NavBar";
import { navLinks } from "../data/myNavBarLinks"

export default function NotFound() {
  return (
    <>
        <NavBar links={navLinks}/>
        <div className="container">
          <div className="row">
              <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                  <h1 className="display-3">404</h1>
                  <h1>error</h1>
                  <h2>page not found</h2>
              </div>
          </div>
        </div>
    </>
      
      
  )
}
