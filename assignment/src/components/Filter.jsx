import Dropdown from "./Dropdown";
import { useState } from "react";

const Filter = ({ buttonname, dropdownContent }) => {
  const [dropdownshow, setDropdownshow] = useState(false);

  const dropdown = () => {
    setDropdownshow(() => !dropdownshow);
  };

  return (
    <>
      <button
        className="bg-red-200 px-2 m-2 border border-black rounded"
        onClick={dropdown}
      >
        <span className="material-symbols-outlined mx-1 text-sm">filter_list</span>
        {buttonname}
      </button>
      {dropdownshow && <Dropdown dropdownContent={dropdownContent} />}
    </>
  );
};

export default Filter;
