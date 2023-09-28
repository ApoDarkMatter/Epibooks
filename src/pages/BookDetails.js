import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchDataByAsin } from "../reducers/booksList";
import { nanoid } from "@reduxjs/toolkit";
import { Row, Col, Container } from "react-bootstrap";
import BookCardPriceButton from "../components/BookCardPriceButton/BookCardPriceButton";
import { InfinitySpin } from "react-loader-spinner";
import MainLayout from "../Layouts/MainLayout";
import CommentArea from "../components/CommentArea/CommentArea";


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
        <MainLayout>
          <Row className="h-100">
              <InfinitySpin 
                width='200'
                color="#000"
              />
          </Row>
        </MainLayout>
      </>
    )
      
  } else {
    return (
      <>
          <MainLayout>
            <Container style={{marginTop: '10px'}}>
              <Row className="h-100">
                <Col lg={9}>
                  <Row className="justify-content-md-center">
                    <BookCardPriceButton key={nanoid()} bookDetails={searchResById} />
                  </Row>
                </Col>
                <Col lg={3}>
                  <CommentArea asin={searchResById.asin}/>
                </Col>
              </Row>
            </Container>
          </MainLayout>
      </>
    );
  }
};

export default BookDetails;
