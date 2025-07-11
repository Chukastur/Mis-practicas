
const newMessage ={
    message: 'Hola Mundo',
    title: 'Fernando'
};

const saludo = () => {
const texto = newMessage.message
return texto
}

export const MyFirstApp = () => {
    
    return (
        <>
        <h1>{ saludo () }</h1>
        {/* {<code> { JSON.stringify ( newMessage ) } </code>} */}
        <p>Soy un subtitulo</p>
        </>
    )
}