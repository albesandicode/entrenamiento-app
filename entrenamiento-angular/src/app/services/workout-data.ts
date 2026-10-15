import { Service } from '@angular/core';
import { Workout } from '../models/workout.model';

@Service()
export class WorkoutData {
  workouts: Workout[] = [
    {
      id: 1,
      date: '2026-09-19',
      exercises: [
        {
          name: 'Peso muerto',
          weight: 36,
          targetSets: 3,
          targetRepsPerSet: 6,
          sets: [
            { reps: 6, rir: 3 },
            { reps: 6, rir: 2 },
            { reps: 6, rir: 2 },
          ],
        },
        { name: 'Floor press con barra', weight: 24, targetSets: 4, targetRepsPerSet: 8, sets: [] },
        { name: 'Remo con barra', weight: 24, targetSets: 4, targetRepsPerSet: 10, sets: [] },
        { name: 'Press militar de pie', weight: 20, targetSets: 3, targetRepsPerSet: 8, sets: [] },
        { name: 'Pájaros', weight: 4, targetSets: 3, targetRepsPerSet: 17, sets: [] },
        { name: 'Zancadas', weight: 6, targetSets: 3, targetRepsPerSet: 15, sets: [] },
      ],
    },
    {
      id: 2,
      date: '2026-09-20',
      exercises: [
        { name: 'Sentadillas', weight: 26, targetSets: 3, targetRepsPerSet: 8, sets: [] },
        { name: 'Peso muerto rumano', weight: 32, targetSets: 3, targetRepsPerSet: 10, sets: [] },
      ],
    },
    {
      id: 3,
      date: '2026-09-21',
      exercises: [
        {
          name: 'Peso muerto',
          weight: 38,
          targetSets: 3,
          targetRepsPerSet: 6,
          sets: [
            { reps: 6, rir: 3 },
            { reps: 6, rir: 2 },
            { reps: 5, rir: 1 },
          ],
        },
        { name: 'Floor press con barra', weight: 28, targetSets: 4, targetRepsPerSet: 8, sets: [] },
        { name: 'Remo con barra', weight: 26, targetSets: 4, targetRepsPerSet: 10, sets: [] },
        { name: 'Press militar de pie', weight: 22, targetSets: 3, targetRepsPerSet: 8, sets: [] },
      ],
    },
  ];

  constructor() {
    this.workouts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }

      if (a.date > b.date) {
        return -1;
      }

      return 0;
    });
  }
}
