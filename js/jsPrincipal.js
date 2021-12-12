/** 
    jsPrincipal.js
    @file Controlador principal de la web de Navidad
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'



class Navidad{

    constructor(){        
        this.vista = null
        this.modelo = new Modelo()
        window.onload = this.iniciar.bind(this)        
    }
    /**
       Inicia
    **/
    iniciar(){
        console.log('Cargado')
        this.vista = new Vista()
        window.onclick = this.finalizarAudio.bind(this)
    }

    finalizarAudio() {        
        let audio = document.getElementById('audio')
        if (audio) 
            audio.remove()   
    }
}

class Vista{
    constructor(){
        this.particulas(this)
    }
    particulas(){
        if (document.getElementById('detector')) {
            let config_particulas = {
                "composition":"source-over",
                "count":400,
                "speed":5,
                "parallax":5,
                "direction":160,
                "xVariance":5,
                "yVariance":0,
                "rotate":true,
                "rotation":5,
                "alphaSpeed":2,
                "alphaVariance":2,
                "minAlpha":-1,
                "maxAlpha":1,
                "minSize":5,
                "maxSize":12,
                "style":"fill",
                "bounce":false,
                "drift":10,
                "glow":0,
                "twinkle":false,
                "color":["white",
                "#d3e8eb"],
                "shape":["image",
                "image",
                "circle",
                "image"],
                "imageUrl":"./img/copo_nieve.png"
            }    
            let contenedor = document.querySelector(".particulas");
            let misparticulas = new Sparticles(contenedor, config_particulas)
        }else{
            let config_particulas = {
                "composition":"source-over",
                "count":400,
                "speed":5,
                "parallax":5,
                "direction":160,
                "xVariance":5,
                "yVariance":0,
                "rotate":true,
                "rotation":5,
                "alphaSpeed":2,
                "alphaVariance":2,
                "minAlpha":-1,
                "maxAlpha":1,
                "minSize":5,
                "maxSize":12,
                "style":"fill",
                "bounce":false,
                "drift":10,
                "glow":0,
                "twinkle":false,
                "color":["white",
                "#d3e8eb"],
                "shape":["image",
                "image",
                "circle",
                "image"],
                "imageUrl":"../img/copo_nieve.png"
            }    
            let contenedor = document.querySelector(".particulas");
            let misparticulas = new Sparticles(contenedor, config_particulas)
        }        
    }
}

class Modelo{
    
}

new Navidad()