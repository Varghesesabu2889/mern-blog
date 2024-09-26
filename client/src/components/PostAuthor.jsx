import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/images/avatar3.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/appu`}>
            <div className="post__author-avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="post__author-details">  
                <h5>By:David John</h5>
                <small>Just Now</small>
</div>
    </Link>
  )
}

export default PostAuthor