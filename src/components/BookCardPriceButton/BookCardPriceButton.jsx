import React from 'react'
import { Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function BookCardPriceButton({bookDetails}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={bookDetails.img}/>
      <Card.Body>
        <Card.Title>{bookDetails.title}</Card.Title>
        <Card.Text>
          {bookDetails.category} - {bookDetails.asin}
        </Card.Text>
      </Card.Body>
      <Badge bg="warning" text="dark" style={{ marginBottom: '10px', width: '100%', height: '30px', display: 'flex', justifyContent:'center',alignItems:'center', fontSize: '1rem' }}>Price {bookDetails.price} €</Badge>
    </Card>
  )
}

export default BookCardPriceButton