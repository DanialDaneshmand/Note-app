import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "lastest", label: "Sort base on lastest" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function Header() {
  const [selectedOption, setSelectedOption] = useState({
    value: "lastest",
    label: "Sort base on lastest",
  });
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <section className="text-slate-800 border-b border-slate-300 flex justify-center gap-32 pb-8 pt-16">
      <p className="text-4xl font-bold">My Notes-4</p>
      <Select
        className="rounded-xl w-64"
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </section>
  );
}

export default Header;