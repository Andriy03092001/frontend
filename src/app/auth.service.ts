import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private router: Router) { }

get isAuthenticated() {
    return !!localStorage.getItem('token')
}

    register(credential) {
        this.http.post<any>('http://localhost:55933/api/account/', credential)
            .subscribe(res => {
                this.setToken(res);
            })
    }

    login(credential) {
        this.http.post<any>('http://localhost:55933/api/account/login', credential)
            .subscribe(res => {
                this.setToken(res);
            })
    }

    logout(){
        localStorage.removeItem('token');
    }

    setToken(res){
        localStorage.setItem('token', res);
        this.router.navigate(['/']);
    }
}
