import React from 'react';
import { useState } from 'react';

function AddProducts() {
        const [name, setName] = useState('');
        const [description, setDescription] = useState('');
        const [price, setPrice] = useState('');

        const handleNameChange = (event) => {
            setName(event.target.value);
        };
        const handleDescriptionChange = (event) => {
            setDescription(event.target.value);
        };
        const handlePriceChange = (event) => {
            setPrice(event.target.value);
        };


        const handleSubmit = async(event) => {
          event.preventDefault();
          console.log(name,description,price);
          
          const respons=await fetch('http://localhost:5000/products',{
              method:"POST",
              headers:{
                  'Content-type':'application/json'
              },
              body:JSON.stringify({
                  name,
                  description,
                  price

              }) 
          })
          const data = await respons.json()
          console.log(data);
          if (data !== null) {
            alert("Hajoxutyamb avelacvel e")
            // name="";
        }
        };
        return (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
              Description:
              <input type="text" value={description} onChange={handleDescriptionChange} />
            </label>
            <label>
              Price:
              <input type="text" value={price} onChange={handlePriceChange} />
            </label>
            <button type="submit">Add Products</button>
          </form>
        );
      }


export default AddProducts;