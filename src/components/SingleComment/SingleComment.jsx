import axios from 'axios'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {AiFillDelete} from 'react-icons/ai'

const SingleComment = ({comment,asin,func}) => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/"
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTU2NzUxNTQsImV4cCI6MTY5Njg4NDc1NH0.eUC1S_2PG1ieo1MStNTXtA_G7YADWVuarJSD0B3PRSU"
    console.log(comment);
    
    const deleteComment = async () => {
        const elementId = comment._id
        try {
            const response = await axios.delete(url+elementId,{
                headers: {
                    'Authorization': token
                }})
                
                if (response.status === 200) {
                    func();
                }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <Card style={{ width: '18rem',marginBottom: '10px' }}>
            <Card.Body>
                <Card.Title>Rate: {comment.rate}</Card.Title>
                <Card.Text>
                    {comment.author}
                </Card.Text>
                <Card.Text>
                    {comment.comment}
                </Card.Text>
            </Card.Body>
            <Button variant="danger" type="button" onClick={deleteComment}><AiFillDelete/></Button>
        </Card>
    </>
  )
}

export default SingleComment