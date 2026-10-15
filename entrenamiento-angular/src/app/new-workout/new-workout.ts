import { Component, inject } from '@angular/core';
import { WorkoutData } from '../services/workout-data'; 
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-new-workout',
  styleUrl: './new-workout.css',
  templateUrl: './new-workout.html',
})
export class NewWorkout {
  protected workoutData = inject(WorkoutData);
}
