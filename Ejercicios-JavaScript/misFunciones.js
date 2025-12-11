function cambiarUnidades(id, valor) {
    valor = Number(valor);

    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido");
        document.lasUnidades.unid_metro.value = "";
        return;
    }

    if (id === "metro") {
        document.lasUnidades.unid_pulgada.value = (valor * 39.3701).toFixed(2);
        document.lasUnidades.unid_pie.value = (valor * 3.28084).toFixed(2);
        document.lasUnidades.unid_yarda.value = (valor * 1.09361).toFixed(2);
    }
}

function convertirGR(id) {
    let grad, rad;

    if (id === "grados") {
        grad = Number(document.getElementById("grados").value);
        rad = (grad * Math.PI) / 180;
    } else if (id === "radianes") {
        rad = Number(document.getElementById("radianes").value);
        grad = (rad * 180) / Math.PI;
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    if (valorMO === "mostrar") {
        document.getElementById("divMO").style.display = "block";
    } else if (valorMO === "ocultar") {
        document.getElementById("divMO").style.display = "none";
    }
}

function calcularSuma() {
    const num1 = Number(document.getElementsByName("sum_num1")[0].value);
    const num2 = Number(document.getElementsByName("sum_num2")[0].value);

    document.getElementsByName("sum_total")[0].value = num1 + num2;
}
