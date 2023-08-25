import { ADD_NOTE, DELETE_NOTE } from "./NotesTypes"


export const addNote=(note)=>{
    return {
        type:ADD_NOTE,
        payload:note
    }
}

export const deleteNote=(note)=>{
    return {
        type:DELETE_NOTE,
        payload:note
    }
}