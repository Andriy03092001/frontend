import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatCardModule,MatListModule } from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { QuestionComponent } from './question.component';
import { ApiService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { QuestionsComponent } from './questions.component';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav.component';
import { QuizComponent} from './quiz.component';
import { QuizzesComponent } from './quizzes.componet';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interseptor';
import { LoginComponent } from './login.component';
const routes = [
{path:'', component:HomeComponent},
{path:'question', component:QuestionComponent}, 
{path:'question/:quizId', component:QuestionComponent}, 
{path:'quiz', component:QuizComponent},
{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent, QuestionComponent,QuestionsComponent,HomeComponent,NavComponent,QuizComponent,QuizzesComponent,RegisterComponent,LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatInputModule, 
    MatCardModule,
    FormsModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
