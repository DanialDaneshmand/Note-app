import React, { useState } from "react";
import Header from "../Header/Header";
import AddNotes from "../AddNotes/AddNotes";
import { useSelector } from "react-redux";

function NoteApp() {
  const notes = useSelector((state) => state);
  console.log(notes)
  return (
    <div className="w-8/12">
      <Header />
      <div className="grid grid-cols-2">
        <div>
          <AddNotes />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default NoteApp;
