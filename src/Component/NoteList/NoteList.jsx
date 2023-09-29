import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck, FaTrash } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { deleteNote, setCheck } from "../../Redux/Notes/NotesAction";

function NoteList() {
  return (
    <section className="flex flex-col items-center">
      <HeaderNoteList />
      <Notes />
    </section>
  );
}

export default NoteList;

function HeaderNoteList() {
  const notes = useSelector((state) => state);
  const completedNotes=notes.filter(n=>n.completed===true)
  return (
    <div className="text-slate-800 w-full flex justify-around pt-6">
      <p>
        All{" "}
        <span className="ml-1 text-sm  inline-block  px-2 rounded-full bg-slate-400 text-slate-800">
          {
            notes.length
          }
        </span>
      </p>
      <p>
        Completed{" "}
        <span className="ml-1 text-sm  inline-block  px-2 rounded-full bg-slate-400 text-slate-800">
          {completedNotes.length}
        </span>
      </p>
    </div>
  );
}

function Notes() {
  const notes = useSelector((state) => state);
  const dispatch=useDispatch()
  const options={
    year:'numeric',
    month:'long',
    day:'numeric'
  }
  
 return <>
 {
    notes.map((note) => (
      <div className="w-full bg-white p-4 mt-8 rounded-md">
        <div className="flex justify-between  border-b py-3">
          <div>
            <p className={`font-bold ${note.completed&& 'complete'}`}>{note.noteTitle}</p>
            <p className="text-sm text-gray-500">{note.noteDescription}</p>
          </div>
          <div className="flex gap-8 items-end">
            <button onClick={()=>dispatch(deleteNote(note))} className="text-red-600">
              <FaTrashCan />
            </button>
            <div onClick={()=>dispatch(setCheck(note))} className="text-green-600 w-5 h-5 rounded flex justify-center items-center border border-slate-600">
              {note.completed&&<FaCheck />}
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400">{new Date(new Date().toISOString()).toLocaleDateString("en-US",options)}</p>
        </div>
      </div>
    ))
  }
 </>
}
