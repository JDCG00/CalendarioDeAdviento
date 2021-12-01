window.onload = function() {

    let container = document.querySelector(".particulas");
    let mySparticles = new Sparticles(container, {"composition":"source-over",
        "count":400,
        "speed":5,
        "parallax":20,
        "direction":160,
        "xVariance":5,
        "yVariance":0,
        "rotate":false,
        "rotation":0,
        "alphaSpeed":2,
        "alphaVariance":2,
        "minAlpha":-1,
        "maxAlpha":1,
        "minSize":5,
        "maxSize":10,
        "style":"fill",
        "bounce":false,
        "drift":4,
        "glow":0,
        "twinkle":false,
        "color":["white",
        "#d3e8eb"],
        "shape":["image",
        "circle",
        "circle",
        "image"],
        "imageUrl":"./img/copo_nieve.png"}) 
        
}