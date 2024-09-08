import { Link } from "react-router-dom";
import Navbar_DropDown from "./Navbar_DropDown";
import { useState } from "react";

const Navbar = () => {
  const [DropDown, setDropDown] = useState(false);

  return (
    <>
      <div className="w-full flex justify-between items-center border-2 border-navy-blue p-2">
        <img
          className="h-16 ml-12"
          src="./assets/icons/START_nuremberg_blue.svg"
          alt="START_logo"
        />
        <button onClick={() => setDropDown(!DropDown)}>
          <img
            className="h-8 w-8 mr-16"
            src="./assets/icons/PLACEHOLDER_Profile.png"
            alt="Profile_Placeholder"
          />
        </button>
      </div>
      {DropDown ? <Navbar_DropDown /> : null}
    </>
  );
};

export default Navbar;
