import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../../services/college.service';
import { College } from '../../models/college';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css'],
})
export class CollegeListComponent implements OnInit {
  colleges: College[] = [];

  constructor(private collegeService: CollegeService) {}

  ngOnInit(): void {
    this.collegeService.getAllColleges().subscribe((data) => {
      this.colleges = data;
    });
  }
}
