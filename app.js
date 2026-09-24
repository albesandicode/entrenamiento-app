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

let workoutHistoryHTML = "";

for (const workout of workouts) {
  workoutHistoryHTML += `<li>
        ${workout.date} - ${workout.exercises.length} ejercicios
    </li>`;
}

const workoutDetailsDateText = document.getElementById("workout-details-date-text");

workoutDetailsDateText.textContent = workouts[0].date;

workoutHistoryList.innerHTML = workoutHistoryHTML;

const workoutExerciseRows = document.getElementById("workout-exercise-rows");

let workoutExercisesHTML = "";

for (const exercise of workouts[0].exercises) {
  workoutExercisesHTML += `<tr>
        <td>${exercise.name}</td>
        <td>${exercise.sets}</td>
        <td>${exercise.reps}</td>
        <td>${exercise.weight}</td>
    </tr>`;
}

workoutExerciseRows.innerHTML = workoutExercisesHTML;

const addExerciseButton = document.getElementById("add-exercise-button");

const exerciseNameInput = document.getElementById("exercise-name-input");
const exerciseSetsInput = document.getElementById("exercise-sets-input");
const exerciseRepsInput = document.getElementById("exercise-reps-input");
const exerciseWeightInput = document.getElementById("exercise-weight-input");

const currentWorkoutExercises = []; // Aquí guardamos los ejercicios que va metiendo el usuario en la sección de Nuevo entrenamiento, antes de guardar el entrenamiento.

const currentWorkoutExerciseList = document.getElementById("current-workout-exercise-list");

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

// 1. Leer la fecha del input
const workoutDateInput = document.getElementById("workout-date-input");

const saveWorkoutButton = document.getElementById("save-workout-button");

saveWorkoutButton.addEventListener("click", function () {
  const newWorkoutDate = workoutDateInput.value;

  const newWorkout = {
    date: newWorkoutDate,
    exercises: currentWorkoutExercises, // La propiedad "ejercicios" guarda el array ejerciciosEnCurso: los ejercicios añadidos con "Añadir ejercicio".
  };

  workouts.push(newWorkout);

  console.log(workouts);
});

// Intentos hasta que funciona: 15
