import React, { useState,useEffect } from 'react'
import {login} from './features/userSlice'
import { useDispatch } from 'react-redux'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import Logout from './Logout'
import {Link} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import style from './Style.module.css'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const [fetchData,setFetchData]=useState({});
    const[err,SetErr]=useState("");
    const[isLoading,setIsloading]=useState(false)

    useEffect(function(){
      fetch("http://localhost:8000/user")
         .then(function(response){
          console.log(response)
           return response.json();
        })
         .then(function(data){
           console.log(data);
           setFetchData(data);
        })
         .catch(function(err){
        
           console.log(err);
        });
     },[]);

    const dispatch=useDispatch();
    const handleSubmit=async function(e){
       e.preventDefault();
       setIsloading(true)

       try{
        await verifyFromServer();
        setIsloading(false)
      }catch(err){
         console.log(err)
        SetErr("Failed to Login")
        setIsloading(false)
      }
    
      setTimeout(() => {
        SetErr("")
      }, 3000);
      

       setEmail("")
       setPassword("")
      } 

    function verifyFromServer()
    {       
        for(let i=0;i<fetchData.length;i++)
       {
       let serverMail=fetchData[i].email
        console.log(serverMail)
        if(email===serverMail  )
              { 
                if(fetchData[i].password===password)
                      {
                        
                        dispatch(login({
                          email:serverMail,
                          username:fetchData[i].username,
                          loggedIn:true
                        }))
                      }
                else
                    {
                     
                      SetErr("Incorrect Password")
                    }

              }
        else{
           continue
        }
       }
      
       SetErr("Something Wrong!")
     
     
    }
    const user=useSelector(selectUser);

 
  return (
    <div className={style.main}>
    
    {user?(   
      <Logout/>
    ):(
      <>
      <Form onSubmit={(e)=>handleSubmit(e)}>
      <h1>Login here </h1>

      <Form.Control  type="email"
      placeholder='Email'
      className='mb-2'
      value={email}
      onChange={(e)=>{
          setEmail(e.target.value)
      }}  
      required={true}
        />
      <Form.Control type="password" 
      placeholder='password' 
      className='mb-3'
      value={password}
      onChange={(e)=>{
          setPassword(e.target.value)
      }} 
      required={true}
      />
     <div className="d-grid gap-2">
     <Button variant="primary mb-3" type='submit'>Submit</Button>
      </div>
     <Link to="/home">
     <div className="d-grid gap-2">
     <Button variant="dark">Home</Button>
      </div>
     </Link>

     <h4 >
      {isLoading?( 
        <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading</span>
    </Spinner>):(
     <span className={style.error}> {err}</span> 
      )}
       </h4>

      </Form>
  </>
    )}
    </div>
  
  )
}

export default Login