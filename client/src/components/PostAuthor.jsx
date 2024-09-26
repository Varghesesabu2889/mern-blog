import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../assets/images/avatar8.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/152326`} className='post__author'>
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