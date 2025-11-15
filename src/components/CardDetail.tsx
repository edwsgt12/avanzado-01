type Props = {
ataque: number;
defensa: number;
descripcion : string;
imagen : string;
nombre : string;
numero: number;
tipo : string;
region?: string;
};


function CardDetail ({
ataque,
defensa,
descripcion,
imagen,
nombre,
numero,
tipo,
}: Props) {
    return (
        <div>
            <h3>
                {numero} (#{numero})
            </h3>
            <img src={imagen} alt={nombre}/>
            <p>tipo : {tipo}</p>
            <p>ataque : {ataque}</p>
            <p>defensa : {defensa}</p>
            <p>{descripcion}</p>
        </div>
    );     
}

export default CardDetail;