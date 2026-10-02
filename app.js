let workouts = [
  {
    date: "2026-09-19",
    exercises: [
      { name: "Peso muerto", sets: 3, reps: 6, weight: 36 },
      { name: "Floor press con barra", sets: 4, reps: 8, weight: 24 },
      { name: "Remo con barra", sets: 4, reps: 10, weight: 24 },
      { name: "Press militar de pie", sets: 3, reps: 8, weight: 20 },
      { name: "Pájaros", sets: 3, reps: 17, weight: 4 },
      { name: "Zancadas", sets: 3, reps: 15, weight: 6 },
    ],
  },
  {
    date: "2026-09-20",
    exercises: [
      { name: "Sentadillas", sets: 3, reps: 8, weight: 26 },
      { name: "Peso muerto rumano", sets: 3, reps: 10, weight: 32 },
    ],
  },
  {
    date: "2026-09-21",
    exercises: [
      { name: "Peso muerto", sets: 3, reps: 6, weight: 38 },
      { name: "Floor press con barra", sets: 4, reps: 8, weight: 28 },
      { name: "Remo con barra", sets: 4, reps: 10, weight: 26 },
      { name: "Press militar de pie", sets: 3, reps: 8, weight: 22 },
    ],
  },
];

const workoutHistoryList = document.getElementById("workout-history-list");

const workoutHistorySection = document.getElementById("workout-history-section");
const newWorkoutSection = document.getElementById("new-workout-section");
const workoutDetailsSection = document.getElementById("workout-details-section");

const newWorkoutButton = document.getElementById("new-workout-button");
const cancelWorkoutButton = document.getElementById("cancel-workout-button");
const backToHistoryButton = document.getElementById("back-to-history-button");

newWorkoutButton.addEventListener("click", function () {
  showSection(newWorkoutSection);
});

cancelWorkoutButton.addEventListener("click", function () {
  showSection(workoutHistorySection);
  clearWorkoutForm();
});

backToHistoryButton.addEventListener("click", function () {
  showSection(workoutHistorySection);
});

function showSection(sectionToShow) {
  workoutHistorySection.hidden = true;
  newWorkoutSection.hidden = true;
  workoutDetailsSection.hidden = true;

  sectionToShow.hidden = false;
}

showSection(workoutHistorySection);
renderWorkoutHistory(); 

const workoutDetailsDateText = document.getElementById(
  "workout-details-date-text",
);

const workoutExerciseRows = document.getElementById("workout-exercise-rows");

workoutHistoryList.addEventListener("click", function (event) {
  // event.target es donde hago click; closest("li") va hacia el li que lo contiene
  const clickedItem = event.target.closest("li");

  // Guarda: si hago click en <ul> pero fuera de cualquier fila, salimos, no hay <li>
  if (clickedItem === null) {
    return;
  }

  const index = Number(clickedItem.dataset.index);

  renderWorkoutDetails(index);
  showSection(workoutDetailsSection);
});

function renderWorkoutDetails(index) {
  let workoutExercisesHTML = "";

  workoutDetailsDateText.textContent = workouts[index].date;

  for (const exercise of workouts[index].exercises) {
    workoutExercisesHTML += `<tr>
        <td>${exercise.name}</td>
        <td>${exercise.sets}</td>
        <td>${exercise.reps}</td>
        <td>${exercise.weight}</td>
      </tr>`;
  }

  // Cuando el bucle termina, el texto está completo: se mete en la página una vez
  workoutExerciseRows.innerHTML = workoutExercisesHTML;
}

const addExerciseButton = document.getElementById("add-exercise-button");

const exerciseNameInput = document.getElementById("exercise-name-input");
const exerciseSetsInput = document.getElementById("exercise-sets-input");
const exerciseRepsInput = document.getElementById("exercise-reps-input");
const exerciseWeightInput = document.getElementById("exercise-weight-input");

let currentWorkoutExercises = []; // Aquí guardamos los ejercicios que va metiendo el usuario en la sección de Nuevo entrenamiento, antes de guardar el entrenamiento.

const currentWorkoutExerciseList = document.getElementById(
  "current-workout-exercise-list",
);

addExerciseButton.addEventListener("click", function () {
  const exerciseName = exerciseNameInput.value;
  const exerciseSets = Number(exerciseSetsInput.value);
  const exerciseReps = Number(exerciseRepsInput.value);
  const exerciseWeight = Number(exerciseWeightInput.value);

  const newExercise = {
    // Aquí va cada ejercicio que añadimos a los ejercicios registrados.
    name: exerciseName,
    sets: exerciseSets,
    reps: exerciseReps,
    weight: exerciseWeight,
  };

  currentWorkoutExercises.push(newExercise);

  let currentWorkoutExercisesHTML = "";

  for (const currentWorkoutExercise of currentWorkoutExercises) {
    currentWorkoutExercisesHTML += `
        <li>${currentWorkoutExercise.name} - ${currentWorkoutExercise.sets} - ${currentWorkoutExercise.reps} - ${currentWorkoutExercise.weight}</li>`;
  }

  currentWorkoutExerciseList.innerHTML = currentWorkoutExercisesHTML;

  exerciseNameInput.value = "";
  exerciseSetsInput.value = "";
  exerciseRepsInput.value = "";
  exerciseWeightInput.value = "";
});

function clearWorkoutForm() {
  workoutDateInput.value = "";

  exerciseNameInput.value = "";
  exerciseSetsInput.value = "";
  exerciseRepsInput.value = "";
  exerciseWeightInput.value = "";
  
  currentWorkoutExercises = [];

  currentWorkoutExerciseList.innerHTML = "";
}

// 1. Leer la fecha del input
const workoutDateInput = document.getElementById("workout-date-input");

const saveWorkoutButton = document.getElementById("save-workout-button");

function renderWorkoutHistory() {
  // Texto nuevo y vacío en cada llamada: nunca arrastra filas de antes
  let workoutHistoryHTML = "";

  // workouts guarda todos los entrenamientos y sort los ordena comparando las fechas de dos entrenamientos
  // Si la fecha de a es anterior a la de b, devuelve 1 para colocar a después que b; si es posterior, devuelve -1 para colocar a antes que b
  workouts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  // i guarda el índice del entrenamiento que estamos recorriendo y empieza en 0
  // En cada vuelta, workouts[i] guarda el entrenamiento que corresponde a ese índice y se añade su fila al historial
  for (let i = 0; i < workouts.length; i++) {
    workoutHistoryHTML += `<li data-index = "${i}">
        ${workouts[i].date} - ${workouts[i].exercises.length} ejercicios
    </li>`;
  }

  // Cuando el bucle termina, el texto está completo: se mete en la página una vez
  workoutHistoryList.innerHTML = workoutHistoryHTML;
}

saveWorkoutButton.addEventListener("click", function () {
  // Guarda: si NO hay ejercicios, avisa y corta aquí.
  if (currentWorkoutExercises.length === 0) {
    alert("Añade al menos un ejercicio antes de guardar el entrenamiento.");
    return; // Impide que se ejecute lo de abajo
  }

  // A partir de aquí solo llega si hay ejercicios.
  const newWorkoutDate = workoutDateInput.value;

  const newWorkout = {
    date: newWorkoutDate,
    exercises: currentWorkoutExercises, // La propiedad "exercises" guarda el array currentWorkoutExercises: los ejercicios añadidos con "Añadir ejercicio".
  };

  workouts.push(newWorkout);

  renderWorkoutHistory();

  clearWorkoutForm();

  showSection(workoutHistorySection);
});

// Intentos hasta que funciona: 15
