import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training.service';
import { Excercise } from '../excercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  excercises: Observable<any>;

  constructor(private trainingService: TrainingService, private db: AngularFirestore ) { }

  ngOnInit() {
   this.excercises = this.db.collection('availableExcercises').valueChanges();
  }

  onStartTraining(form: NgForm){
    this.trainingService.startExcercise(form.value.excercise);
  }

}
