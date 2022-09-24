class Usuario {
    nombre;
    apellido;
    libros;
    mascotas;

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    mostrar(){
        console.log(this)
        console.log(this.libros)
    }

    countMascota(){
        let cantMascota = this.mascotas.length
        return cantMascota
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }

    addBook(titulo,autor){        
        this.libros.push({titulo,autor})
    }

    getFullName(){
        let usuarioNombre = this.nombre
        let usuarioApellido = this.apellido
        // console.log('Nombre',usuarioNombre + ' ' + usuarioApellido)
        return(usuarioNombre + ' ' + usuarioApellido)
    }
    
    getBookName(){
        let arrayTitulos = this.libros.map((miObjeto)=> miObjeto.titulo)
        console.log('Titulos',arrayTitulos)
        
    }

    getMascotaName(){
        
    }

}

const usuario1 = new Usuario('Emanuel','Mangani')

usuario1.addBook('Harry Poter','JK Rollin')
usuario1.addBook('Lord of the ring', 'Tolkins')
usuario1.addMascota('Lara')
usuario1.addMascota('Tomy')
usuario1.addMascota('Rey')


console.log(usuario1)
usuario1.getBookName()
// usuario1.getFullName()

console.log('Nombre completo:',usuario1.getFullName())
console.log('Cantidad de mascotas:',usuario1.countMascota())


