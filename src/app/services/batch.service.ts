import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Batch } from '../models/batch';

@Injectable({
  providedIn: 'root',
})
export class BatchService {
  private apiUrl = 'http://localhost:9001/api/batches';

  constructor(private http: HttpClient) {}

  getAllBatches(): Observable<Batch[]> {
    return this.http.get<Batch[]>(this.apiUrl);
  }

  getBatchById(id: number): Observable<Batch> {
    return this.http.get<Batch>(`${this.apiUrl}/${id}`);
  }

  getBatchesByDepartment(departmentId: number): Observable<Batch[]> {
    return this.http.get<Batch[]>(`${this.apiUrl}/departments/${departmentId}/batches`);
  }
  updateBatchStaffName(id: number, name: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/staff/${id}`, { name });
  }

  deleteStudentFromBatch(studentId: number, batchId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/batches/${batchId}/students/${studentId}`
    );
  }


  deleteBatch(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
