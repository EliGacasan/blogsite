import { Routes, Route } from 'react-router-dom';
import BlogLayout from './BlogLayout';
import Post1 from '../Blog/Posts/Post1'

const Blog = () => {
  return(
    <Routes>
      <Route path='/' element={<BlogLayout/>}>
        <Route path='/Post1' element={<Post1/>}></Route>
      </Route>
    </Routes>
    
  )
}

export default Blog