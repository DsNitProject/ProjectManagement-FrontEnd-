import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import RegisterPage from './Register';
import LoginPage from './LoginPage';
import ProfilePage from './profile'
import ProjectsPage from './project';
import Task from './task'
export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/project' element={<ProjectsPage/>}/>
        <Route path='/task' element={<Task/>}/>
      </Routes>
    </Router>
  );
}

