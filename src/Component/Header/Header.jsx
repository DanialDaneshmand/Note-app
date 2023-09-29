import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { sortNotes } from "../../Redux/Notes/NotesAction";

const options = [
  { value: "default", label: "Default" },
  { value: "completed", label: "Completed" },
  { value: "uncompleted", label: "UnCompleted" },
];

function Header() {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);
  const [selectedOption, setSelectedOption] = useState({
    value: "default",
    label: "Default",
  });
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    dispatch(sortNotes(selectedOption.value));
  };
  return (
    <section className="text-slate-800 border-b border-slate-300 flex justify-center gap-32 pb-8 pt-16">
      <p className="text-4xl font-bold">{`My Notes (${notes.length})`}</p>
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
