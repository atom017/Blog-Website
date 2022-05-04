import React from 'react'
import './Post.css';

const Post = () => {
  return (
    <div className="card">
      <div class="card-header">
        <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
        <span class="tag">Technology</span>
      </div>
      <div class="card-body">
        
        <h4>
          Why is the Tesla Cybertruck designed the way it
          is?
        </h4>
        <p className='card-paragraph'>
          An exploration into the truck's polarising design
          Lorem ipsum dolor sit,
           amet consectetur adipisicing elit. 
           Delectus quisquam magnam esse accusamus 
           impedit dolore voluptatibus animi commodi libero facere eaque, ea ad dolor tenetur consectetur earum odio non mollitia.
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Molestiae voluptatibus est, maxime beatae laudantium id 
            corporis fugit, explicabo doloribus ea sint a ipsam optio voluptatem nobis, 
            aut aspernatur libero sapiente. Molestias repellat enim
           vitae culpa, earum laboriosam dolores optio, magni recusandae
            repudiandae in similique, alias ipsum. Ratione odio, voluptas blanditiis nobis, voluptatum non architecto impedit maxime veniam molestias iusto aperiam?
        </p>

        {/* user */}
        <div className="user">
          <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
          <div class="user-info">
            <h5>Carrie Brewer</h5>
            <small>1w ago</small>
          </div>
        </div>
        
      </div> 
    </div>
  )
}

export default Post