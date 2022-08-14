import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { logout, selectUser } from './features/userSlice';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

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
     {/* <h1>
        Welcome <span>{user.username}</span>
     </h1>
      <Button variant="danger mb-3" onClick={(e)=>handleLogout(e)}>Logout</Button> */}

<Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="light">
        <Container>
          <Navbar.Brand>Hello ,{user.username}</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <Navbar bg="dark" variant="dark">
        <Container>
        <Button variant="danger mb-3" onClick={(e)=>handleLogout(e)}>Logout</Button>
        </Container>
      </Navbar>
    </>
  )
}

export default Logout


//     -----------------

// function BrandExample() {
//   return (
//     <>
     
//     </>
//   );
// }

// export default BrandExample;