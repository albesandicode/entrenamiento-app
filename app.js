let entrenamientos = [
  {
    fecha: "19/09",
    ejercicios: [
      { nombre: "Peso muerto", series: 3, repeticiones: 6, peso: 36 },
      { nombre: "Floor press con barra", series: 4, repeticiones: 8, peso: 24 },
      { nombre: "Remo con barra", series: 4, repeticiones: 10, peso: 24 },
      { nombre: "Press militar de pie", series: 3, repeticiones: 8, peso: 20 },
      { nombre: "Pájaros", series: 3, repeticiones: 17, peso: 4 },
      { nombre: "Zancadas", series: 3, repeticiones: 15, peso: 6 },
    ],
  },
  {
    fecha: "20/09",
    ejercicios: [
      { nombre: "Sentadillas", series: 3, repeticiones: 8, peso: 26 },
      { nombre: "Peso muerto rumano", series: 3, repeticiones: 10, peso: 32 },
    ],
  },
  {
    fecha: "21/09",
    ejercicios: [
      { nombre: "Peso muerto", series: 3, repeticiones: 6, peso: 38 },
      { nombre: "Floor press con barra", series: 4, repeticiones: 8, peso: 28 },
      { nombre: "Remo con barra", series: 4, repeticiones: 10, peso: 26 },
      { nombre: "Press militar de pie", series: 3, repeticiones: 8, peso: 22 },
    ],
  },
];

const historialEntrenamientos = document.getElementById(
  "historial-entrenamientos",
);

let htmlEntrenamientos = "";

for (const entrenamiento of entrenamientos) {
  htmlEntrenamientos += `<li>
        ${entrenamiento.fecha} - ${entrenamiento.ejercicios.length} ejercicios
    </li>`;
}

const fechaEntrenamiento = document.getElementById("fecha-detalle-entrenamiento");

fechaEntrenamiento.textContent = entrenamientos[0].fecha;

historialEntrenamientos.innerHTML = htmlEntrenamientos;

const filasEjercicios = document.getElementById("filas-ejercicios");

let htmlEjercicios = "";

for (const ejercicio of entrenamientos[0].ejercicios) {
  htmlEjercicios += `<tr>
        <td>${ejercicio.nombre}</td>
        <td>${ejercicio.series}</td>
        <td>${ejercicio.repeticiones}</td>
        <td>${ejercicio.peso}</td>
    </tr>`;
}

filasEjercicios.innerHTML = htmlEjercicios;

// Intentos hasta que funciona: 5
