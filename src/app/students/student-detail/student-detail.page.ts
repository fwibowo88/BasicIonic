import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private studentService:StudentsService,
    private router:Router,
    private alertCtrl:AlertController) { }

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

  onDeleteStudent(){
    this.alertCtrl.create({
      header:'Warning !!',
      message:'Do u really want to delete the Student?',
      buttons: [
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          handler: ()=>{
            this.studentService.deleteStudent(this.loadedStudent.id);
            this.router.navigate(['/students']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}
