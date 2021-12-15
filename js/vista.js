/** 
    jsPrincipal.js
    @file Controlador principal de la web de Navidad
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'
import { Modelo } from "./modelo.js";

export class Vista{
    constructor(){
       this.particulas() 
       this.modelo = new Modelo()     
    }

    testEvento(evento){
        console.log(evento);
    }
    verificar(evento){
        let cogerCoordX = this.modelo.getCoordX()
        let cogerCoordY = this.modelo.getCoordY()
        for (let i = 0; i < 25; i++) {
            if (Math.abs(evento.layerX - cogerCoordX[i]) < 25 && Math.abs(evento.layerY - cogerCoordY[i]) < 25){
                this.crearDiv()
                this.crearTextoTarjeta(console.log(this.modelo.getTextoTarjeta()[i])) 
            }                          
        }        
    }

    crearDiv(){
       let divTarjeta = document.createElement('div')              
       divTarjeta.classList.add('tarjeta')
       function retraso(){
            divTarjeta.style.opacity = 1
            divTarjeta.style.transition = `opacity ${1}s`
       }
       setTimeout(retraso, 100)
       
       let main = document.getElementsByTagName('main')[0]
       main.appendChild(divTarjeta)
    }
    crearTextoTarjeta(){
        let cogerTexto = this.modelo = this.modelo.getTextoTarjeta()
        let pTarjeta = document.createElement('p')
        pTarjeta.classList.add('pTarjeta')
        
        let divTarjeta = document.getElementsByClassName('tarjeta')[0]
        divTarjeta.appendChild(pTarjeta)
        
    }

    quitarParticulas(){
        let particulas = document.querySelector(".particulas")
        if (particulas) {
            particulas.remove()
        }
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