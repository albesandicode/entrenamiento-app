import { Component, inject } from '@angular/core';
import { WorkoutData } from '../services/workout-data'; 

@Component({
  imports: [], 
  selector: 'app-new-workout',
  styleUrl: './new-workout.css',
  templateUrl: './new-workout.html',
})
export class NewWorkout {
  protected workoutData = inject(WorkoutData);
}
