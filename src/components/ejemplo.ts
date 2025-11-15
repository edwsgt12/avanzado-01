type Persona = {
    nombre : string;
    apellido : string;
    edad : number;
    cedula : string;
    telefonos? : string[];
}

const familia : Persona[] =[{
    nombre : "leo",
    apellido : "Viana",
    edad : 12,
    cedula : "32.347.377",
    telefonos: ["04125316194"]
}, {
    nombre : "Sebastian",
    apellido : "Garcia",
    edad : 19,
    cedula : "29.454.123",
}, {
    nombre : "Edward",
    apellido : "Martinez",
    edad : 15,
    cedula : "33.347.098",
}];