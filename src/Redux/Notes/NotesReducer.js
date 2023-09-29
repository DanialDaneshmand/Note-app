import { ADD_NOTE, DELETE_NOTE, SET_CHECK, SORT_NOTES } from "./NotesTypes";
import _ from "lodash";

const initialState = [];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return [
        ...state,
        { id: state.length + 1, completed: false, ...action.payload },
      ];
    }
    case DELETE_NOTE: {
      const updatedNotes = state.filter((n) => n.id !== action.payload.id);
      return updatedNotes;
    }
    case SET_CHECK: {
      const index = state.findIndex((n) => n.id === action.payload.id);
      const updatedNotes = [...state];
      const updatedNote = { ...state[index] };
      updatedNote.completed = !updatedNote.completed;
      updatedNotes[index] = updatedNote;
      return updatedNotes;
    }
    case SORT_NOTES: {
      if (action.payload === "completed") {
        const updatedNotes = _.orderBy(state, "completed", "desc");
        return updatedNotes;
      }
      if (action.payload === "uncompleted") {
        const updatedNotes = _.orderBy(state, "completed", "asc");
        return updatedNotes;
      } 
    }
    default:
      return state;
  }
};

export default noteReducer;
