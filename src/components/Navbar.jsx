import { Link } from 'react-router-dom';


const Navbar = () => {
  return(
    <>
      <nav className='ui fixed black inverted main menu'>
        <div className="ui container">
          <Link to='/' className="item nav-item">Home</Link>
          <Link to='/about' className="item nav-item">About</Link>
          <Link to='/blog' className="item nav-item">Blog</Link>
        </div>
      </nav>
    </>
    
  )
}

export default Navbar