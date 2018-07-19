import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent {
 questions;
 constructor(private api: ApiService, private rout:ActivatedRoute){}

 ngOnInit(){
  var quizId=this.rout.snapshot.paramMap.get('quizId');
  this.api.getQuestions(quizId).subscribe(res => {
    this.questions=res;
});
 }
}
