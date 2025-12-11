/**
 * Conversion de unidades de metros yardas, pies y pulgadas
 * @method Nombre de la función
 * @param  {string} id - El id de los imputs de metros, yardas, pies y pulgadas
 * @param {nummber} valor - tiene el valor de los imputs
 * @return Valor que retorna
 */

function cambiarUnidades (id, Valor){
    if (isNaN(Valor)){
        alert("se ingreso un valor invalido")
        document.lasUnidades.unid_metro.value = "";
    } else if (id=="metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701*Valor;
        document.lasUnidades.unid_pie.value = 3.28084*Valor;
        document.lasUnidades.unid_yarda.value = 1.09361*Valor; 

    }

}

function convertirGR (id) {
    var grad, rad;
    if(id=="grados") {
        grad = document.getElementById(Elementld: "grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad= document.getElementById(Elementld: "radianes").value;
        grad=(rad*180)/Math.PI
        
    }
     document.getElementById(Elementld: "grados").value = grad;
     document.getElementById(Elementld: "radianes").value = rad;



}

function mostrar_ocultar (valorMO){


        if(valorMo=="val mostrar"){
            document.getElementById(elementid: "divMO").style.display = 'block';
    } else if (valorMO== "val ocultar"){
        document.getElementById(elementid: "divMO").style.display = 'none';

    }







}