import React from 'react'
import MainLayout from '../Layouts/MainLayout';

export default function NotFound() {
  return (
    <>
        <MainLayout>
          <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                    <h1 className="display-3">404</h1>
                    <h1>error</h1>
                    <h2>page not found</h2>
                </div>
            </div>
          </div>
        </MainLayout>
    </>
      
      
  )
}
