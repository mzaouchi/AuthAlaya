import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Errors from './Components/Errors';

function App() {
  return (
    <div>
      <NavUser/>
      <Errors/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
