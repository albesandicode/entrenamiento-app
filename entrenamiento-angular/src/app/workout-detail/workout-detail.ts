import { Component, inject } from '@angular/core';
import { WorkoutData } from '../services/workout-data';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-workout-detail',
  styleUrl: './workout-detail.css',
  templateUrl: './workout-detail.html',
})
export class WorkoutDetail {
  protected workoutData = inject(WorkoutData);
}
