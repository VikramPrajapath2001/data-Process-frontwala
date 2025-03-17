import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = []; // Array to store all departments

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getAllDepartments().subscribe(
      (data) => {
        this.departments = data; // Assign the fetched departments to the array
      },
      (error) => {
        console.error('Error fetching departments:', error);
      }
    );
  }
}
