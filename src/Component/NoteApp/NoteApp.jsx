import React, { useState } from "react";
import Header from "../Header/Header";
import AddNotes from "../AddNotes/AddNotes";
import NoteList from "../NoteList/NoteList";
import { useSelector } from "react-redux";

function NoteApp() {
  const notes = useSelector((state) => state);
  return (
    <div className="w-8/12 ">
      <Header />
      <div className="grid grid-cols-2 ">
        <div>
          <AddNotes />
        </div>
        <div>
          {notes.length ? (
            <NoteList />
          ) : (
            <div className="w-full flex justify-center mt-8 ">
              <p className="text-xl font-bold text-slate-800">
                No Notes already has been added !
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoteApp;
