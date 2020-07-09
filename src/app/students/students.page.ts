import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {
  students: Student[];
  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    console.log('ng On init');
  }

  ionViewWillEnter()
  {
    this.students = this.studentService.getAllStudents();
    console.log('ION Will Enter');
  }
  ionViewDidEnter()
  {
    console.log('ION Did Enter');
  }
  ionViewWillLeave()
  {
    console.log('ION Will Leave');
  }
  ionViewDidLeave()
  {
    console.log('ION Did Leave');
  }

}
