let boton = document.getElementById('calcular');
let respuesta = document.getElementById('respuesta');

let min_LV = 355.2;
let min_S = 400.2;

let STD_P = 22.33;
let STD_S = 18.28;
let STD_C = 13.79;
let STD_Q = 5.37;

let P;
let S;
let C;
let QC;
let TM;
let t;

boton.addEventListener('click',calcularTM);

function calcularTM(){
    P = parseFloat(document.getElementById('P').value);
    S = parseFloat(document.getElementById('S').value);
    C = parseFloat(document.getElementById('C').value);
    QC = parseFloat(document.getElementById('Q').value);
    TM = parseFloat(document.getElementById('TM').value);
    if (document.getElementById('Y').checked==true) {
        t = min_S-TM;
    } else {
        t = min_LV-TM;
    }
    let R = 100*(1*((P*STD_P)+(S*STD_S)+(C*STD_C)+(QC*STD_Q))/t);
    respuesta.innerHTML = `Su producción VA es: ${R.toFixed(2)} %`;
}
