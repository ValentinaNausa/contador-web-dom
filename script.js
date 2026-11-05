// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tablaBody = document.getElementById("tabla-body");

// Variable de estado del contador
let likes = 0;

// 2. Escuchar el evento 'click' y manipular el DOM
boton.addEventListener("click", () => {
    // Incrementar el contador
    likes++;
    textoContador.textContent = likes; // Actualizamos el DOM directamente

    // Capturar la hora exacta
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString(); // formato HH:MM:SS

    // Crear la nueva fila
    const fila = document.createElement("tr");

    // Celda del número de clic
    const celdaNumero = document.createElement("td");
    celdaNumero.textContent = likes;

    // Celda de la hora
    const celdaHora = document.createElement("td");
    celdaHora.textContent = horaFormateada;

    // Agregar las celdas a la fila
    fila.appendChild(celdaNumero);
    fila.appendChild(celdaHora);

    // Insertar la fila al inicio de la tabla (los más recientes arriba)
    tablaBody.insertBefore(fila, tablaBody.firstChild);
});