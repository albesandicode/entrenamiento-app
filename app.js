let entrenamientos = [
    {
        fecha: "21/09",
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
        fecha: "22/09",
        ejercicios: [
            { nombre: "Sentadillas", series: 3, repeticiones: 8, peso: 26 },
            { nombre: "Peso muerto rumano", series: 3, repeticiones: 10, peso: 32 },
        ],
    },
];

for (const entrenamiento of entrenamientos) {
    console.log(`${entrenamiento.fecha} - ${entrenamiento.ejercicios.length} ejercicios`);
}

// Intentos hasta que funciona: 1