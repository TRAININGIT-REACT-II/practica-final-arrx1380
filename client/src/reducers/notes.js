// Importamos los tipos de acciones
import types from "../actions/types";

const initialState = { notes: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_NOTE:
      return {
        notes: [...state.notes, { ...action }],
      };
    case types.UPDATE_NOTE:
      const note = state.notes.filter((n) => n.id == action.id)[0];
      note.title = action.title;
      note.note = action.note;
      note.updated = action.updated;

      return {
        notes: [
          ...state.notes.filter((n) => n.id != action.id),
          {
            ...note,
          },
        ],
      };
    case types.DELETE_NOTE:
      return {
        notes: [...state.notes.filter((n) => n.id != action.id)],
      };
    default:
      return state;
  }
};

export default reducer;
