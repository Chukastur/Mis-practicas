import { types } from "../";


export const authReducer = ( state = {}, action ) => {      // Declaramos state como objeto vacio

    switch ( action.type ) {
        case types.login:
            return {
                ...state,                           // Aqui lo desestructuramos para obtener todas ss propiedades
                logged: true,
                user: action.payload
            };

        case types.logout:
            return {
                logged: false,
            };
    
        default:
            return state;
    }

}