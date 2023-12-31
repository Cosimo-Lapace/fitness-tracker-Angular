import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';
import { Subject } from 'rxjs';

@Injectable()
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private availableExercise: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];
  private runningExercise: Exercise;
  private exercise: Exercise[] = [];
  getAvailableExercise() {
    return this.availableExercise.slice();
  }

  startExercise(selectId: string) {
    this.runningExercise = this.availableExercise.find(
      (ex) => ex.id === selectId
    );
    this.exerciseChanged.next({
      ...this.runningExercise,
    });
  }

  completeExercise() {
    this.exercise.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress:number) {
    this.exercise.push({
      ...this.runningExercise,
      duration:this.runningExercise.duration * (progress / 100),
      calories:this.runningExercise.calories * (progress /100),
      date: new Date(),
      state: 'cancelled',
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  getRunningExercise() {
    return { ...this.runningExercise };
  }

  getCompletedorCanceledExercise(){
    return this.exercise.slice();
  }
}
