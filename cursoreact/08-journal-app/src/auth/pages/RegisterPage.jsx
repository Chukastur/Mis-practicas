import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom'; 
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material";
import { AuthLayout } from '../';
import { startCreatingUserWithEmailPassword } from '../../store';
import { useForm } from '../../hooks';


const formData ={
  email: '',
  password: '',
  displayName: ''
}; 

const formValidations = {
  email:[ (value) => value.includes ( '@' ), 'El correo debe de taner una @' ],
  password:[ (value) => value.length >= 6, 'El password debe contener mas de 6 carácteres' ],
  displayName:[ (value) => value.length >= 1, 'El nombre es obligatorio' ],  
};

export const RegisterPage = () => {

  const dispatch =  useDispatch ();

  const [ formSubmitted, setFormSubmitted ] = useState ( false );

  const { status, errorMessage } = useSelector ( state => state.auth);
  const isCheckingAuthentication = useMemo ( () => status === 'checking', [ status ] );

  const { 
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid, 
  } = useForm ( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault ();
    setFormSubmitted ( true );
    if ( !isFormValid )return;
    dispatch ( startCreatingUserWithEmailPassword ( formState ) )
  };
  

  return (
    <AuthLayout title='Register'>

      <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'> 

        <Grid container direction='column'>

          <Grid size={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Nombre completo' 
              type='text' 
              placeholder="Nombre y apellidos"
              fullWidth
              name='displayName'
              value= { displayName }
              onChange= { onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid size={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Correo' 
              type='email' 
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value= { email }
              onChange= { onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }

            />
          </Grid>

          <Grid size={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Contraseña' 
              type='password' 
              placeholder="Contraseña"
              fullWidth 
              name='password'
              value= { password }
              onChange= { onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }

            />
          </Grid>
        </Grid>

        <Grid container spacing={ 2 }  >
          <Grid
            display={ !!errorMessage ? '' : 'none'} 
            size={ 12 } 
            sx={{ mt: 2 }}
          >              
            <Alert severity='error'>{ errorMessage }</Alert>
          </Grid>            
          <Grid size={ 12 } sx={{ mt: 2 }}>              
            <Button 
              disabled={ isCheckingAuthentication }
              type='submit' 
              variant="contained" 
              fullWidth>
              Crear cuenta
            </Button>
          </Grid>            
        </Grid>
                
        <Grid container size={ 12 } direction='row' justifyContent='flex-end' sx={{ mt: 1 }} >
          <Grid>
            <Typography sx={{ mr: 1 }}><small>¿Ya tienes cuenta?</small></Typography>
          </Grid>
          <Grid>
            <Link component={ RouterLink } color="inherit" to='/auth/login'> 
              <small>Ingresar</small> 
            </Link>             
          </Grid>
        </Grid>        
    
      </form>

    </AuthLayout>

  );
};
