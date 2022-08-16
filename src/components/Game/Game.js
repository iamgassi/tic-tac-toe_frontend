import React, { useState ,useEffect} from 'react';
import style from './Game.module.css';
import io from 'socket.io-client'
import { useSelector } from 'react-redux';
import { selectData } from '../features/socketData';
import Nav from '../Nav';

const Game = () => {
   
   //here need to call dispatch(clearData());

	// console.log(socket)
					// const socketData=useSelector(selectData)
					// console.log(socketData)
					// const name=socketData.name;
					// const room=socketData.room;
					// const rounds=socketData.rounds;
					// let socket;
					// useEffect(() => {
					// 	// const { name, room } = queryString.parse(location.search);
					// socket=io("http://localhost:9000/")
					// 	// socket = io(ENDPOINT);
					
					// 	// setRoom(room);
					// 	// setName(name)
					// 	socket.emit('join', { name, room }, (error) => {
					// 	if(error) {
					// 		alert(error);
					// 	}
					// 	});
					// }, []);

					// useEffect(() => {
					// 	// socket.on('message', message => {
					// 	//   setMessages(messages => [ ...messages, message ]);
					// 	// });
					// 	socket.on("roomData", ({ users }) => {
					// 	console.log(users)
					// 	});
					// }, []);
	const [turn, setTurn] = useState('x');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();
  

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

		if (turn === 'x') {

			squares[num] = 'x';
			setTurn('o');
		} else {
			squares[num] = 'o';
			setTurn('x');
		}

		checkForWinner(squares);
		setCells(squares);
	};
  
	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		<div className={style.container}>
			<table>
				Turn: {turn}
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
		</div>
	);
	// return(
	// 	<>
	// 	<Nav/>
	// 	<h1>Tic tac toe</h1>
	// 	</>
	// )
};

export default Game;

