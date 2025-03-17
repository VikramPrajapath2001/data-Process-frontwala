import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = 'http://localhost:9001/api/departments';

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}`);
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }

  getDepartmentByNameAndCollegeId(
    name: string,
    collegeId: number
  ): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${collegeId}/${name}`);
  }

  updateDepartmentName(id: number, name: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/name/${id}`, { name });
  }

  deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
