import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:9001/api/students';

  constructor(private http: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`).pipe(
      catchError((error: any) => {
        console.error('Error fetching student data:', error);
        return throwError(error); // Optionally, provide a user-friendly error message here.
      })
    );
  }

  // updateStudentName(id: number, name: string): Observable<any> {
  //   return this.http.put(`${this.apiUrl}/name/${id}`, { name });
  // }
  updateStudentName(id: number, name: string): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.put(`${this.apiUrl}/name/${id}`, { name }, { headers });
  }


  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
