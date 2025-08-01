

export const todoReducer = ( initialState = [], action ) => {  // El reducer recibe dos argumentos: - initialState (por defecto un array vacío [])
                                            // - action: un objeto que contiene el tipo de acción y cualquier dato adicional necesario para actualizar el estado           
    switch (action.type) {                  // Inicia un switch sobre action.type (Decide qué hacer según el tipo de acción)
        case '[TODO] Add Todo':             // Si el tipo de acción es '[TODO] Add Todo'(definida en TodoApp.jsx) , se agrega un nuevo todo al estado
            return [                        // Retorna un NUEVO arreglo
                ...initialState,            // Copia los elementos actuales del estado
                action.payload              // Agrega el nuevo TODO (que está en action.payload)
            ]

        default:                            // Si no hay coincidencia con ningún caso, retorna el estado inicial
            return initialState;
    }
};

