import { Link, Outlet } from 'react-router-dom';

const BlogMain = () => {
  return(
    <div className="ui stackable grid container">
      <div className="ui three wide column">
        <Link to='/blog/Post1' className="item nav-item">This is a link to post 1</Link>
      </div>
      
    </div>
  )
}

export default BlogMain