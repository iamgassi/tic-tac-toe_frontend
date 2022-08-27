import React, { useState ,useEffect} from 'react';
import style from './Game.module.css';
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux';
import { clearData, selectData } from '../features/socketData';
import Nav from '../Nav';
import { Col, Container, Row } from 'react-bootstrap';
import { render } from 'react-dom';
import CreateGame from '../CreateGame/CreateGame';
import Login from '../Login';
let socket;
const Game = () => {
	// const dispatch=useDispatch();
   const socketData=useSelector(selectData)
//    const [userInRoom,SetUserInRoom]=useState('')
const [users,setUsers]=useState('')
const [messages,setMessages]=useState([])
const[usernameTaken,setUsernameTaken] =useState(false);
const dispatch=useDispatch()
const [turn, setTurn] = useState('');
// console.log(users[0].name)
const [cells, setCells] = useState(Array(9).fill(''));
const [winner, setWinner] = useState();
   
					const name=socketData.name;
					const room=socketData.room;
					const rounds=socketData.rounds;
					
					
					useEffect(() => {
					socket=io("http://localhost:9000/")
						// socket = io(ENDPOINT);
						console.log(socket)
						socket.emit('join', { name, room, rounds }, (error) => {
						if(error) {
							alert(error);
							setUsernameTaken(true);
							// dispatch(clearData())
						}
						});

						return()=>{
							  socket.disconnect();
							//   dispatch(clearData())
						}
					}, []);

					useEffect(() => {
						// socket.on('message', message => {
						//   setMessages(messages => [ ...messages, message ]);
						// });
						socket.on("roomData", ({ users }) => {
						       setUsers(users)
                                setTurn(users[0].name)
							}							
						);
					}, []);

					useEffect(()=>{
						socket.emit("play",cells)
					},[cells])

				
				
  

	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
			});
		}
	};

	const handleClick = (num) => {
    if(winner)
    return ;
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];
		if (turn === users[0].name) {

			squares[num] = 'x';
			setTurn(users[1].name);
		} else {
			squares[num] = 'o';
			setTurn(users[0].name);
		}

		checkForWinner(squares);
		setCells(squares);
	};
  
	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};
	const Cell = ({ num }) => {
		if(users.length==2)            //here we apply the two user requirement
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

    // console.log(usernameTaken)
	// console.log({userInRoom})
	return (
		<>
		{usernameTaken?(<Login/>):(
		 <>
		<Nav/>
			<h2 className={style.container}>Number of Rounds:{rounds} </h2>
      <Row >
	  <Col >
		<div >
	
		{
        users
        ? (
          <div>
            <h1>People In Room:{room}</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
        }
		</div>
		
	  </Col>
	  <Col>
	            
						Turn: {turn}
					<table>
						
						<tbody>
							<tr>
								<Cell num={0} />

								<Cell num={1} />
								<Cell num={2} />
							</tr>
							<tr>
								<Cell num={3} />
								<Cell num={4} />
								<Cell num={5} />
							</tr>
							<tr>
								<Cell num={6} />
								<Cell num={7} />
								<Cell num={8} />
							</tr>
						</tbody>
					</table>

	  </Col>
      </Row>
			{winner ?(
				<>
					<p>{winner} is the winner!</p>
					<button onClick={() => handleRestart()}>Play Again</button>
          
				</>
			):
      ( (!cells.includes(''))?(
        <>
					<p> PLAY AGAIN, MATCH IS DRAWN! </p>
					<button onClick={() => handleRestart()}>Play Again</button>
				</>
        ):(null)
        
      )}

		</>
		)}
	  	 
		</>
	
	); 
	
};

export default Game;

