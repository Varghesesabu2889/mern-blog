import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/images/blog22.jpg'
const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={'/posts/:id/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'/posts/:id/delete'} className='btn sm danger'>Delete</Link>
              </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae autem sequi, quas ipsum exercitationem reprehenderit, unde sunt laboriosam rerum quam itaque dicta quis accusamus, cupiditate harum vel ipsa quidem consequuntur?
        Nobis ducimus sit iusto voluptates quo? Ipsum enim adipisci quaerat! Harum, possimus enim quos quae accusamus laudantium consectetur maxime ipsam fuga dicta explicabo ratione asperiores velit mollitia odio esse repudiandae?
        Dolorum odit, assumenda sapiente vero necessitatibus ullam distinctio. Obcaecati corrupti quos excepturi consectetur ab rerum molestias repellat, ullam eaque nisi cupiditate eveniet animi aliquam, totam rem dolor voluptatem expedita fuga?</p><br />
        <p>                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit voluptas nisi! Impedit eos saepe cupiditate laudantium nemo tempora pariatur veniam, minus officia repellat perspiciatis nihil distinctio illum in totam?
        Voluptatum quidem fuga, quos reiciendis ipsum cumque voluptatem quas quaerat exercitationem minima saepe ab ea dolore repellendus iusto provident nemo incidunt neque quia. Obcaecati nesciunt, iusto odio sit saepe similique.
        Ducimus dolorem tempora delectus amet accusamus sapiente earum labore, ex quia maxime deserunt reiciendis expedita facere assumenda voluptatibus fugit cumque? Eum magni repellat non atque quis animi laboriosam error dolor.
        Magni commodi suscipit, nemo quis modi, libero at veritatis ipsa provident officia quo ullam, sit reiciendis. Totam doloribus, doloremque iusto fugit dicta ullam animi aut? Temporibus praesentium corporis minus voluptatum.
        Ad aliquam dolore totam! Sed alias, eos ullam pariatur cumque ex! Voluptate, saepe, odio, ducimus assumenda laborum quibusdam eius aliquid molestias dolorum quod fugiat nulla! Molestiae illo sequi beatae eos!
        Dolore animi ducimus tempora, cum atque unde suscipit exercitationem voluptatem magnam inventore facilis ipsum blanditiis maxime optio accusamus numquam molestiae ea ipsa ratione temporibus officiis harum! Praesentium veniam voluptate voluptatibus.</p><br />
        <p>                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum inventore illo soluta cum tempora recusandae eos, id harum facere est consectetur quis quae suscipit dolorem. Facere sed quis aut fugiat.
        Odit optio impedit eveniet, unde molestiae assumenda numquam aliquam magnam, tempore iusto aliquid. Dolore eaque iusto nihil soluta blanditiis, hic sapiente adipisci. Ullam nihil sequi asperiores itaque sint, assumenda odio.</p>
      </div>
    </section>
  )
}

export default PostDetail