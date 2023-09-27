import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData, setIsLoading, setSelected } from "../../reducers/booksList";
import { nanoid } from "@reduxjs/toolkit";
import BookCard from "../BookCard/BookCard";
import { Container, Row, Col } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import { InfinitySpin } from "react-loader-spinner";


export function Books() {
  const searchRes = useSelector((state) => state.books.searchResult)
  const select = useSelector((state) => state.books.selected)
  const isLoading = useSelector((state) => state.books.isLoading)
  const currentAsin = useSelector((state) => state.books.currentAsin)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(searchData(""))
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1000);

  }, [select])
  
  if(isLoading) {
    return (
      <Container style={{marginTop: '10px'}}>
        <Row className="h-100">
            <InfinitySpin 
              width='200'
              color="#000"
            />
        </Row>
      </Container>
      )
  } else {
    return (
      <Container style={{marginTop: '10px'}}>
        <Row className="h-100">
          <Col lg={9}>
            <Row className="gap-2">
              {searchRes.map(book => (
                  <BookCard key={nanoid()} bookDetails={book} sel={currentAsin===book.asin?true:false}/>
              ))
              }
            </Row>
          </Col>
          <Col lg={3}>
            <SideBar/>
          </Col>
        </Row>
        
      </Container>
    )
  }
}
