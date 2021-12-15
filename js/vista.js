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
                this.verDiv()
                this.crearTextoTarjeta(this.modelo.getTextoTarjeta()[i])
                this.verPestañaCerrar()
            }                          
        }        
    }

    verDiv(){
       let divTarjeta = document.getElementsByClassName('tarjeta')[0]              
       divTarjeta.classList.add('tarjeta')
       function retraso(){
            divTarjeta.style.opacity = 1
            divTarjeta.style.transition = `opacity ${1}s`
            divTarjeta.style.pointerEvents = "initial"
       }
       setTimeout(retraso, 100)
    }
    verPestañaCerrar(){
        let divCerrar = document.getElementsByClassName('pestañaCerrar')[0]
        divCerrar.style.opacity = 1
        divCerrar.style.pointerEvents = "initial"
    }
    crearTextoTarjeta(cogerTexto){
        let pTarjeta = document.createElement('p')
        pTarjeta.classList.add('pTarjeta')
        
        let divTarjeta = document.getElementsByClassName('tarjeta')[0]
        divTarjeta.appendChild(pTarjeta)

        pTarjeta.appendChild(document.createTextNode(cogerTexto))
    }
    borrarTarjeta(){
        let tarjeta = document.getElementsByClassName('tarjeta')[0]
        let pTarjeta = document.getElementsByClassName('pTarjeta')[0]
        if(tarjeta){
            tarjeta.style.opacity = 0            
            tarjeta.style.transition = `opacity ${0.5}s`
            tarjeta.style.pointerEvents = "none"
            pTarjeta.remove()
        }            
    }

    quitarParticulas(){
        let particulasCoger = document.querySelector(".particulas")
        let particulasCrear = document.createElement('div')
        particulasCrear.classList.add('particulas')
        if (particulasCoger) {
            particulasCoger.remove()
        }else{
            document.body.appendChild(particulasCrear)
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
                this.misparticulas = new Sparticles(contenedor, config_particulas)
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
                this.misparticulas = new Sparticles(contenedor, config_particulas)
            }        
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
            this.misparticulas = new Sparticles(contenedor, config_particulas)
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
            this.misparticulas = new Sparticles(contenedor, config_particulas)
        }        
    }
}