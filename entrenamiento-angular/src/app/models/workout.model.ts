export interface ExerciseSet {
  // Cada set que se realiza en un ejercicio
  reps: number;
  rir: number;
}

export interface WorkoutExercise {
  // El ejercicio que se realiza en un entrenamiento
  name: string;
  weight: number;
  targetSets: number;
  targetRepsPerSet: number;
  sets: ExerciseSet[];
}

export interface Exercise {
  // El ejercicio que se puede realizar en un entrenamiento
  name: string;
  increment: number;
}

export interface Workout {
  // Un entrenamiento completo
  id: number; // id del entrenamiento, para poder mostrar el detalle de este
  date: string; // string porque lo que llega del formulario y del JSON es texto. Si pusiera Date, TypeScript se lo cree, y al ejecutar da error porque el texto no tiene el método getDay, que solo existe en los objetos Date
  exercises: WorkoutExercise[];
}