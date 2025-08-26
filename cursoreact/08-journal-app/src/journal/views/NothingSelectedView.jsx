import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid 
      className='animate__animated animate__fadeIn animate__faster'
      container
      spacing={ 0 }
      direction='column'
      alignItems='center'
      justifyContent='center'  // Calcula el 100% del viewheight - 110 px
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}                   
    >  
      <Grid            
        alignItems='center'
        justifyContent='center' 
      >
        <StarOutline sx={{ fontSize: 100, color: 'white' }}/>

      </Grid>

      <Grid>
        <Typography color="white" variant="h5" >Selecciona o crea una entrada</Typography>
      </Grid>

    </Grid> 

  );
};
 