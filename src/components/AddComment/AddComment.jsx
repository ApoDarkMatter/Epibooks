import axios from 'axios'
import React, {useState} from 'react'
import { Button, Card } from 'react-bootstrap'


const AddComment = ({asin,func}) => {
    const url = "https://striveschool-api.herokuapp.com/api/comments"
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTU2NzUxNTQsImV4cCI6MTY5Njg4NDc1NH0.eUC1S_2PG1ieo1MStNTXtA_G7YADWVuarJSD0B3PRSU"

    const [newComment,setNewComment] = useState("")
    const [newRate,setNewRate] = useState("")

    const addComment = async () => {
        if(newComment === "" || newRate === "" || newRate > 5 || newRate <= 0) {
            alert('You must enter a comment - Rate only from 1 to 5')
        } else {
            try {
                const response = await axios.post(url,
                    {
                        comment: newComment,
                        rate: newRate,
                        elementId: asin
                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                            Authorization: token
                        }
                    })
                    if (response.status === 200) {
                        func();
                        setNewComment("");
                        setNewRate("");
                        alert("Commento inviato con successo!");
                      } else {
                        alert("Errore nel recupero dei commenti");
                      }
              } catch (error) {
                  console.log(error);
              }
        }
    }

    return (
        <>
            <Card style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Body>
                <Card.Title>Add New Comment</Card.Title>
                <Card.Text>
                    <input type="text"
                        style={{width: "100%"}}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add Comment"
                    ></input>
                </Card.Text>
                <Card.Text>
                    <input type="number"
                        style={{width: "100%"}}
                        value={newRate}
                        onChange={(rate) => setNewRate(rate.target.value)}
                        placeholder="Add Rate"
                        min="1" 
                        max="5"
                    ></input>
                </Card.Text>
            </Card.Body>
            <Button type="button" onClick={addComment} style={{margin:'5px'}}>Add Comment</Button>
            </Card>
        </>
    )
}

export default AddComment