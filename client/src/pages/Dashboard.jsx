import React, { useState } from 'react'
import {Dummy_posts} from '../data'
import {Link} from 'react-router-dom'
import { HiPencilSquare } from "react-icons/hi2";
import { FaTrashCan } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const Dashboard = () => {
  const [posts, setPosts] = useState(Dummy_posts)
  return (
<section className='dashboard'>
  {
    posts.length>0 ?<div className="container dashboard__container">
{
  posts.map((posts) => {
    return <article key={posts.id} className='dashboard__post'>
      <div className="dashboard__post-info">
        <div className="dashboard__post-thumbnail">
          <img src={posts.thumbnail} alt={posts.title} />
        </div>
        <h5>{posts.title}</h5>
      </div>
      <div className="dashboard__post-actions">
        <Link to={`/posts/${posts.id}`} className='btn sm'><IoEyeSharp /></Link>
        <Link to={`/posts/${posts.id}/edit`} className='btn sm primary'><HiPencilSquare /></Link>
        <Link to={`/posts/${posts.id}/delete`} className='btn sm danger'><FaTrashCan /></Link>
      </div>
    </article>
  })
}
    </div>: <h2 className="center">You have no Posts yet</h2>
  }
</section>
  )
}

export default Dashboard