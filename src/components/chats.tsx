type Props = {
    nombre: string;
    imagen: string;
    mensajesNoLeidos: number;
    ultimoMensaje: string;
    fecha: string;
}

const ChatItem = ({
    fecha,
    imagen,
    nombre,
    mensajesNoLeidos,
    ultimoMensaje
}:Props)=>{
    
    return(<div>
    {nombre},
    <img src={imagen} alt="" />,
    {mensajesNoLeidos},
    {ultimoMensaje},
    {fecha}
    </div>)
}

export default ChatItem