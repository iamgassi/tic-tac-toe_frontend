import React,{ useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {getData, selectData} from '../features/socketData'
import style from './createGame.module.css'



const CreateGame = () => {
  
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [rounds, setRounds] = useState('');
  const socketData=useSelector(selectData)

  const dispatch=useDispatch();
  const handleClick=(e,name,room,rounds)=>{
    e.preventDefault();
    console.log(room,name,rounds)
   dispatch(getData({
    name,
    room,
    rounds
   }))
   console.log("hi Gaurav",socketData)
  }



  return (

    <div className={style.joinOuterContainer}>
      <div className={style.joinInnerContainer}>
        <h1 className={style.heading}>Join</h1>
        <form onSubmit={e=>handleClick(e,name,room,rounds)}>
      
          <input placeholder="Name" className={style.joinInput} type="text" onChange={(event) => setName(event.target.value)} required="true" />
        
          <input placeholder="Room" className={style.joinInput } type="text" onChange={(event) => setRoom(event.target.value)} required="true"/>
        
          <input placeholder="Number of Rounds" className={style.joinInput } type="number" max="9" Min="1" step="1" onChange={(e) =>setRounds(e.target.value)} required="true"/>
    
        <button className={style.button} type='submit'>Submit</button>
        </form>
      </div>
    </div>

  );
}

export default CreateGame
