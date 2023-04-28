import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


function Products() {
    const [data, setData] = useState([]);
       
          useEffect(()=>{
           fetch('http://localhost:5000/products',{
              method:"GET",
              headers:{
                  'Content-type':'application/json'
              }
            })
            .then(response => response.json())
            .then(dat => setData(dat))
            .catch(error => console.error(error))
        },[])
           

         const  myList =  data.map((dat)=>
         <div key={dat.id}>
               <h2 >Name:  {dat.name}</h2>
               <h2 >Description:  {dat.description}</h2>
               <h2 >Price:  {dat.price}</h2>
         </div>)
            

        return (
          <div>
            <Link to='/addProducts'>
                <button>Add Products</button>
            </Link>
             {myList}
          </div>
        )
      }


export default Products;