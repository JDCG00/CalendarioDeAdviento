/** 
    jsPrincipal.js
    @file Controlador principal de la web de Navidad
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'



class Navidad{

    constructor(){        
        this.Vista = new Vista()
        this.Modelo = null
        window.onload = this.iniciar.bind(this)
        window.onclick = this.iniciar.bind(this)
    }
    /**
       Inicia
    **/
    iniciar(){
        console.log('ffsdsadas')
    }

    finalizarAudio() {
        let audio = document.getElementById('audio')
        audio.remove()
    }
}

class Vista{
    
}

class Modelo{
    
}

new Navidad()