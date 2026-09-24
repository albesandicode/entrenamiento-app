let entrenamientos = [
  {
    fecha: "2026-09-19",
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
    fecha: "2026-09-20",
    ejercicios: [
      { nombre: "Sentadillas", series: 3, repeticiones: 8, peso: 26 },
      { nombre: "Peso muerto rumano", series: 3, repeticiones: 10, peso: 32 },
    ],
  },
  {
    fecha: "2026-09-21",
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

const fechaEntrenamiento = document.getElementById(
  "fecha-detalle-entrenamiento",
);

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

const botonAnadirEjercicio = document.getElementById("anadir-ejercicio");

const nombre = document.getElementById("nombre");
const series = document.getElementById("series");
const repeticiones = document.getElementById("repeticiones");
const peso = document.getElementById("peso");

const ejerciciosEnCurso = []; // Aquí guardamos los ejercicios que va metiendo el usuario en la sección de Nuevo entrenamiento, antes de guardar el entrenamiento.

const listaEjerciciosRegistrados = document.getElementById(
  "ejerciciosRegistrados",
);

botonAnadirEjercicio.addEventListener("click", function () {
  const nombreEjercicioRegistrado = nombre.value;
  const seriesEjercicioRegistrado = Number(series.value);
  const repsEjercicioRegistrado = Number(repeticiones.value);
  const pesoEjercicioRegistrado = Number(peso.value);

  const ejercicioNuevo = { // Aquí va cada ejercicio que añadimos a los ejercicios registrados.
    nombre: nombreEjercicioRegistrado,
    series: seriesEjercicioRegistrado,
    repeticiones: repsEjercicioRegistrado,
    peso: pesoEjercicioRegistrado,
  };

  ejerciciosEnCurso.push(ejercicioNuevo);

  let htmlEjercicioRegistrado = "";

  for (const ejercicioRegistrado of ejerciciosEnCurso) {
    htmlEjercicioRegistrado += `
        <li>${ejercicioRegistrado.nombre} - ${ejercicioRegistrado.series} - ${ejercicioRegistrado.repeticiones} - ${ejercicioRegistrado.peso}</li>`;
  }

  ejerciciosRegistrados.innerHTML = htmlEjercicioRegistrado;

  nombre.value = "";
  repeticiones.value = "";
  series.value = "";
  peso.value = "";
});

// 1. Leer la fecha del input
const fecha = document.getElementById("fecha-entrenamiento");

const botonGuardarEntrenamiento = document.getElementById("guardar-entrenamiento");

botonGuardarEntrenamiento.addEventListener("click", function () {
  const fechaNuevoEntrenamiento = fecha.value;

  const entrenamientoGuardado = {
    fecha: fechaNuevoEntrenamiento,
    ejercicios: ejerciciosEnCurso, // La propiedad "ejercicios" guarda el array ejerciciosEnCurso: los ejercicios añadidos con "Añadir ejercicio".
  };

  entrenamientos.push(entrenamientoGuardado);

  console.log(entrenamientos); 
})

// Intentos hasta que funciona: 15
