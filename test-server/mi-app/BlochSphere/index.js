// Obtener el canvas y el contexto
const canvas = document.getElementById('coordenadasCanvas');
const ctx = canvas.getContext('2d');
const qt = window.Quaternion;
const tf = window.tf;
const confetti = window.confetti;
const operadores = getOperadores();
let operaciones = [];
let verificarEstadoFinal = ()=>{};
let comprobarCondicion = ()=>{};
let fueHaciaAtras;
let respuestasDialogoBuscadas;
let agarrandoEstado = false;
let signoY;
let estadoCambiado = true;
let congelado = false;
let mediciones = [0,0,0,0,0,0]; //Contador de mediciones por estado
let fracasos = 0;

const estadosBase = {
    "0": tf.cast(tf.tensor1d([1,0]), 'complex64'),
    "1": tf.cast(tf.tensor1d([0,1]), 'complex64'),
    "+": tf.cast(tf.tensor1d([Math.SQRT1_2,Math.SQRT1_2]), 'complex64'),
    "-": tf.cast(tf.tensor1d([Math.SQRT1_2,-Math.SQRT1_2]), 'complex64'),   
    "+i": tf.complex(tf.tensor1d([Math.SQRT1_2,0]), tf.tensor1d([0,Math.SQRT1_2])),
    "-i": tf.complex(tf.tensor1d([Math.SQRT1_2,0]), tf.tensor1d([0,-Math.SQRT1_2])),
}

const cambioDeBase = [ //Cambio de base de la primera coordenada
    estadosBase["0"], //Base Z
    estadosBase["+"], //Base X
    estadosBase["-i"], //Base Y
]


let guion = [{
    estado_inicial: "+",
    mostrar_barra_botones: true,
    estado_arrastrable: true,
}];

let estados = [estadosBase["0"]];
let anguloFinal = 0;
let ejeResaltado=0;
let eventoActual=0;
let maxEvento = 0;
let condicionesCumplidas = [false];
let puntero_agarrando = new Image();
puntero_agarrando.src = "grab_icn.png"
// puntero_agarrando.onload = () => /*refrescarGrafico()*/;
let punteroX=0;
let punteroY=0;
let dialogoX;
let dialogoY;
let idEspera;
let esferaMovida = () => {};
let ejeCambiado = () => {};
let tareaTocada = () => {};


const ejes = [
    [[0,0,1],"|0〉", false],
    [[0,0,-1],"|1〉", true],
    [[1,0,0],"|+〉", false],
    [[-1,0,0],"|-〉", true],
    [[0,-1,0],"|+i〉", false],
    [[0,1,0],"|-i〉", true],
];


const cargarGuion = () => {
    document.getElementById("boton-siguiente").style.display = "none";
    estadoCambiado = true;
    setInterval(refrescarGrafico, 1000/30); // 30fps
}

//devuelve true si ambos estados son iguales dada una cierta precisión
const sonMismoEstado = (estadoA, estadoB, precision= 0.1)=> {
    return tf.norm(tf.sub(estadoACoord(estadoA),estadoACoord(estadoB)), ord='euclidean').arraySync()<=precision;
}

const irAEvento = (nEvento) => {
}

const siguiente = async () => {
}

const cambiarEjeResaltado = (eje, _directo) => {
    ejeResaltado = eje;
    console.log(ejeResaltado)
    document.documentElement.setAttribute('eje-resaltado', ["z", "x", "y"][eje]);
    estadoCambiado = true;
    /*refrescarGrafico()*/;
}

// Función para calcular el producto de dos matrices complejas
// Se realizan las cuentas de las partes real e imaginaria por
// separado porque no es soportada la operación sobre los complejos
const productoComplejo = (a, b) => {
    a = tf.cast(a, 'complex64');
    b = tf.cast(b, 'complex64');
    const aReal = tf.real(a);
    const aImag = tf.imag(a);
    const bReal = tf.real(b);
    const bImag = tf.imag(b);

    const prodReal = tf.sub(tf.dot(aReal, bReal), tf.dot(aImag, bImag));
    const prodImag = tf.add(tf.dot(aReal, bImag), tf.dot(aImag, bReal));

    return tf.complex(prodReal, prodImag);
}

