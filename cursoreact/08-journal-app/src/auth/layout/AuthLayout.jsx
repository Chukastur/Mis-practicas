import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {   // Desestructuramos los children
  return (
    <Grid 
      container
      size={ 8 }
      spacing={ 0 }
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}  
      >
        <Grid   
          className='box-shadow'
          size={ 8 }
          sx={{ 
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2 }}
          >
          <Typography variant="h5" sx={{ mb:1 }}>{ title }</Typography>
          {/* Lo colocamos en el fin del código común */}
          { children }      

        </Grid>

    </Grid>
  );
};
