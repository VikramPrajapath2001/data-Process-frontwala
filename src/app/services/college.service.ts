import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { College } from '../models/college';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  private apiUrl = 'http://localhost:9001/api/colleges';

  constructor(private http: HttpClient) {}

  getAllColleges(): Observable<College[]> {
    return this.http.get<College[]>(this.apiUrl);
  }

  getCollegeById(id: number): Observable<College> {
    return this.http.get<College>(`${this.apiUrl}/id/${id}`);
  }

  createCollege(college: College): Observable<College> {
    return this.http.post<College>(this.apiUrl, college);
  }

  updateCollegeName(id: number, name: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/name/${id}`, { name });
  }

  deleteCollege(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
