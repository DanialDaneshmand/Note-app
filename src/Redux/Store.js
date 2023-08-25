import { createStore } from "redux";
import noteReducer from './Notes/NotesReducer'


const store = createStore(noteReducer);

export default store;
