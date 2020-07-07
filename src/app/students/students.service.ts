import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private students: Student[] = [
    {
      id:'s1',
      name:'John Doe',
      photo: 'https://i.pinimg.com/originals/35/4f/1a/354f1a5476d8a48a655611a847f726cf.png',
      hobbies: ['Sport','Singing','Travelling']
    },
    {
      id:'s2',
      name:'Nobita Nobi',
      photo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/21c77039-c68a-4ad9-b6e3-fa31d39a7c4e/d8vtcbc-9f0e08ff-1ab4-43c0-b1f6-9d9347bf95da.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjFjNzcwMzktYzY4YS00YWQ5LWI2ZTMtZmEzMWQzOWE3YzRlXC9kOHZ0Y2JjLTlmMGUwOGZmLTFhYjQtNDNjMC1iMWY2LTlkOTM0N2JmOTVkYS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.ksCJ1eIJO3pmR1NP0CXNMiEGCA7oE0NnJb9Qkd5Y01o',
      hobbies: ['Travelling','Drawing','Eating']
    }
  ]
  constructor() { }

  getAllStudents() {
    return [...this.students];
  }

  getStudent(studentID:string){
    return {
      ...this.students.find(student => {
      return student.id === studentID;
    })};
  }

  deleteStudent(studentID:string){
    this.students = this.students.filter(student=>{
      return student.id !== studentID;
    });
  }
}
