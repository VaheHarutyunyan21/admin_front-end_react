//import {Header  } from "./Header";
import {Login  } from "./Login";
import AdminHome from "./AdminHom.js"
import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/* <Header /> */}
        
        <Routes >
            <Route path='/login' element= {<Login/>}/>
            <Route path='/admin' element={<AdminHome />  }/>
        </Routes>


    </div>
  );
}

export default App;
