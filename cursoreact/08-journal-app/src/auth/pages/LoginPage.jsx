import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'; //importación con alias
import { Google } from "@mui/icons-material";
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: ''
};

export const LoginPage = () => {

  const dispatch = useDispatch ();

  const { status, errorMessage } = useSelector ( state => state.auth );

  const { email, password, onInputChange } = useForm ( formData );

  const isAuthenticating = useMemo ( () => status === 'checking', [ status ] );

  const onSubmit = ( event ) => { 
    event.preventDefault ()
    console.log({ email, password })
    dispatch ( startLoginWithEmailPassword ({ email, password }) );
  };

  const onGoogleSignIn = ( ) => {
    dispatch ( startGoogleSignIn ());
  };

  return (
    <AuthLayout title='Login'>
      
      <form 
        aria-label='submit-form'
        onSubmit={ onSubmit } 
        className='animate__animated animate__fadeIn animate__faster'
      >

        <Grid container direction='column'>

          <Grid size={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Correo' 
              type='email' 
              placeholder="correo@google.com"
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>

          <Grid size={ 12 } sx={{ mt: 2 }}>
            <TextField 
              label='Contraseña' 
              type='password' 
              placeholder="Contraseña"
              fullWidth 
              name='password'
              inputProps={{ 
                'data-testid':'password'
              }}
              value={ password }
              onChange={ onInputChange }

            />
          </Grid>
        </Grid>  
   
        <Grid container spacing={ 2 }  direction='row'>
          <Grid
            display={ !!errorMessage ? '' : 'none'} 
            size={ 12 } 
            sx={{ mt: 2 }}
          >              
            <Alert severity='error'>{ errorMessage }</Alert>
          </Grid>            
          <Grid size={ 6 } sx={{ mt: 2 }}>              
            <Button 
              disabled={ isAuthenticating }
              type='submit' 
              variant="contained" 
              fullWidth
            >
              Login
            </Button>
          </Grid>            
          
          <Grid size={ 6 } sx={{ mt: 2 }}>              
            <Button 
              onClick={ onGoogleSignIn } 
              disabled={ isAuthenticating }
              variant="contained" 
              aria-label='google-btn'
              fullWidth>
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography> 
            </Button>
          </Grid>
        </Grid>

        <Grid  container direction='row' justifyContent='end' sx={{ mt: 1 }}>
          <Grid>
            <Link component={ RouterLink } color="inherit" to='/auth/register'> 
              <small>Crear una cuenta</small> 
            </Link>
          </Grid>
        </Grid>        
    
      </form>

    </AuthLayout>

  );
};
