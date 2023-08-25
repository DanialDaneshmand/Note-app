import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../Redux/Notes/NotesAction";

function AddNotes() {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    noteTitle: "",
    noteDescription: "",
  });
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    if(!note.noteDescription&&!note.noteTitle) {
      return alert('fill all inputs!')
    }
    e.preventDefault();
    dispatch(addNote(note));
    setNote({
      noteTitle: "",
      noteDescription: "",
    });
  };
  return (
    <section className="mt-8">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-bold">Add New Note</p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            className="mt-8 p-2 rounded-md outline-none"
            placeholder="note title ..."
            onChange={handleChange}
            name="noteTitle"
            value={note.noteTitle}
          />
          <input
            type="text"
            className="mt-4 p-2 rounded-md outline-none"
            placeholder="note description ..."
            onChange={handleChange}
            name="noteDescription"
            value={note.noteDescription}
          />
          <button
            type="submit"
            className="w-full rounded-md mt-8 p-2 bg-blue-700 text-white"
          >
            Add New Note
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddNotes;
