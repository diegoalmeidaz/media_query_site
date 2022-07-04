function multPrecio () {

    cantidad = document.querySelector ("#cantidad").value
    calculopx = +cantidad * 4990
    resultado = document.querySelector("#resultado")
    resultado.innerHTML = "El Total es $" + (calculopx)

    
    mostrarcantidad = document.querySelector("#cantidad_res")
    mostrarcantidad.innerHTML = "Cantidad: " + cantidad


    color = document.querySelector("#color_bebida")
    selectorbebida = document.querySelector("#color_bebida_2")
    selectorbebida.style.backgroundColor = color.value

}