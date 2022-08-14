import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { logout, selectUser } from './features/userSlice';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import style from './Style.module.css'


const Logout = () => {
    const user=useSelector(selectUser)
    const dispatch=useDispatch();

    const handleLogout=(e)=>{
       e.preventDefault();

         dispatch(logout(
         ))
    }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Hello ,{user.username}</Navbar.Brand>  
        <Button variant="danger" onClick={(e)=>handleLogout(e)}>Logout</Button>
        </Container>
      </Navbar>
 
     <div className={style.main}>

      <Button variant="outline-secondary mb-2"  size="lg">Create Game</Button>

      <Button variant="outline-success "  size="lg">Join Game</Button>
     </div>

   </>
  )
}

export default Logout
