import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../students.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {
  loadedStudent:Student;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private studentService:StudentsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('studentID')){
        //Redirect
        return;
      }
      const studentID = paramMap.get('studentID');
      this.loadedStudent = this.studentService.getStudent(studentID)
    });
  }

}
