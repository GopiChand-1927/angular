import { Component} from '@angular/core';
import {Student} from '../student-insert/student';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.less']
})
export class StudentDeleteComponent {
   
  s=new Student();
  constructor(private hc:HttpClient) { 
   

  }
delete(){
  this.hc.delete("https://basicstudentapp.herokuapp.com/students/deleteStudent/"+this.s.id).subscribe((data)=>{
  alert("deleted succesfully")
},
  (error)=>{
alert("deletion failed")
  }
  );
}
  
}
