/** 
    jsPrincipal.js
    @file Controlador principal de la web de Navidad
    @author Juan Diego Carretero Granado <jcarreterogranado.guadalupe@alumnado.fundacionloyola.net>
    @License GPL v3 2021
*/

'use strict'


export class Modelo{
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
            'La justicia social no puede ser conseguida por la violencia. La violencia mata lo que intenta crear.',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
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