import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'nav',
    template: `
    <mat-toolbar>
    <strong>Quiz App </strong>
        <button mat-button routerLink="/">Quiz</button>
        <span style="flex:1 1 auto"></span>
        <button mat-button routerLink="/login">Login</button>
        <button mat-button routerLink="/register">Register</button>

        <button mat-button (click)="auth.logout()">Logout</button>
        
    </mat-toolbar>
    `,
})
export class NavComponent {                                                                                                        
     /**
      *
      */
     constructor(private auth:AuthService) {
              
     }
}


