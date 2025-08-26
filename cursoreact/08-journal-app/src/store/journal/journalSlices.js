import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({

  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    // active:{
    //   id: 'ABC123',
    //   tittle:'',
    //   body:'',
    //   date: 1234567,
    //   imageUrls: [], // https://foto1.jpg https://foto2.jpg https://foto3.jpg
    // }
  },
  
  reducers: {
    savingNewNote: ( state ) => {
      state.isSaving = true;
      state.messageSaved = '';

    },
    addNewEmptyNote: ( state, action ) => {
      state.notes.push ( action.payload );
      state.isSaving = false;
      state.messageSaved = '';
      state.active = action.payload;

    },
    setActiveNote: ( state, action ) => {
      state.active = action.payload;
    },
    setNotes: ( state, action ) => {
      state.notes = ( action.payload); 
 
    },
    setSaving: ( state ) => {
      state.isSaving = true;
      state.messageSaved = ''; // ← Limpiar mensaje anterior
      //TODO: mensaje de error      
    },
    updateNote: ( state, action ) => {
      state.isSaving = false;
      state.notes = state.notes.map( note => {
        if( note.id === action.payload.id ) {
          return action.payload; // Reemplaza la nota con la versión actualizada
        }
        return note; // Mantiene las otras notas sin cambios
      });

      state.messageSaved = `${ action.payload.title } actualizada correctamente`;

    },
    setPhotosToActiveNote: ( state, action ) => {
      if (!state.active.imageUrls) {
        state.active.imageUrls = [];
      }
      state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload  ];
      state.isSaving = false;
    },    
    clearNotesLogout: ( state ) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;
    },
    deleteNoteById: ( state, action ) => {
      state.active = null;
      state.notes = state.notes.filter ( note => note.id !== action.payload );
    },
  }
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  deleteNoteById,
  clearNotesLogout,
} = journalSlice.actions;