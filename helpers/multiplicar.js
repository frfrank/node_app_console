

const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');

const crearArchivo = async (base = 5, listar= false, hasta=10) =>  {

    try {    
        
        let salida = '';
        
        for(let i= 1; i<=hasta; i++){
            salida += `${base} x ${i} = ${5 * i}\n`;
        }

        if(listar === true){
            console.log("-----------------------");
            console.log(`tabla del ${base}`.green);    
            console.log("-----------------------");
            console.log(salida);       
            
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);  
        
        return `tabla-${base}.txt`.green;
     
    } catch (error) {
        throw error;
    }
  /*   return new Promise((resolve, reject)=>{
        console.log("-----------------------");
        console.log(`tabla del ${base}`);    
        console.log("-----------------------");
        
        let salida = '';
        
        for(let i= 1; i<=12; i++){
            salida += `${base} x ${i} = ${5 * i}\n`;
        }
        
        console.log(salida);
        
        fs.writeFile(`tabla-${base}.txt`,salida, (err)=>{
            if(err) throw err;
        
            console.log(`tabla-${base}.txt creado`)
        })
        
        fs.writeFileSync(`tabla-${base}.txt`,salida);

        resolve(`tabla-${base}.txt`);
    }); */
 
}

module.exports = {
    crearArchivo
}