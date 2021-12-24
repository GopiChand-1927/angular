import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-insert',
  templateUrl: './student-insert.component.html',
  styleUrls: ['./student-insert.component.less']
})
export class StudentInsertComponent implements OnInit {
  s:Student=new Student();

  constructor(private hc:HttpClient) { 

  }
save(){
  this.hc.post("https://basicstudentapp.herokuapp.com/students/insertStudent",this.s).subscribe((data)=>{
    alert("inserted succesfully")

  },
  (error)=>{
alert("insertion failed")
  }
  );
}
  ngOnInit(): void {
  }
 
}
