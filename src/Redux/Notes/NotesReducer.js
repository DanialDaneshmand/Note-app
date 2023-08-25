import {ADD_NOTE} from './NotesTypes'

const initialState = []

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE : {
      return [...state,{id:state.length+1,...action.payload}];
    }
    default:
      return state;
  }
};

export default noteReducer;
