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
       Inicia el programa
    **/
    iniciar(){
        console.log('Cargado')
        this.vista = new Vista()
        document.getElementById('stop').onclick = this.finalizarAudio.bind(this)
        document.getElementById('play').onclick = this.vista.crearDiv.bind(this)
        document.getElementsByClassName('contenedor-principal')[0].onclick = this.vista.verificar.bind(this.vista)
        
    }
    
    finalizarAudio() {        
        let audio = document.getElementById('audio')
        if (audio) 
            audio.remove()   
    }
}

class Vista{
    constructor(){
       this.particulas() 
       this.modelo = new Modelo()     
    }
/*
    crearBoton(){
        console.log('hola');
        let divBotones = document.createElement('div')
        let contenedorMain = document.getElementsByClassName('contenedor-principal')[0]
        divBotones.classList.add('bolas-navidad')
        divBotones.style.top = `${184}px`
        divBotones.style.left = `${684}px`
        contenedorMain.appendChild(divBotones)

    }
*/
    verificar(evento){
        console.log(evento);
        
            if (Math.abs(evento.clientX - this.modelo.getCoordX()) < 20 && Math.abs(evento.clientY - this.modelo.getCoordY()) < 20)
                this.crearDiv()      
          
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

class Modelo{
    constructor(){
        this.coordX = [910 , 1010, 914, 1007, 860, 959, 1058, 846, 922, 996, 1072, 796, 861, 922, 959, 996, 1058, 1123,
                        784, 831, 898, 959, 1022, 1087, 1135]
        this.coordY = [275 , 275, 350, 350, 400, 400, 400, 491, 464, 464, 491, 559, 597, 549, 612, 549, 599, 556,
                        661, 718, 665, 667, 659, 718, 731, 729]
    }
    getCoordX(){
        for (let i = 0; i < 25; i++) {
            return this.coordX[i]
        }        
    }
    getCoordY(){
        for (let i = 0; i < 25; i++) {
            return this.coordY[i]
        }
    }
}

new Navidad()