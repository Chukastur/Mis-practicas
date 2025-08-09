import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState ={ 
    logged: false,
};

const init = () => {    // Funicion de iniciaización para el reducer
    const user = JSON.parse (localStorage.getItem ( 'user' ))// Obtiene el usuario de localStorage y lo parsea de JSON

    return {
        logged: !!user, // Doble negación: convierte a booleano verdadero si user existe
        user: user      // Asigna el usuario al estado si existe
    };
};

export const AuthProvider = ({ children }) => {     // Proveedor de contexto para autenticación

    const [ authState, dispatch ] = useReducer ( authReducer, initialState, init );// useReducer con reducer, estado inicial y función de inicialización

    const login = ( name = '') => {   // Función de login

        const user = { id: 'ABC', name };

        const action = { type: types.login, payload: user };       
            // Tipo de acción para el reducer (asumiendo types importado) // Payload con el usuario
        localStorage.setItem ('user', JSON.stringify ( user )); // Almacena el usuario en localStorage como JSON

        dispatch ( action );     // Despacha la acción al reducer
    };

    const logout = () => {      // Función de logout
        
        localStorage.removeItem( 'user' ); // Borra el usuario del local Storage
        const action = { type: types.logout };  // Tipo de acción para el reducer

        dispatch ( action );             // Despacha la acción al reducer

    };



    return (
        <AuthContext.Provider value={{
            ...authState,               // Mandamos a AuthContext todas las propiedades de authState
            login,                      // Mandamos las funiones login y logout
            logout                     
        }}>
            { children }
        </AuthContext.Provider>
    );
}; 
 