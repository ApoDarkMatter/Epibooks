import axios from 'axios'
import React, {useState} from 'react'
import { useEffect } from 'react'
import CommentList from '../CommentList/CommentList'
import AddComment from '../AddComment/AddComment'
import { useSelector } from 'react-redux'
import { Comment } from 'react-loader-spinner'
import { Row } from 'react-bootstrap'

const CommentArea = ({asin}) => {
  const url = "https://striveschool-api.herokuapp.com/api/comments/"
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGVhNGJlMTUxNWY0MTAwMTQ2OTdhMmYiLCJpYXQiOjE2OTU2NzUxNTQsImV4cCI6MTY5Njg4NDc1NH0.eUC1S_2PG1ieo1MStNTXtA_G7YADWVuarJSD0B3PRSU"
  
  const currentAsin = useSelector((state) => state.books.currentAsin)

  const [comment,setComment] = useState([])
  const [availableComment,setAvailableComment] = useState(false)
  const [loading,setLoading] = useState(false)

  const getComments = async () => {
    try {
      const response = await axios.get(url+asin,{
        headers: {
            'Authorization': token
        }})
        
        if(response.data === null) {
          setAvailableComment(false)
        } else {
          setComment(response.data)
          setAvailableComment(true)
        }
          
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
    getComments()
  },[currentAsin])


  if (loading) {
      return (
        <Row>
          <Comment
            visible={true}
            height="50"
            width="50"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#000"
          />
        </Row>
      )
    } else {
      if(availableComment) {
        return (
          <>
            <AddComment asin={asin} func={getComments}/>
            <h2>Comments:</h2>
            <CommentList comments={comment} asin={asin} func={getComments}/>
          </>
        )
      } else {
        return (
          <>
            <h2>No Comments</h2>
            <AddComment asin={asin} func={getComments}/>
          </>
        )
      }
    } 
  }

export default CommentArea