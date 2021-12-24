import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.less']
})
export class ServerComponent implements OnInit {

  users:any[]=[];
  constructor(private hc:HttpClient ){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getDataFromServer(){
    this.hc.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>{
      console.log(data)
      this.users=<any[]>data;
    })

}

}
