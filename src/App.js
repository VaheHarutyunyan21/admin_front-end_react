//import {Header  } from "./Header";
import { Register } from "./Register";
import {Login  } from "./Login";
import AdminHome from "./AdminHom.js"
import  Products  from "./Products";
import Categories from "./Categories";
import AddCategories from "./AddCategories";
import AddProducts from "./AddProducts";

import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        {/* <Header /> */}
        <Routes >
            <Route path='/' element= {<Register/>}/>
            <Route path='/login' element= {<Login/>}/>
            <Route path='/admin' element={<AdminHome />  }/>
            <Route path='/products' element= {<Products/>}/>
            <Route path='/categories' element= {<Categories/>}/>
            <Route path='/addCategories' element= {<AddCategories/>}/>
            <Route path='/addProducts' element= {<AddProducts/>}/>
        </Routes>


    </div>
  );
}

export default App;
