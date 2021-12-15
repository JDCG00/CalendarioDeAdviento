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
        document.getElementsByTagName('body')[0].onclick = this.vista.testEvento.bind(this.vista)
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

    testEvento(evento){
        console.log(evento);
    }
    verificar(evento){
        let cogerCoordX = this.modelo.getCoordX()
        let cogerCoordY = this.modelo.getCoordY()
        for (let i = 0; i < 25; i++) {
            if (Math.abs(evento.layerX - cogerCoordX[i]) < 25 && Math.abs(evento.layerY - cogerCoordY[i]) < 25){
                this.crearDiv()

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
        let pTarjeta = document.createElement('p')
        pTarjeta.classList.add('pTarjeta')
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

        this.coordX = [334 , 433, 338, 433, 284, 383, 482, 270, 345, 421, 496, 219, 285, 345, 383, 418, 480, 545,
                        207, 254, 322, 382, 445, 511, 558]

        this.coordY = [160 , 160, 236, 236, 282, 282, 282, 373, 345, 346, 374, 440, 480, 480, 432, 494, 434, 481, 441, 544,
                        602, 551, 613, 549, 602, 543]
        
        this.textoTarjeta = [
            'Tengo un sueño, un solo sueño, seguir soñando. Soñar con la libertad, soñar con la justicia, soñar con la igualdad y ojalá ya no tuviera necesidad de soñarlas.',
            'Mi partido es la justicia social; mi bandera la igualdad y tengo como única meta la felicidad de todos.',
            'Tu verdad aumentará en la medida que sepas escuchar la verdad de los otros.',
            'La no violencia es un arma poderosa y justa que corta sin herir y ennoblece al hombre que lo maneja. Es una espada que cura.',
            'La paz es más preciosa que los diamantes o plata u oro.',
            'La paz es más preciosa que los diamantes o plata u oro.',
            'No habrá paz en el mundo mientras no exista justicia social para los trabajadores.',
            'La justicia social no puede ser conseguida por la violencia. La violencia mata lo que intenta crear.'
        ]
    }
    getTextoTarjeta(){
        return this.textoTarjeta
    }
    getCoordX(){
        return this.coordX
    }
    getCoordY(){        
        return this.coordY
    }
}

new Navidad()