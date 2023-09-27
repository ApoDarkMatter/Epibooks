import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BookCardPriceButton({bookDetails}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bookDetails.img}/>
      <Card.Body>
        <Card.Title>{bookDetails.title}</Card.Title>
        <Card.Text>
          {bookDetails.asin}
        </Card.Text>
      </Card.Body>
      <Button variant="primary" style={{ marginBottom: '10px' }}>Price {bookDetails.price}</Button>
    </Card>
  )
}

export default BookCardPriceButton