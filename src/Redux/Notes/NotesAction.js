import { ADD_NOTE, DELETE_NOTE, SET_CHECK,  SORT_NOTES } from "./NotesTypes"


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

export const setCheck=(note)=>{
    return {
        type:SET_CHECK,
        payload:note
    }
}

export const sortNotes=(note)=>{
    return {
        type:SORT_NOTES,
        payload:note
    }
}