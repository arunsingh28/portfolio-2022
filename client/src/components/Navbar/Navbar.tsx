import React from "react";
// import PersonImg from '../../assets/person.png'

const Navbar = () => {
  return (
    <div className="md:flex justify-between font-sans items-center ">
      <div>꧁༒
        <span className="text-xl font-bold">Arun</span>
        ༒꧂</div>
      <div className="w-1/2">
        <ul className="flex justify-around items-center">
          <li>SERVICE</li>
          <li>WORK</li>
          <li>NOTES</li>
          <li>EXPERIENCE</li>
        </ul>
      </div>
      <div>
        <button className="border border-white px-5 py-2 rounded-md">Hire me</button>
      </div>
    </div>
  );
};

export default Navbar;
