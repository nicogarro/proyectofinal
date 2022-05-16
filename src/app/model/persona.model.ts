export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    email: String;

    constructor(nombre: String, apellido: String, img: String , email:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.email = email;
    }
}
