import { Component, OnInit } from '@angular/core';
import { BatchService } from '../../services/batch.service';
import { Batch } from '../../models/batch';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css'],
})
export class BatchListComponent implements OnInit {
  batches: Batch[] = [];

  constructor(private batchService: BatchService, private studentService: StudentService) {}

  ngOnInit(): void {
    this.batchService.getAllBatches().subscribe(
      (data: Batch[]) => {
        this.batches = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching batches:', error);
      }
    );
  }

  fetchBatchesByDepartment(departmentId: number): void {
    this.batchService.getBatchesByDepartment(departmentId).subscribe(
      (data: Batch[]) => {
        this.batches = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching batches:', error);
      }
    );
  }

  updateStudent(studentId: number): void {
    const newName = prompt('Enter new name for the student:');
    if (newName) {
      this.studentService.updateStudentName(studentId, newName).subscribe(
        () => {
          alert('Student name updated successfully');
          this.refreshBatches();
        },
        (error: HttpErrorResponse) => {
          console.error('Error updating student name:', error);
          alert('Failed to update student name.');
        }
      );
    }
  }

  deleteStudent(studentId: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(studentId).subscribe(
        () => {
          alert('Student deleted successfully');
          this.refreshBatches();
        },
        (error: HttpErrorResponse) => {
          console.error('Error deleting student:', error);
          alert('Failed to delete student.');
        }
      );
    }
  }

  refreshBatches(): void {
    this.batchService.getAllBatches().subscribe(
      (data: Batch[]) => {
        this.batches = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error refreshing batches:', error);
      }
    );
  }
}
