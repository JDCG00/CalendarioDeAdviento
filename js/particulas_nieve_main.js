window.onload = function() {

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
        "glow":30,
        "twinkle":false,
        "color":["white",
        "#d3e8eb"],
        "shape":["image",
        "circle",
        "circle",
        "image"],
        "imageUrl":"./img/copo_nieve.png"
    }

    let container = document.querySelector(".particulas");
    let mySparticles = new Sparticles(container, config_particulas) 
        
}