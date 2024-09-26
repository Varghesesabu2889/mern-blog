import React, { useState } from 'react'
import PostItem from '../components/PostItem'
import { Dummy_posts } from '../data'

const CategoryPosts = () => {
  const [posts, setPosts] = useState(Dummy_posts) 

  return (
    <section>
    {posts.length>0?
       <div className="container posts__container">
       {
          posts.map(({id,thumbnail,category,title,description,authorID})=>
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}/>
          )
        }
       </div>: <h2 className='center'>No Post Founds</h2>
    }
    </section>
  )
}

export default CategoryPosts