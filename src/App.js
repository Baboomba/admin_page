import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import LogIn from './pages/login/LogIn';
import Profile from './pages/profile/Profile';

function App() {
  return (
    <Routes>
      <Route path = '/' element={ <Home/> }/>
      <Route path = '/login' element={ <LogIn/> }/>
      <Route path = '/profile' element={ <Profile/> }/>
    </Routes>
  );
}

export default App;