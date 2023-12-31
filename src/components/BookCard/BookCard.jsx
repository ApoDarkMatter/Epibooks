import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BookCard.css'
import { useDispatch } from 'react-redux';
import { setCurrentAsin } from '../../reducers/booksList';
import { Link } from 'react-router-dom';

function BookCard({bookDetails,sel}) {
  
  const dispatch = useDispatch()

  const [selected,setSelected] = useState(false)

  const select = () => {
    setSelected(!selected)
    if(selected) {
      dispatch(setCurrentAsin(""))
    } else {
      dispatch(setCurrentAsin(bookDetails.asin))
    }
  }

  if(selected) {
    return (
      <Card style={{ width: '18rem'}} className={sel ? 'addBorder' : ''}>
        <Card.Img variant="top" src={bookDetails.img} onClick={select}/>
        <Card.Body>
          <Card.Title>{bookDetails.title}</Card.Title>
          <Card.Text>
            {bookDetails.category} - {bookDetails.asin}
          </Card.Text>
        </Card.Body>
        <Link to={`./bookdetails/${bookDetails.asin}`}><Button variant="primary" style={{ marginBottom: '10px', width: '100%' }}>Book Details</Button></Link>
      </Card>
    )
  } else {
    return (
      <Card style={{ width: '18rem' }} className={sel ? 'addBorder' : ''}>
        <Card.Img variant="top" src={bookDetails.img} onClick={select}/>
        <Card.Body>
          <Card.Title>{bookDetails.title}</Card.Title>
          <Card.Text>
            {bookDetails.category} - {bookDetails.asin}
          </Card.Text>
        </Card.Body>
        <Link to={`./bookdetails/${bookDetails.asin}`}><Button variant="primary" style={{ marginBottom: '10px', width: '100%' }}>Book Details</Button></Link>
      </Card>
    )
  }


}

export default BookCard