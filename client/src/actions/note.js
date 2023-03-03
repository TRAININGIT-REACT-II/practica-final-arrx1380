import types from "./types";
import moment from "moment/moment";

export const createNoteAction = (note) => ({
  type: types.CREATE_NOTE,
  id: note.id,
  title: note.title,
  note: note.note,
  created: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
  updated: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
});

export const updateNoteAction = (note) => ({
  type: types.UPDATE_NOTE,
  id: note.id,
  title: note.title,
  note: note.note,
  created: note.created,
  updated: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
});

export const deleteNoteAction = (id) => ({
  type: types.DELETE_NOTE,
  id,
});

export const clearNotesAction = () => ({
  type: types.CLEAR_NOTES,
});
