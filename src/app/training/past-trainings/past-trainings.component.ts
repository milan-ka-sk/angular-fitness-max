import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Excercise} from '../excercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.css']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Excercise>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExcercises();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

}
