
// Variables

    // rango
    const rango = document.querySelector("#rango");

    // rango string
    const rango_str = document.querySelector("#rango_str");

    // Función para actualizar el valor del rango
    function actualizarValorRango() {
        rango_str.textContent = rango.value + " x " + rango.value + " Pixels.";
    }

    const DEFAULT_COLOR = '#333333'
    const DEFAULT_MODE = 'color'

    // color a pintar
    let currentMode = DEFAULT_MODE
    let currentColor = DEFAULT_COLOR

    // Llamar a la función inicialmente para establecer el valor inicial
    actualizarValorRango();

    // Llamamos a la función con el valor inicial del rango
    crear_cuadro(rango.value);



// Funcion que crea grid de videojuego
    // se crea bucle para recrear x*x en area con flexboxes
    function crear_cuadro(valor) {
        // el ancho de la cuadrícula total es 13 cm, se realiza una división para saber cuánto será el ancho de cada "pixel"
        const ancho_per_box = 12 / valor;
        console.log("el ancho es " + ancho_per_box);
    
        // tomamos el tag de la caja principal
        const caja_principal = document.querySelector('.juego');
    
        // bucle de creación de cajas para pintar dentro de la caja fantasma
        for (let i = 0; i < valor; i++) {
            // creamos la columna en la que se agregaran los pixeles
            const columna = document.createElement('div');

            for (let n = 0; n < valor; n++) {
                // creamos un elemento div para representar cada píxel
                const pixel = document.createElement('div');
                pixel.className = "pixel";
                pixel.style.width = ancho_per_box + "cm";
                pixel.style.height = ancho_per_box + "cm";
                pixel.style.background = "whitesmoke";
                pixel.addEventListener('click', interactuar);
    
                // agregamos el píxel a la caja principal
                columna.appendChild(pixel);
            }
        caja_principal.appendChild(columna);
        }
    }
    

    
// event listeners

    // Actualizamos el cuadro cuando cambia el valor del rango
    rango.addEventListener("input", function () {
        // Eliminamos la caja existente antes de crear una nueva
        const caja_principal = document.querySelector('.juego');
        caja_principal.innerHTML = "";
        
        // Llamamos a la función con el nuevo valor del rango
        crear_cuadro(rango.value);
    
        // Actualizamos el valor del rango
        actualizarValorRango();
    });
    

    // cambio de MODE 
    const color_mode = document.querySelector("#color_mode");
    const rainbow = document.querySelector("#rainbow_mode");
    const borrar = document.querySelector("#borrar");
    const colorPicker = document.getElementById('colorPicker');


    color_mode.addEventListener("click", function(){
        currentMode = 'color'
        currentColor = colorPicker.value;
    });
    
    rainbow.addEventListener("click", function(){
        currentMode = 'rainbow';
    });
    
    borrar.addEventListener("click", function(){
        currentMode = 'borrar';
    });
    
    // Pintar al arrastrar dando clic
    function interactuar(e) {
        console.log(e.type);
        console.log(currentMode);
        console.log(currentColor);
    
        if (currentMode === 'rainbow') {
            const randomR = Math.floor(Math.random() * 256)
            const randomG = Math.floor(Math.random() * 256)
            const randomB = Math.floor(Math.random() * 256)
            e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
        } else if (currentMode === 'color') {
            e.target.style.backgroundColor = currentColor;
        } else if (currentMode === 'borrar') {
            e.target.style.backgroundColor = 'whitesmoke';
        }
    }
    

