import React from 'react'
import { nanoid } from '@reduxjs/toolkit/dist'
import SingleComment from '../SingleComment/SingleComment'

const CommentList = ({comments,asin,func}) => {
  return (
        <>
            {comments.map(comm => (
                <SingleComment key={nanoid()} comment={comm} asin={asin} func={func}/>
            ))}   
        </>
        
  )
}

export default CommentList