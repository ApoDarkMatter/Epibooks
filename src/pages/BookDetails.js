import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import MyFooter from '../components/MyFooter/MyFooter'
import { navLinks } from "../data/myNavBarLinks"
import { footerLinks } from "../data/myFooterLinks"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchDataByAsin } from "../reducers/booksList";
import { nanoid } from "@reduxjs/toolkit";
import { Row } from "react-bootstrap";
import BookCardPriceButton from "../components/BookCardPriceButton/BookCardPriceButton";
import { InfinitySpin } from "react-loader-spinner";


const BookDetails = () => {
  const [loading,setLoading] = useState(false)

  const { bookId } = useParams()

  const dispatch = useDispatch()

  const searchResById = useSelector((state) => state.books.searchResultById)

  
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 750);
    dispatch(searchDataByAsin(bookId))
  }, [])

  if(loading) {
    return (
      <>
        <NavBar links={navLinks}/>
          <Row className="h-100">
              <InfinitySpin 
                width='200'
                color="#000"
              />
          </Row>
        <MyFooter links={footerLinks} />
      </>
    )
      
  } else {
    return (
      <>
          <NavBar links={navLinks}/>
          <Row className="justify-content-md-center">
            <BookCardPriceButton key={nanoid()} bookDetails={searchResById} />
          </Row>
          
          <MyFooter links={footerLinks} />
      </>
    );
  }
};

export default BookDetails;
