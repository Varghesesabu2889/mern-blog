import React, { useState } from 'react'
import Avatar1 from '../assets/images/avatar8.jpg'
import Avatar2 from '../assets/images/avatar2.jpg'
import Avatar3 from '../assets/images/avatar3.jpg'
import Avatar4 from '../assets/images/avatar9.jpg'
import Avatar5 from '../assets/images/avatar5.jpg'
import Avatar6 from '../assets/images/avatar6.jpg'

 import {Link} from 'react-router-dom'

const authorsData = [
  {id:1,avatar:Avatar1,name:'Luke Antony',posts:3},
  {id:2,avatar:Avatar2,name:'John Doe',posts:2},
  {id:3,avatar:Avatar3,name:'Jane Doe',posts:1},
  {id:4,avatar:Avatar4,name:'John Smith',posts:4},
  {id:5,avatar:Avatar5,name:'Jane Smith',posts:5},
  {id:6,avatar:Avatar6,name:'John Johnson',posts:6},
]

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className="authors">
   {authors.length> 0?    <div className="container authors__container">
      {
        authors.map(({id,avatar,name,posts})=>{
          return <Link key={id} to={`/posts/users/${id}/`} className='author'>
            <div className="author__avatar">
              <img src={avatar} alt={`Image of ${name}`} />
            </div>
            <div className="author__info">
              <h4>{name}</h4>
              <p>{posts}</p>
            </div>
          </Link>
        })
      }
      </div>: <h2 className='center'>No Users/Authors found</h2>}
    </section>
  )
}

export default Authors