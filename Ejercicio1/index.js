
document.getElementById("guardar").addEventListener("click", function (event) {
    event.preventDefault();
    
    let nombreEstudiante = document.getElementById("nombreEstudiante").value

    if(nombreEstudiante.length == 0) {
        alert('Escriba Nombre Estudiante');
        return;
    }

    let cantidadMaterias = parseInt(document.getElementById("cantidadMaterias").value)
    if(isNaN(cantidadMaterias) || cantidadMaterias == 0) {
        alert('Escriba Cantidad Materias');
        return;
      }

    let totalMaterias = 0

    for (let i = 1; i <= cantidadMaterias; i++) {
        let valorMateria = parseInt(prompt("Porfavor ingrese el valor de la materia No."+ i))

        if(isNaN(valorMateria) || valorMateria == 0) {
            alert('Escriba Valor Materia');
            return;
          }

        totalMaterias = totalMaterias + valorMateria
    }

    let valorPapeleria = 20000
    let valorCarnet = 8000
    let valorDescuento = totalMaterias*0.2
    let Total = (totalMaterias - valorDescuento) + valorPapeleria + valorCarnet

    let resultado = "<b>Total Materias</b>: " + totalMaterias + ",<br> <b>Valor Descuento</b>: " +  valorDescuento + ",<br> <b>Valor Papeleria</b>: " + valorPapeleria + ",<br> <b>Valor Carnet</b>: " + valorCarnet + ",<br> <b>Total</b>: " + Total

    document.getElementById("resultados").innerHTML = resultado
})
