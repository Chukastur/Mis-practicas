import isValidProp from 'react-props-check';

export const FirstApp = ( { 
    title = 'Hola Mundo', 
    subTitle = 'Soy Fernando', 
    name = 'Fernando Lopez' 
} ) => {

    if (!isValidProp('title') || typeof title !== 'string') {
        console.error("El prop 'title' debe ser un string y es requerido.");
    }

    if (typeof subTitle !== 'string') {
        console.error("El prop 'subtitle' debe ser un string.");
    };
    
    return (
        <>
        <h1 data-testid = "test-title"> { title } </h1>
        <p>{ subTitle }</p>
        <p>{ name }</p>
        </>
    );
};