const restaCompleja = (a, b) => {
    a = tf.cast(a, 'complex64');
    b = tf.cast(b, 'complex64');
    const aReal = tf.real(a);
    const aImag = tf.imag(a);
    const bReal = tf.real(b);
    const bImag = tf.imag(b);

    const restaReal = tf.sub(aReal, bReal);
    const restaImag = tf.sub(aImag, bImag);

    return tf.complex(restaReal, restaImag);
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


//orientación inicial de los ejes como longitud(como un ángulo), latitud (entre -1 y 1)
let orientacionEjes = [5.5,-0.5]

const resetearOrientacion = () => {
    orientacionEjes = [5.5,-0.5];
    /*refrescarGrafico()*/;
}


// Coordenadas para centrar el canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;




// Función para dibujar una flecha en los ejes
const dibujarEje = (ctx, vector, label, punteado,largo, orientacion, color, resaltado) => {
    const headlen = 10 +15*(resaltado); // Longitud de la cabeza de la flecha

    //coord 3d de la punta
    coord = orientacion.rotateVector(vector)

    //coord de la punta en el canvas
    toX = centerX + largo * coord[0]
    toY = centerY - largo * coord[2]

    const angle = Math.atan2(toY - centerY, toX - centerX);

    if (punteado) ctx.setLineDash([1,5]);
    ctx.strokeStyle = color;
    ctx.lineWidth = largo/(30+60*(1-resaltado)); //es gruesa si esta resaltado
    ctx.fillStyle = color;


    // Línea del eje
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    ctx.setLineDash([]);

    if (guion[eventoActual].mostrar_etiquetas_ejes!==false){
        //Etiqueta
        ctx.font = `bold ${48 + 10*(resaltado)}px Roboto`;
        ctx.fillText(label, toX + 10 * coord[0], toY - 10 * coord[2]);
    }


    if(coord[0] ** 2 + coord[2] ** 2 > 0.125){
        // Punta de la flecha
        ctx.beginPath();
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
        ctx.lineTo(toX, toY);
        ctx.closePath();
        ctx.fill();
    } else {
        // Si la distancia es menor o igual a 0.25, dibujar un punto en lugar de flecha
        ctx.beginPath();
        ctx.arc(toX, toY, headlen/3, 0, Math.PI * 2); // Dibujar un círculo pequeño (punto)
        ctx.fill();
    }
    ctx.fillStyle = "black"
    

    
}

const dibujarEstado = (ctx, orientacion, largo, angulo) => {
    let ultimoEstado = estadoACoord(estados.at(-1));
    if (estados.length === operaciones.length) ultimoEstado = qt.fromAxisAngle(operadores[operaciones.at(-1)].axis,angulo).rotateVector(ultimoEstado);
    const coord = orientacion.rotateVector(ultimoEstado);
    ctx.beginPath();
    ctx.arc(centerX + largo * coord[0], centerY - largo * coord[2], largo/25, 0, Math.PI * 2); // Dibujar un círculo pequeño (punto)
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + largo * coord[0], centerY - largo * coord[2]);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = largo/30;
    // if (coord[1] < 0.1) ctx.setLineDash([5,4]);
    // else ctx.setLineDash([]);
    ctx.stroke();
}

const dibujarPiso = (ctx, orientacion, largo) => {
    ctx.fillStyle = 'rgba(100,100,100,0.2)';
    ctx.beginPath();
    let coord = orientacion.rotateVector([0,1,0]);
    ctx.moveTo(centerX + largo * coord[0], centerY - largo * coord[2]);
    for (let i = 0.1; i < 2*Math.PI; i+=0.1){
        coord = orientacion.rotateVector([Math.sin(i),Math.cos(i),0]);
        ctx.lineTo(centerX + largo * coord[0], centerY - largo * coord[2]);
    }
    ctx.closePath();
    ctx.fill();
}

