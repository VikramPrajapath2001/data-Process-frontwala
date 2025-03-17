import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../../services/college.service';
import { DepartmentService } from '../../services/department.service';
import { BatchService } from '../../services/batch.service';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  colleges: any[] = [];
  departments: any[] = [];
  batches: any[] = [];
  students: any[] = [];

  searchText: string = '';

  constructor(
    private collegeService: CollegeService,
    private departmentService: DepartmentService,
    private batchService: BatchService,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    // Fetch colleges
    this.collegeService.getAllColleges().subscribe((data) => {
      this.colleges = data;
    });

    // Fetch departments
    this.departmentService.getAllDepartments().subscribe((data) => {
      this.departments = data;
    });

    // Fetch batches
    this.batchService.getAllBatches().subscribe((data) => {
      this.batches = data;
    });

    // Fetch students
    this.studentService.getAllStudents().subscribe((data) => {
      this.students = data;
    });
  }

  // Filter colleges by search text
  filteredColleges() {
    return this.colleges.filter((college) =>
      college.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Filter departments by search text
  filteredDepartments() {
    return this.departments.filter((department) =>
      department.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Filter batches by search text
  filteredBatches() {
    return this.batches.filter((batch) =>
      batch.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Filter students by search text
  filteredStudents() {
    return this.students.filter((student) =>
      student.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
