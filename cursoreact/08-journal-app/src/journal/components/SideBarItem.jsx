import { useMemo } from "react";
import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store";


export const SideBarItem = ({ title = '', body, id, date, imageUrls = [] }) => {
  
  const dispatch = useDispatch ();

  const onClickNote = () => {
    dispatch ( setActiveNote ({ title, body, id, date, imageUrls }));
  };

  const newTitle = useMemo (() => {    //Añade '...' y elimina todo lo que pase de 17 caracteres
    return title.length > 17
      ? title.substring (0,17) + '...'  
      : title;
  },[ title])


  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ onClickNote }>
          <ListItemIcon>
            <TurnedInNot />
          </ListItemIcon>
          <Grid 
            container
          >
            <ListItemText primary={ newTitle }/>
            <ListItemText secondary={ body }/>
          </Grid>
        </ListItemButton>
    </ListItem>

  )
}
