import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

interface UserResponse {
  message: string,
  token: string,
  user : User 
}

interface User {
  id: string,
  name: string,
  email: string,
  role: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl = 'http://localhost:5000/api/users';
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable(); // Observable for other components


  constructor(private http: HttpClient) { }

    // Register User
    register(userData: any): Observable<any> {
      console.log(userData)
      return this.http.post(`${this.apiUrl}/register`, userData);
    }
  
    // Check if Email Exists
    checkEmail(email: string): Observable<any> {
      return this.http.post(`${this.apiUrl}/check-email`, { email });
    }
  
    // Verify Email (Optional)
    verifyEmail(token: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/verify-email`, { params: { token } });
    }

    login(credentials: any): Observable<UserResponse> {
      return this.http.post<UserResponse>(`${this.apiUrl}/login`, credentials).pipe(
        tap(response => {
          console.log(response)
          this.userSubject.next(response.user); // Store user data
          localStorage.setItem('user', JSON.stringify(response.user)); // Optional: Persist user data
        })
      );;
    }

    // login(credentials: { email: string; password: string }): Observable<any> {
    //   return this.http.post<any>('YOUR_LOGIN_API_ENDPOINT', credentials).pipe(
    //     tap(response => {
    //       this.userSubject.next(response.user); // Store user data
    //       localStorage.setItem('user', JSON.stringify(response.user)); // Optional: Persist user data
    //     })
    //   );
    // }

    getUser(): Observable<any> {
      return this.user$;
    }
    
}
