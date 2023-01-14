let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

let min_LV = 355.2;
let min_S = 400.2;

let STD_P = 26.39;
let STD_S = 19.11;
let STD_C = 13.46;
let STD_Q = 8.83;

boton.addEventListener('click',calcularTM);

function calcularTM(){
    let P = parseFloat(document.getElementById('P').value);
    let S = parseFloat(document.getElementById('S').value);
    let C = parseFloat(document.getElementById('C').value);
    let QC = parseFloat(document.getElementById('Q').value);
    let TM = parseFloat(document.getElementById('TM').value);
    let t = 0;
    if (document.getElementById('Y').checked==true) {
        t = min_S-TM;
    } else {
        t = min_LV-TM;
    }
    let R = 100*((P*STD_P)+(S*STD_S)+(C*STD_C)+(QC*STD_Q))/t;
    respuesta.innerHTML = `Su producción VA es: ${R.toFixed(2)} %`;
}
