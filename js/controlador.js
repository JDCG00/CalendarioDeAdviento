/** 
    jsPrincipal.js
    @file Controlador principal de la web de Navidad
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'

import { Vista } from "./vista.js";
import { Modelo } from "./modelo.js";

export class Navidad{

    constructor(){        
        this.vista = null
        this.modelo = new Modelo()
        window.onload = this.iniciar.bind(this)
    }
    /**
       Inicia el programa
    **/
    iniciar(){
        console.log('Cargado')
        this.vista = new Vista()
        document.getElementById('stop').onclick = this.finalizarAudio.bind(this)
        document.getElementById('play').onclick = this.vista.crearDiv.bind(this)
        document.getElementsByClassName('contenedor-principal')[0].onclick = this.vista.verificar.bind(this.vista)
        document.getElementsByTagName('body')[0].onclick = this.vista.testEvento.bind(this.vista)
    }
    
    finalizarAudio() {        
        let audio = document.getElementById('audio')
        if (audio) 
            audio.remove()   
    }
}
new Navidad()