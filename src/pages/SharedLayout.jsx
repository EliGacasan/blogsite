
import Navbar from '../components/Navbar';
import { Link, Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default SharedLayout