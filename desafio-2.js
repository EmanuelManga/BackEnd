const fs = require('fs');
const path = require('path');
const ruta = path.resolve(__dirname, './productos.txt')


class Contenedor {
    productos
    

        constructor(){
            this.productos = []
            
        }

        

        save(titulo,precio,thubnail){  
            let arrayFromTxt = lecturaSync()
            let id 

            if (!arrayFromTxt) {
                id = 1
            } 
            else{
                id = arrayFromTxt[arrayFromTxt.length-1].id + 1
                this.productos = arrayFromTxt
            }

            this.productos.push({titulo,precio,thubnail,id})
            
            
            escribirSync(this.productos)

        }

    }

    const lecturaSync = () =>{
        try{
            return JSON.parse(fs.readFileSync(ruta,'utf-8')) 
        }
        catch(err){
            console.log("Error en la lectura")
        }
    }

    const escribirSync = (array) =>{
        let data = JSON.stringify(array);
        try{
            fs.writeFileSync(ruta,data);
        }
        catch(err){
            console.log('Error en la Escritura')
        }
    }

    const mostrar = () =>{
        console.log(lecturaSync())
    }

    const mostrarEspecifico = (aVer) =>{
        console.log(aVer)
    }

    const getById = (idToFind) =>{
        let arrayToLookIn = lecturaSync()
        let product = arrayToLookIn.find(arrayProductos => arrayProductos.id === idToFind)
        console.log('Busqueda por ID')
        if(product){
            // console.log(product)
            return product
        }
        else{
            product=null
            console.log('No existe un producto con ese ID')
            // console.log(product)
            return product
        }
    }


    const getAll = () => {
        return lecturaSync()
    } 

    const deleteAll = () =>{
        try{
            fs.unlinkSync(ruta);
        }
        catch(err){
            console.log('Error al borrar')
        }
    }

    const deleteById = (idToFind) =>{
        let arrayToLookIn = lecturaSync()
        let productIndex = arrayToLookIn.findIndex(arrayProductos => arrayProductos.id === idToFind)
        if(productIndex != -1){
            arrayToLookIn.splice( productIndex, 1 );
            // console.log(arrayToLookIn)
            // console.log(productIndex)
        }
        else{
            productIndex = false
        }
        if(productIndex){
            console.log(`Se a eliminado el Objeto con ID: ${idToFind}`)
            escribirSync(arrayToLookIn)
        }
        else{
            console.log(`No existe un producto con el ID: ${idToFind}`)
        }
    }


    const producto = new Contenedor()


    // Agregar productos 

    // producto.save('Titanic',68.6,'https://img.gruporeforma.com/imagenes/630x945/4/854/3853436.jpg')
    // producto.save('El Resplandor',23,'https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg')
    // producto.save('IT',120,'https://pics.filmaffinity.com/It-787119144-large.jpg')



    // Funciones y como llamarlas

    // mostrar()

    // Funcion mostrarEspecifico Muestra las funciones que retornan algun valor u objeto 

    // mostrarEspecifico(getById(2))
    // mostrarEspecifico(lecturaSync())
    // mostrarEspecifico(getAll())

    // deleteAll()
    // deleteById(6)

    
