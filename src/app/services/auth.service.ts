import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) { }

    // Register User
    register(userData: any): Observable<any> {
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
}
