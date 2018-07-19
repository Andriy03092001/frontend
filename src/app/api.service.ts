import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
private selectedquestion = new Subject<any>();
questionSelected = this.selectedquestion.asObservable(); 

private selectedquiz = new Subject<any>();
quizSelected = this.selectedquiz.asObservable(); 

  constructor(private http: HttpClient ) {}

   getQuestions(quizId){
     return this.http.get(`http://localhost:55933/api/Questions/${quizId}`);
   }

   getQuiz(){
    return this.http.get('http://localhost:55933/api/quiz');
  }

   postQuestion(question){
      this.http.post('http://localhost:55933/api/Questions',question).subscribe(res=> {});
   }

   postQuiz(quiz){
    this.http.post('http://localhost:55933/api/quiz',quiz).subscribe(res=> {});
   }


   putQuestion(question){
    this.http.put(`http://localhost:55933/api/Questions/${question.id}`,question).subscribe(res=> {});
   }

   putQuiz(quiz){
    this.http.put(`http://localhost:55933/api/Quiz/${quiz.id}`,quiz).subscribe(res=> {});
   }

   selectedQuiz(quiz){
    return this.selectedquiz.next(quiz);
   }
  

}
