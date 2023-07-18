import { Component,OnInit, inject } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {


  exercises:Exercise[] = []
  item$: Observable<Exercise[]>;
  db:Firestore = inject(Firestore)

  constructor(private trainingService:TrainingService ){}

  ngOnInit(): void {
 this.exercises = this.trainingService.getAvailableExercise();
    /*   collectionData('availableExercise') */
   /*   this.db.collection('collectionData').valueChanges() */
    /*   this.item$ = collectionData(itemCollection) */
   const itemCollection = collection(this.db, 'availableExercise');
   this.item$ = collectionData(itemCollection) as Observable<Exercise[]>;
   this.item$.subscribe(result =>{
    console.log(result)
   })
  }
  onStartTraning(form:NgForm){
    this.trainingService.startExercise(form.value.exercise)
  }
}
