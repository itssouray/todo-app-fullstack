import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import NavBar from './Component/NavBar';
import Dashboard from './Component/Dashboard';
import All from './Component/All';
import Active from './Component/Active';
import Completed from './Component/Completed';
import Add from './Component/Add';
import Project from './Component/Project';
import Personal from './Component/Personal';
import Metting from './Component/Metting';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Dashboard/>}>
            <Route path='/all' element={<All/>}></Route>
            <Route path='active' element={<Active/>}></Route>
            <Route path='completed' element={<Completed/>}></Route>
          </Route>
          <Route path='add' element={<Add/>}></Route>
          <Route path='project' element={<Project/>}></Route>
          <Route path='metting' element={<Metting/>}></Route>
          <Route path='personal' element={<Personal/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
