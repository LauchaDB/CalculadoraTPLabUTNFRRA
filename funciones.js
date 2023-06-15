function calcular(){
    if(botonesIngresados[botonesIngresados.length-1] != "O"){
        let cosasACalcular = document.getElementById("resultado").value;
        let resultado = eval(cosasACalcular) == undefined || eval(cosasACalcular) == null ? "ERROR" : eval(cosasACalcular);
        document.getElementById("resultado").value = resultado;
        botonesIngresados = ["N"];
    }
}

let botonesIngresados = ["O"];

function concatenarEnPantalla(button, type) {
    if(document.getElementById('resultado').value != "ERROR"){
        if(!(type == "O" && botonesIngresados[botonesIngresados.length-1] == type)){
            var valor = button.innerText;
            var resultado = document.getElementById('resultado');
            resultado.value += valor;
            botonesIngresados.push(type);
        }
    }
}

function cleanCalculadora(){
    document.getElementById('resultado').value = "";
    botonesIngresados = ["O"];
}

function isOperator(valor){
    return valor == "+" || valor == "-" || valor == "*" || valor == "/";
}

function borrarUltimoDato(){
    if(document.getElementById("resultado").value != "" && document.getElementById("resultado").value != undefined){
        var resultado = document.getElementById("resultado");
        var valor = resultado.value;
        resultado.value = valor.slice(0, -1);
        botonesIngresados.pop();
    }
}

document.addEventListener('keydown', function(event) {
    var teclaPresionada = event.key;
    if(teclaPresionada == "Enter"){
        calcular();
    }else if(teclaPresionada == "Escape"){
        cleanCalculadora();
    }else if(teclaPresionada == "Backspace"){
        borrarUltimoDato();
    }else{
        var boton = document.querySelector(`button.grid-item[data-value='${teclaPresionada}']`);
        if (boton) {
            if(isOperator(boton.innerText)){
                concatenarEnPantalla(boton, "O");
            }else{
                concatenarEnPantalla(boton, "N");
            }
        }
    }
  });