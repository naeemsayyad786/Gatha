import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){

  }
         registerbtn(){
               this.router.navigate(["/register"])
         }
         loginbtn(){
          this.router.navigate(["/login"])
         }
         profilebtn(){
          this.router.navigate(["/profile"])
         }
}
