import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


function Categories() {
    const [data, setData] = useState([]);
       
          useEffect(()=>{
           fetch('http://localhost:5000/categorys',{
              method:"GET",
              headers:{
                  'Content-type':'application/json'
              }
            })
            .then(response => response.json())
            .then(dat => setData(dat))
            .catch(error => console.error(error))
        },[])

        const deleteFunc = async(event) => {
          event.preventDefault();
          const respons=await fetch('http://localhost:5000/deleteCategorys/:id',{
              method:"DELETE",
              headers:{
                  'Content-type':'application/json'
              }
          })
          const data = await respons.json()
          console.log(data);
          if (data !== null) {
            alert("Jnjvel e")
            // name="";
        }
        };
         const  myList =  data.map((dat)=>
         <div key={dat.id}>
               <h2 >Name:  {dat.name}</h2>
               <button onClick={deleteFunc}>Delete</button>
               <button>Edit</button>
         </div>)
            

        return (
          <div>
            <Link to='/addCategories'>
                <button>Add Categories</button>
            </Link>
             {myList}
          </div>
        )
      }


export default Categories;