import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { MatButton } from '@angular/material/button';

//Used for creating the buttons with proper api call
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  public isLoggedIn:Boolean=false; 

  constructor(private auth:AuthenticationService, private routes:Router){
    console.log('Inside OnInit...of AppComponent isLoggined value is', this.isLoggedIn);   
   // this.isLoggedIn=false;
  }

  // ngOnInit(){
  //   this.isLoggedIn=this.auth.isAuthenticated() ? true : false;
  //   console.log('Inside ngOnInit isLoggedIn value is',this.isLoggedIn);
  // }
  
  Logout(){
    this.auth.deleteToken();
    this.routes.navigate(['/login']);
  }  
}
