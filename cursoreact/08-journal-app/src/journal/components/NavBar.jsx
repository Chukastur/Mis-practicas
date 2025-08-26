import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { startLogOut } from "../../store";

export const NavBar = ({ drawerWidth = 300 }) => {

  const dispatch = useDispatch ();

  const onLogout = () => {
    dispatch ( startLogOut () ); 
  };
  

  return (
    <AppBar 
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${ drawerWidth }px)`},
        ml: { sm: `${drawerWidth}px` }
      }}
      >
      <Toolbar>
        <Grid  
          container 
          direction='row'
          alignItems='center'
          sx={{ width: '100%'}}
          >
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              edge='start'
              sx={{ mr:2, display: { sm: 'none' } }}
              >
              <MenuOutlined />
            </IconButton> 
          </Grid>  
          <Grid>
             <Typography variant="h6" noWrap component='div'>Journal App</Typography>
          </Grid> 
        </Grid>

        <Grid justifyContent='end'>
            <IconButton 
              onClick={ onLogout }
              color="error"
            >
              <LogoutOutlined />
            </IconButton>
        </Grid>      
      </Toolbar>

    </AppBar>
  );
};