const estadoACoord = (tensorEstado) => {
    const arrayEstado = tensorEstado.arraySync();
    const gamma = Math.atan2(arrayEstado[0], arrayEstado[1]);
    const r = Math.sqrt(arrayEstado[0]**2 + arrayEstado[1]**2);
    const theta = 2 * Math.acos(Math.min(1,r));
    const phi = (theta !== 0) ? Math.atan2(arrayEstado[2]/Math.sin(theta/2), arrayEstado[3]/Math.sin(theta/2)) - gamma: 0;
    return [Math.cos(phi)*Math.sin(theta), Math.sin(phi)*Math.sin(theta), Math.cos(theta)];
}

const coordAEstado = (coord) => {
    const theta = Math.acos(coord[2]); // ángulo polar
    const phi = Math.atan2(coord[1], coord[0]); // ángulo azimutal
    return tf.complex(
        tf.tensor1d([Math.cos(theta/2), Math.sin(theta/2)*Math.cos(phi)]),
        tf.tensor1d([0, Math.sin(theta/2)*Math.sin(phi)])
    )
}

let idAnimacion = null
let animacionTerminada = true;

const realizarOperacion = (operacion) => {
    if (operaciones.at(-1) === "medir") return;
    congelado = true;
    let id = null;
    idAnimacion = null
    let angulo = 0;
    const animarOperacion = () => {
        if (angulo > operadores[operacion].angle || idAnimacion!==id) {
            const nuevoEstado = productoComplejo(operadores[operacion].matrix, estados.at(-1));
            if (sonMismoEstado(nuevoEstado, estados.at(-1))) {
                // Si el nuevo estado es igual al anterior, no se realiza la operación
                operaciones.pop();
            }
            else {
                estados.push(nuevoEstado);
            }
            verificarEstadoFinal();
            anguloFinal = operadores[operacion].angle;
            /*refrescarGrafico()*/;
            animacionTerminada = true;
            estadoCambiado = true;
            clearInterval(id);
        }
        else {
            animacionTerminada = false;
            anguloFinal = angulo;
            congelado = false;
            angulo += 0.1;
        }
        
    }
    if (animacionTerminada){
        operaciones.push(operacion);
        id = setInterval(animarOperacion, 42) //animación a ~24fps
        idAnimacion = id;
    }
    else{
        setTimeout(()=>realizarOperacion(operacion),10);
    }
    
}



const deshacer = () => {
    idAnimacion = null
    if (animacionTerminada){
        if (operaciones.at(-1) === "medir") return deshacerMedicion();
        operaciones.pop();
        if (estados.length>1) estados.pop();
        /*refrescarGrafico()*/;
    } else {
        setTimeout(()=>deshacer(),10);
    }
}

const reset = () => {
    idAnimacion = null
    if (animacionTerminada){
        operaciones = [];
        if (guion[eventoActual].estado_inicial && guion[eventoActual].estado_inicial==="FROM_DIALOGUE"){
            estados = [estadosBase[dialogoX]]
        } else if (guion[eventoActual].estado_inicial && guion[eventoActual].estado_inicial in estadosBase) {
            estados = [estadosBase[guion[eventoActual].estado_inicial]];
        } else if (guion[eventoActual].estado_inicial) {
            estados = [otrosEstados[guion[eventoActual].estado_inicial]];
        } else {
            estados = [estadosBase["0"]];
        }
        estadoCambiado = true;
        document.getElementById("esfera").className = "esfera";
        document.getElementById("coordenadasCanvas").className = "";
        /*refrescarGrafico()*/;
    } else {
        setTimeout(()=>reset(),10);
    }
}

