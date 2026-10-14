import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewWorkout } from './new-workout/new-workout';
import { WorkoutDetail } from './workout-detail/workout-detail';
import { WorkoutHistory } from './workout-history/workout-history';

@Component({
  imports: [RouterOutlet, NewWorkout, WorkoutDetail, WorkoutHistory], 
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
