import React, { useState } from 'react'
import PostItem from './PostItem'
import { Dummy_posts } from '../data'


const Posts = () => {
  const [post, setPost] = useState(Dummy_posts) 
  return (
    <section className="posts">
    {post.length>0?
       <div className="container posts__container">
       {
          post.map(({id,thumbnail,category,title,description,authorID})=>
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}/>
          )
        }
       </div>: <h2 className='center'>No Post Founds</h2>
    }
    </section>
  )
}




export default Posts



































































