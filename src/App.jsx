import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Error from './pages/Error';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
