import { Component, inject } from '@angular/core';
import { WorkoutData } from '../services/workout-data';

@Component({
  imports: [],
  selector: 'app-workout-history',
  styleUrl: './workout-history.css',
  templateUrl: './workout-history.html',
})
export class WorkoutHistory {
  protected workoutData = inject(WorkoutData);
}
