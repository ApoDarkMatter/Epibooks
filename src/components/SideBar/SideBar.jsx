import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import CommentArea from '../CommentArea/CommentArea'

function SideBar() {

    const currentAsin = useSelector((state) => state.books.currentAsin)
    
    useEffect(() => {
        
    }, [currentAsin])
    
    if (currentAsin === "") {
        return (
            <h5>No comments, select one book</h5>
        )
    } else {
        return (
            <CommentArea asin={currentAsin}/>
        )
    }

}

export default SideBar