const medir = () => {
    idAnimacion = null
    if (operaciones.at(-1) === "medir") return;
    if (animacionTerminada) {
        const base = ejeResaltado;
        const prob = (tf.sum(tf.pow(tf.abs(productoComplejo(estados.at(-1), cambioDeBase[base])), 2))).arraySync(); //probabilidad del primer estado de la base
        const indiceResultado = 2*base + ((Math.random() < prob) ? 0 : 1)
        const resultado = Object.keys(estadosBase)[indiceResultado]; //resultado de la medición
        mediciones[indiceResultado]++;
        animarMedicion(resultado);
        /*refrescarGrafico()*/;
    } else {
        setTimeout(()=>medir(),10);
    }
}

const animarMedicion = (resultado) => {
    animacionTerminada = false;
    document.getElementById("esfera").className = "esfera achicar";
    document.getElementById("coordenadasCanvas").className = "achicar";
    setTimeout(()=>{
        document.getElementById("esfera").className = `esfera ${resultado}`;
        document.getElementById("coordenadasCanvas").className = "";
        operaciones.push("medir");
        /*refrescarGrafico()*/;
        animacionTerminada = true;
    }, 1000)
}

const deshacerMedicion = () => {
    animacionTerminada = false;
    operaciones.pop();
    /*refrescarGrafico()*/;
    document.getElementById("esfera").className = "esfera agrandar";
    document.getElementById("coordenadasCanvas").className = "agrandar";
    setTimeout(()=>{
        document.getElementById("esfera").className = "esfera";
        document.getElementById("coordenadasCanvas").className = "";
        animacionTerminada = true;
    }, 1000)
}

const dibujarOperacion = (ctx, orientacion, largo, estado, operacion, angulo, color) => {
    const posicion = estadoACoord(estado);
    ctx.strokeStyle = color;
    let coord = orientacion.rotateVector(posicion);
    ctx.beginPath();
    ctx.moveTo(centerX + largo * coord[0], centerY - largo * coord[2]);
    for (let i = 0; Math.abs(i) < Math.abs(angulo); i+=Math.sign(angulo)*0.02){
        coord = (orientacion.mul(qt.fromAxisAngle(operadores[operacion].axis, i))).rotateVector(posicion);
        ctx.lineTo(centerX + largo * coord[0], centerY - largo * coord[2]);
        ctx.stroke();
    }
    ctx.strokeStyle = 'black';
    // estado = productoComplejo(operadores.X.matrix, estado);
}

const dibujarPuntero = (ctx, largoEje) => {
    if (punteroX==null || punteroY==null) return;
    ctx.drawImage(puntero_agarrando, centerX + largoEje * punteroX, centerY - largoEje * punteroY, largoEje/4, largoEje/4);
}

const refrescarGrafico = (manual = false) =>{
    if (congelado && !manual) return; //no refrescar si está congelado
    const largoEje = 240;
    ctx.reset();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (operaciones.at(-1) === "medir") return;
    
    const orientacion = calcularCuaternionOrientacion();

    dibujarPiso(ctx, orientacion, largoEje);

    operaciones.forEach((operacion, i)=>dibujarOperacion(ctx, orientacion, largoEje, (i===operaciones.length-1) ? estados[i] :estados[i+1], operacion, (i===operaciones.length-1) ? -anguloFinal : operadores[operacion].angle,(i===operaciones.length-1)?'red': 'blue'));

    for (let i = 0; i<6; i++){
        dibujarEje(ctx, ejes[i][0],ejes[i][1],ejes[i][2], largoEje, orientacion, ((i/2>>0)===ejeResaltado)?window.getComputedStyle(document.getElementById(`operador-${["z","x","y"][ejeResaltado]}`)).getPropertyValue("--color-base"):"rgba(0,0,0,0.3)", (i/2>>0)===ejeResaltado);
    }

    
    dibujarEstado(ctx, orientacion, largoEje, -anguloFinal);
}

