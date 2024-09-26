import React, { useState } from 'react'
import Thumbnail1 from '../assets/images/blog1.jpg' 
import Thumbnail2 from '../assets/images/blog2.jpg' 
import Thumbnail3 from '../assets/images/blog3.jpg' 
import Thumbnail4 from '../assets/images/blog4.jpg' 
import Thumbnail5 from '../assets/images/blog5.jpg' 
import Thumbnail6 from '../assets/images/blog6.jpg' 
import Thumbnail7 from '../assets/images/blog7.jpg' 
import Thumbnail8 from '../assets/images/blog8.jpg' 
import Thumbnail9 from '../assets/images/blog9.jpg' 

import PostItem from './PostItem'

const Dummy_posts = [
  {
    id: '1',
    thumbnail:Thumbnail1,
    category:'education',
    title: 'How to learn a new language',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
    authorID:3,
},
{
  id: '2',
  thumbnail:Thumbnail2,
  category:'science',
  title: 'How to learn a new language',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
  authorID:1,
},
{
  id: '3',
  thumbnail:Thumbnail3,
  category:'weather',
  title: 'How to learn a new language',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
  authorID:2,
},
{
  id: '4',
  thumbnail:Thumbnail4,
  category:'farming',
  title: 'How to learn a new language',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
  authorID:4,
},{
  id: '5',
  thumbnail:Thumbnail5,
  category:'weather',
  title: 'How to learn a new language',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
  authorID:2,
},
{
  id: '6',
  thumbnail:Thumbnail6,
  category:'weather',
  title: 'How to learn a new language',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
  authorID:2,
},
{
  id: '7',
  thumbnail:Thumbnail7,
  category:'weather',
  title: 'How to learn a new language',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
  authorID:2,
},
{
  id: '8',
  thumbnail:Thumbnail8,
  category:'weather',
  title: 'How to learn a new language',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
  authorID:2,
},
{
  id: '9',
  thumbnail:Thumbnail9,
  category:'weather',
  title: 'How to learn a new language',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor',
  authorID:2,
},
]

const Posts = () => {
  const [post, setPost] = useState(Dummy_posts) 
  return (
    <section className="posts">
     <div className="container posts__container">
     {
        post.map(({id,thumbnail,category,title,description,authorID})=>
          <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID}/>
        )
      }
     </div>
    </section>
  )
}




export default Posts



































































