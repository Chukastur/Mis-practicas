import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { DeleteOutlineOutlined, SaveOutlined, UploadOutlined } from "@mui/icons-material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from "../";
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store";


export const NoteView = () => {

  const dispatch = useDispatch ();

  const { active: note, messageSaved, isSaving } = useSelector ( state => state.journal );

  const { body, title, date, onInputChange, formState } = useForm ( note );

  const dateString = useMemo ( () => {
    const newDate = new Date ( date );
    return newDate.toLocaleString();
  },[date]);

  const fileInputRef = useRef ();

  useEffect(() => {
    if ( messageSaved ){
      Swal.fire ( 'Nota actualizada', messageSaved, 'success' );
    }
  }, [ messageSaved ]);
  
  
  const onSaveNote = () => {
    dispatch ( startSaveNote ( formState ) );
  };

  const onFileInputChange = ({ target }) => {
    if ( target.files === 0 ) return;

    dispatch ( startUploadingFiles ( target.files ) );
  };

  const onDelete = () => {
    dispatch ( startDeletingNote () );
  };

  return (
    <Grid container direction='column' >

      <Grid 
        className='animate__animated animate__fadeIn animate__faster'
        container direction='row' 
        justifyContent='space-between' 
        alignItems='center'
        sx={{ mb: 1}}
      >

        <Grid>
          <Typography fontSize={ 39 } fontWeight='lighten'>{ dateString }</Typography>
        </Grid>
        <Grid>
          <input 
            type="file"
            ref={ fileInputRef}
            multiple
            onChange={ onFileInputChange }
            style={{ display: 'none' }}
          />
          <IconButton
            color="primary"
            disabled={ isSaving }
            onClick={ () => fileInputRef.current.click () }
          > 
            <UploadOutlined />
          </IconButton>

        </Grid>
       
          
        <Grid size={ 2 } direction='row'>
          <Button 
          disabled={ isSaving }
          onClick={ onSaveNote}
          sx={{ color: 'primary', padding: 2 }} 
          fullWidth
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }}/>
            Guardar
          </Button>
        </Grid>
      </Grid>

      <Grid >
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          id="titleInput"
          name="title"
          sx={{ border: 'none', mb: 1}}
          value={ title }
          onChange={ onInputChange }

        />
      </Grid>

      <Grid>
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          rows={8}
          placeholder="¿Que sucedió en el dia de hoy?"
          id="descInput"
          name="body"
          sx={{border: 'none', mb: 1}}
          value={ body }
          onChange={ onInputChange }
        />
      </Grid>
      <Grid container justifyContent='end'>
        <Button
          onClick={ onDelete }
          color="error"
        >
          <DeleteOutlineOutlined />
        </Button>

      </Grid>

      {/* Image Gallery */}

      <ImageGallery images={ note.imageUrls }/>


    </Grid>


  );
};
