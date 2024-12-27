import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user_records:any[]=[];
  data={
     name:"",
     email:"",
     password:"",
     mobile:"",
     address:""
  }
constructor(){
  this.user_records=JSON.parse(localStorage.getItem("users") || "{}");
}
}
