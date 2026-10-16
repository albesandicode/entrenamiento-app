import { Routes } from '@angular/router';
import { WorkoutHistory } from './workout-history/workout-history';
import { NewWorkout } from './new-workout/new-workout';

export const routes: Routes = [
  { path: '', redirectTo: 'historial', pathMatch: 'full' },
  { path: 'historial', component: WorkoutHistory },
  { path: 'nuevo', component: NewWorkout },
];
