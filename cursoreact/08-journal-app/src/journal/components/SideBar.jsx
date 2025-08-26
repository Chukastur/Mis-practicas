import { useSelector } from "react-redux";
import { Box, Divider, Drawer, Grid, List, Toolbar, Typography } from "@mui/material";
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({ drawerWidth = 300 }) => {


  const { displayName } = useSelector ( ( state ) => state.auth );
  const { notes } = useSelector ( ( state ) => state.journal );


  return (

    <Box
      component='nav'
      sx={{ width:drawerWidth, flexShrink:0 }}      
    >
      <Drawer
        variant="permanent"
        open
        sx={{ 
          display: { xs: 'none', sm: 'block' },          
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth  }
        }}
      >
        <Toolbar>
            <Grid>
              <Typography variant="h6" noWrap component='div'>
                { displayName }
              </Typography>      
            </Grid>
        </Toolbar>
        <Divider />

        <List>
          {
            notes.map( note => (
              <SideBarItem 
                key={ note.id } { ...note }                        
              />
            ))
          }
        </List>

      </Drawer>

    </Box>
    
  );      
}; 
