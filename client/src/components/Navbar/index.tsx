import React from "react";
import Person from '../../assets/person.png'
const Navbar = () => {
  
  return (
    <div className="flex justify-between font-sans">
      <div>brand</div>
      <div>menu</div>
      <div>7983613144</div>
      <img src={Person} alt="person" />
    </div>
  );
};

export default Navbar;
