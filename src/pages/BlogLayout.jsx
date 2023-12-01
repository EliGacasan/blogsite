
import { Link, Outlet } from 'react-router-dom';
import BlogTitle from '../Blog/BlogTitle';
import BlogMain from '../Blog/BlogMain';

const BlogLayout = () => {
  return(
    <>
      <BlogTitle/>
      <BlogMain/>
      <Outlet />
    </>
  )
}

export default BlogLayout