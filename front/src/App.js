import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { BsPencil, BsSearch } from "react-icons/bs";
import Input from "./Input";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  
  function handleSetIsToggle(val) {
    setIsToggle(val);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      Name: formData.get("Name"),
      salary: formData.get("salary"),
      rent: formData.get("rent"),
      groceries: formData.get("groceries"),
      electricityBill: formData.get("electricityBill"),
      waterBill: formData.get("waterBill"),
    };
    console.log(data); // You can send this data to your backend for further processing
    try {
      const response = await fetch('http://localhost:5000/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log('Data successfully submitted:', result);
      } else {
        console.error('Error submitting data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type={isToggle ? "search" : "text"}
          name="Name"
          required
          label="Name"
          
          leftIconBtn={<BsPencil />}
          
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="salary"
          required
          label="Salary"
          
          leftIconBtn={<BsPencil />}
          
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="rent"
          required
          label="Rent"
          
          leftIconBtn={<BsPencil />}
          
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="groceries"
          required
          label="Groceries"
          
          leftIconBtn={<BsPencil />}
          
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="electricityBill"
          required
          label="Electricity Bill"
          
          leftIconBtn={<BsPencil />}
         
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="waterBill"
          required
          label="Water Bill"
          
          leftIconBtn={<BsPencil />}
          
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
