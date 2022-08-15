import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register'
import Home from './components/Home'
import CreateGame from './components/CreateGame/CreateGame';
import JoinGame from './components/JoinGame/JoinGame';
import Game from './components/Game/Game';
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
  <Routes>
  <Route exact path="/" element={ <Home/>}> </Route>
  <Route exact path="/login" element={ <Login/>}> </Route>
  <Route exact path="/register" element={ <Register/>}> </Route>
  <Route exact path="/logout" element={ <Logout/>}> </Route>
  <Route exact path="/home" element={ <Home/>}> </Route>
  <Route exact path="/createGame" element={ <CreateGame/>}> </Route>
  <Route exact path="/joinGame" element={ <JoinGame/>}> </Route>
  <Route path="/game" element={ <Game/>}> </Route>


  <Route path="*" element={<h1>Page not Found</h1>}></Route>
  </Routes>
  );
}

export default App;
