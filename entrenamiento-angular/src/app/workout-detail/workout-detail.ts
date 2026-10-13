import { Component, inject } from '@angular/core';
import { WorkoutData } from '../services/workout-data';

@Component({
  imports: [],
  selector: 'app-workout-detail',
  styleUrl: './workout-detail.css',
  templateUrl: './workout-detail.html',
})
export class WorkoutDetail {
  protected workoutData = inject(WorkoutData);
}
