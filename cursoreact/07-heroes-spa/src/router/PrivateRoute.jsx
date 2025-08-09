import { Navigate, useLocation } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../auth"


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext ( AuthContext );  // Obtenemos el estado de logged 
    const { pathname, search } = useLocation ();    // Usamos useLocation para tomar las propiedades 
                                                    // pathname y search (en caso de que sea una busqueda)
    const lastPath = pathname + search ;            // creamos el url completo 
    localStorage.setItem ( 'lastpath', lastPath );  // Lo almacenamos en localStorage
 

    return (logged)                 // Usamos logged de condicional 
        ? children                  // si hay login, retorna children
        :<Navigate to="/login"/>    // si no, navega a la pagina de login

};
