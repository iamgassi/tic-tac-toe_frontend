import React from 'react'
import {Link} from 'react-router-dom'
// import style from '../components/Style.module.css'
import style from './Style.module.css'


import {Row, Col, Button} from "react-bootstrap"

const Home = () => {
  return (
    <div className={style.main} >
    <div className={style.inputData}>
      <Row>
        <Col>
       <Link to="/login">
     <Button variant="outline-success">Login</Button>
      </Link>  
        </Col>
        <Col>
       <Link to="/register">
             <Button variant="outline-secondary">Register</Button>
       </Link>
        </Col>
       </Row>
       </div>

    </div>
  )
}

export default Home