const calcularCuaternionOrientacion = () => {
    return qt.fromBetweenVectors([0,1,0], [0,Math.sqrt(1-Math.min(1,orientacionEjes[1]**2)), orientacionEjes[1]]).mul(qt.fromBetweenVectors([0,1,0], [Math.sin(orientacionEjes[0]),Math.cos(orientacionEjes[0]),0]));
}

/*refrescarGrafico()*/

let toqueInicial;

const arrastrar = (e) =>  {
    e.preventDefault();
    if (operaciones.at(-1) === "medir") return;
    if(!e.pressure || guion[eventoActual].arrastrar===false) return;
    if (!agarrandoEstado){
        const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        const axisLength = 10 * remSize;
        let deltaX = e.movementX/axisLength;
        let deltaY = -e.movementY/axisLength;
        nuevaOrientacion = [orientacionEjes[0]+Math.asin(deltaX), Math.min(1,Math.max(-1, orientacionEjes[1] + deltaY))]
        if (!isNaN(nuevaOrientacion[0]) && !isNaN(nuevaOrientacion[0])){
            orientacionEjes = nuevaOrientacion;
        }
        /*refrescarGrafico()*/;
        esferaMovida();
    } else {
        const rect = canvas.getBoundingClientRect();
        const coordMouse = [
        (e.clientX - rect.x - 0.5 * rect.width) / (rect.width * (480/650) / 2), 
        - (e.clientY - rect.y - 0.5 * rect.height) / (rect.height * (480/600) / 2)
        ]
        const norma = Math.sqrt(coordMouse[0] ** 2 + coordMouse[1] ** 2);
        const orientacion = calcularCuaternionOrientacion();
        const nuevasCoordenadas = [
            coordMouse[0],
            Math.sqrt(1-coordMouse[0]**2-coordMouse[1]**2)*signoY,
            coordMouse[1]
        ];
        const normaNuevas = Math.sqrt(nuevasCoordenadas[0] ** 2 + nuevasCoordenadas[1] ** 2 + nuevasCoordenadas[2] ** 2);
        nuevasCoordenadas[0] /= normaNuevas;
        nuevasCoordenadas[1] /= normaNuevas;
        nuevasCoordenadas[2] /= normaNuevas;
        const coord = orientacion.inverse().rotateVector(nuevasCoordenadas);
        coord[1] = -coord[1]; //invertir el eje Y para que coincida con la orientación del canvas
        nuevoEstado = coordAEstado(coord);
        if(isNaN(nuevoEstado.arraySync()[0])) return;
        estados = [nuevoEstado];
        operaciones = [];
        estadoCambiado = true;
        /*refrescarGrafico()*/;
        esferaMovida();
    }
}

const agarrar = (e) => {
    e.preventDefault();
    if (guion[eventoActual].estado_arrastrable !== true) {
        agarrandoEstado = false;
        return; //no agarrar si hay operaciones o no es arrastrable
    }
    const rect = canvas.getBoundingClientRect();
    const orientacion = calcularCuaternionOrientacion();
    const coord = orientacion.rotateVector(estadoACoord(estados.at(-1)));
    signoY = 1; //forzar que quede del lado mirando hacia adelante
    const coordMouse = [
        (e.clientX - rect.x - 0.5 * rect.width) / (rect.width * (480/650) / 2), 
        - (e.clientY - rect.y - 0.5 * rect.height) / (rect.height * (480/600) / 2)
    ]
    const distanciaAEstado = Math.sqrt((coordMouse[0] - coord[0])**2 + (coordMouse[1] - coord[2])**2);
    if (distanciaAEstado < 0.08) {
        agarrandoEstado = true;
    } else {
        agarrandoEstado = false;
    }
}

const soltar = (e) => {
    e.preventDefault();
    agarrandoEstado = false;
}
