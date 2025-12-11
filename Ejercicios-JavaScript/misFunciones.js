/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
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