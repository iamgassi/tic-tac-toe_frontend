import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { logout, selectUser } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { clearData } from './features/socketData';
const Nav = () => {
    const user=useSelector(selectUser)
    // const user={username:"Gaurav"};
    const dispatch=useDispatch();

    const handleLogout=(e)=>{
    //    e.preventDefault();
         dispatch(logout(
         )
         )
    }
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand> <i className="fa-solid fa-user"></i> Hello ,{user.username} </Navbar.Brand>  
        <Link to="/login">
        <Button variant="danger" onClick={(e)=>handleLogout(e)}>Logout</Button>
        </Link>
        </Container>
        </Navbar>
    </div>
  )
}

export default Nav
