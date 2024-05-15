import {Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from '..//src/components/LearnerComponent/Navbar';
import RegisterView from './View/RegisterView';
import NavbarView from './View/NavbarView';
import Course from './components/LearnerComponent/Course';
import Avatar from '@mui/material/Avatar'



function App() {
  
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<RegisterView/>}/>
        <Route path="/Navbar" element={<NavbarView/>}/>
        <Route path="/Course" element={<Course/>}/>
        </Routes>   
          
    </div>
  );

}

export default App;
