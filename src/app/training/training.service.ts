import { Subject } from 'rxjs/Subject';
import { Excercise } from "./excercise.model";

export class TrainingService{

  excerciseChanged = new Subject<Excercise>();

  private availableExcercises: Excercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  ];

  private runningExcercise: Excercise;

  getAvailableExcercises(){
    return this.availableExcercises.slice();
  }

  startExcercise(selectedId: string){
    this.runningExcercise = this.availableExcercises.find(ex => ex.id == selectedId);
    this.excerciseChanged.next({...this.runningExcercise});
  }
}