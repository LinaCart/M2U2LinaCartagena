document.getElementById("guardar").addEventListener("click", function (event) {
    event.preventDefault();

    let numeroA = parseInt(document.getElementById("numeroA").value)
    if(isNaN(numeroA) || numeroA == 0) {
        alert('Escribe Número');
        return;
    } 

    let numeroB = parseInt(document.getElementById("numeroB").value)
    if(isNaN(numeroB) || numeroB == 0) {
        alert('Escribe Número');
        return;
    } 

    let numeroC = parseInt(document.getElementById("numeroC").value)
    if(isNaN(numeroC) || numeroC == 0) {
        alert('Escribe Número');
        return;
    } 

    let numeroD = parseInt(document.getElementById("numeroD").value)
    if(isNaN(numeroD) || numeroD == 0) {
        alert('Escribe Número');
        return;
    } 
    

    if (numeroA == numeroB){
        alert('Deben ser números distintos');
        return;
    }

    if (numeroA == numeroC){
        alert('Deben ser números distintos');
        return;
    }

    if (numeroA == numeroD){
        alert('Deben ser números distintos');
        return;
    }

    if (numeroB == numeroC){
        alert('Deben ser números distintos');
        return;
    }

    if (numeroB == numeroD){
        alert('Deben ser números distintos');
        return;
    }

    if (numeroC == numeroD){
        alert('Deben ser números distintos');
        return;
    }

    //Calculo del mayor//

    let mayor = 0

    if (numeroA > mayor){
        mayor = numeroA
    }

    if (numeroB > mayor){
        mayor = numeroB
    }

    if (numeroC > mayor){
        mayor = numeroC
    }

    if (numeroD > mayor){ 
        mayor = numeroD
    }

    // Calculo del Menor//

    let menor = mayor

    if (numeroA < menor){ 
        menor = numeroA
    }

    if (numeroB < menor){ 
        menor = numeroB
    }

    if (numeroC < menor){ 
        menor = numeroC
    }

    if (numeroD < menor){ 
        menor = numeroD
    }

    let resultado = "El número mayor es: " + mayor + ", El número menor es: " + menor

    document.getElementById("resultados").innerHTML = resultado
})



