import React,{ useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {clearData, getData, selectData} from '../features/socketData'
import style from './createGame.module.css'
import Game from '../Game/Game';
import Nav from '../Nav';
import { selectUser } from '../features/userSlice';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CreateGame = () => {
  
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [rounds, setRounds] = useState('');
  const socketData=useSelector(selectData)
  const user=useSelector(selectUser)

  const dispatch=useDispatch();
  const handleClick=(e)=>{
    // e.preventDefault();
    console.log(room,name,rounds)
    dispatch(getData({
    name,
    room,
    rounds
   }))
  }
  return (
  <>
    <div className={style.joinOuterContainer}>
    <div className={style.joinInnerContainer}>
      <h1 className={style.heading}>Join</h1>    
        <input placeholder={`${user.username} Name`  } className={style.joinInput} type="text" onChange={(event) => setName(event.target.value)} required={true} />
      
        <input placeholder="Room" className={style.joinInput } type="text" onChange={(event) => setRoom(event.target.value)} required={true}/>
      
        <input placeholder="Number of Rounds" className={style.joinInput } type="number" max="9" min="1" step="1" onChange={(e) =>setRounds(e.target.value)} required={true}/>
   
      <Link to="/game">
      <Button onClick={e=>handleClick(e)}>Submit</Button>
      </Link>
  
    </div>
    </div>

  </>
  )
}

export default CreateGame
