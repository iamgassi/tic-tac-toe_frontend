import React from 'react'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import style from './Style.module.css'
import Nav from './Nav';

const Logout = () => {

  return (
    <>
      <Nav/>
     <div className={style.main}>

     <Link to="/createGame">
      <Button variant="outline-secondary mb-2"  size="lg">Create Game</Button>
     </Link>
    

     <Link to="/joinGame">
  
      <Button variant="outline-success "  size="lg">Join Game</Button>
      </Link>
     </div>

   </>
  )
}

export default Logout
