import React from "react";
import PersonImg from '../../assets/person.png'
const Navbar = () => {
  
  return (
    <div className="flex justify-between font-sans">
      <div>brand</div>
      <div>menu</div>
      <div>7</div>
      <img src={PersonImg} alt="person" />
    </div>
  );
};

export default Navbar;
