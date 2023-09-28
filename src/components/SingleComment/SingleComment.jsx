import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import {AiFillDelete, AiOutlineEdit, AiFillSave} from 'react-icons/ai'
import {GiCancel} from 'react-icons/gi'


const SingleComment = ({comment,asin,func}) => {
    const url = "https://striveschool-api.herokuapp.com/api/comments/"
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTU2NzUxNTQsImV4cCI6MTY5Njg4NDc1NH0.eUC1S_2PG1ieo1MStNTXtA_G7YADWVuarJSD0B3PRSU"
    console.log(comment);

    const [modify,setModify] = useState(false)
    const [modComment,setModComment] = useState("")
    const [modRate,setModRate] = useState("")
    
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

    const modifyComment = () => {
        setModify(true)
        setModComment(comment.comment)
        setModRate(comment.rate)
    }

    const saveComment = async () => {
        const elementId = comment._id
        if(modComment === "" || modRate === "" || modRate > 5 || modRate <= 0) {
            alert('You must enter a comment - Rate only from 1 to 5')
        } else {
            try {
                const response = await axios.put(url+elementId,{
                    comment: modComment,
                    rate: modRate,
                    },
                    {
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
    }

    useEffect(() => {
      
    }, [modify])
    

    if (modify) {
        return (
            <>
                <Card style={{ width: '18rem',marginBottom: '10px' }}>
                    <Card.Body>
                        <Form.Label>Rate</Form.Label>
                        <input type="number"
                            style={{width: "100%"}}
                            value={modRate}
                            onChange={(rate) => setModRate(rate.target.value)}
                            placeholder="Modify Rate"
                            min="1" 
                            max="5"
                        ></input>
                    </Card.Body>
                    <Card.Body>
                        <Form.Label>Comment</Form.Label>
                        <input type="text"
                            style={{width: "100%"}}
                            value={modComment}
                            onChange={(e) => setModComment(e.target.value)}
                            placeholder="Modify Comment"
                        ></input>
                    </Card.Body>
                    <Button variant="warning" type="button" onClick={saveComment} style={{margin:'5px'}}><AiFillSave/> Save</Button>
                    <Button variant="danger" type="button" onClick={() => setModify(false)} style={{margin:'5px'}}><GiCancel/> Cancel</Button>
                </Card>
            </>
        )
    } else {
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
                    <Button variant="warning" type="button" onClick={modifyComment} style={{margin:'5px'}}><AiOutlineEdit/> Modify</Button>
                    <Button variant="danger" type="button" onClick={deleteComment} style={{margin:'5px'}}><AiFillDelete/> Delete</Button>
                </Card>
            </>
        ) 
    }
  

}

export default SingleComment