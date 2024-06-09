import React, { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { BsPencil, BsSearch } from "react-icons/bs";
import Input from "./Input";

function App() {
  const [isToggle, setIsToggle] = useState(false);
  function handleSetIsToggle(val) {
    setIsToggle(val);
  }

  const handleSubmit = (event) => {
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Input
          type={isToggle ? "search" : "text"}
          name="Name"
          required
          label="Name"
          toggleIconBtn={<BsSearch />}
          leftIconBtn={<BsPencil />}
          rightIconBtn={<RiAddLine />}
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="salary"
          required
          label="Salary"
          toggleIconBtn={<BsSearch />}
          leftIconBtn={<BsPencil />}
          rightIconBtn={<RiAddLine />}
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="rent"
          required
          label="Rent"
          toggleIconBtn={<BsSearch />}
          leftIconBtn={<BsPencil />}
          rightIconBtn={<RiAddLine />}
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="groceries"
          required
          label="Groceries"
          toggleIconBtn={<BsSearch />}
          leftIconBtn={<BsPencil />}
          rightIconBtn={<RiAddLine />}
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="electricityBill"
          required
          label="Electricity Bill"
          toggleIconBtn={<BsSearch />}
          leftIconBtn={<BsPencil />}
          rightIconBtn={<RiAddLine />}
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <Input
          type={isToggle ? "search" : "text"}
          name="waterBill"
          required
          label="Water Bill"
          toggleIconBtn={<BsSearch />}
          leftIconBtn={<BsPencil />}
          rightIconBtn={<RiAddLine />}
          isToggle={isToggle}
          handleSetIsToggle={handleSetIsToggle}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
