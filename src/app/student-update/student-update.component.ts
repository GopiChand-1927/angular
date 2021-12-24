import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../student-insert/student';
@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.less']
})
export class StudentUpdateComponent {
  
  s=new Student();

  constructor(private hc:HttpClient) { 

  }
update(){
  this.hc.put("https://basicstudentapp.herokuapp.com/students/updateStudent",this.s).subscribe((data)=>{
    alert("updated succesfully")

  },
  (error)=>{
alert("update failed")
  }
  );
}
  ngOnInit(): void {
  }

}
