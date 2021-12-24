import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.less']
})
export class StudentListComponent  {

  students:any[]=[];
  constructor(private hc:HttpClient ){
    this.hc.get("https://basicstudentapp.herokuapp.com/students/getAllStudents").subscribe((data)=>{
      console.log(data)
      this.students=<any[]>data;
    },
(error)=>{
  alert("data load failed")
}
);

  }

}