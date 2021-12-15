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
        document.getElementById('play').onclick = this.crearAudio.bind(this)
        document.getElementById('nieve').onclick = this.vista.quitarParticulas.bind(this)
        document.getElementsByClassName('contenedor-principal')[0].onclick = this.vista.verificar.bind(this.vista)
        document.getElementsByTagName('body')[0].onclick = this.vista.testEvento.bind(this.vista)        
        document.getElementsByClassName('pestañaCerrar')[0].onclick = this.vista.borrarTarjeta.bind(this.vista)               
    } 
    finalizarAudio() {        
        let audio = document.getElementById('audio')
        if (audio) 
            audio.remove()      
    }
    crearAudio(){
        let audio = document.createElement('audio')
        let body = document.getElementsByTagName('body')[0]
        body.appendChild(audio)
        function ponerAtributos(ele, atri) {
            for (var i in atri) {
                ele.setAttribute(i, atri[i])
            }
        }        
        ponerAtributos(audio, {"id" : "audio", "autoplay" : "", "loop" : "" })
        let source =  document.createElement('source')
        source.setAttribute('src' , "./recursos/Jingle_Bells_Piano_Version.mp3") 
        audio.appendChild(source)
    }
}
new Navidad()