import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { LoginData } from 'src/app/interfaces/login-data.interface';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  users: any = [];
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private db: AngularFireDatabase
  ) {
    const usersRef = db.list('users');
    


    usersRef.valueChanges().subscribe(snap => {
      if (snap != null){

        this.users.push(snap);
     //   console.log(this.users);
      }
        
    })
   // console.log(this.users);
    
  }

  ngOnInit(): void {
    
  }

  login(loginData: LoginData) {
    
    var user = loginData.email;
  
    var hasMatch =false;

    for (var index = 0; index < this.users[0].length; index++) {
    
     var emaill = this.users[0][index];
     
     if(emaill.email == loginData.email){
      console.log(emaill.email);
      if(emaill.isadmin==true){
        hasMatch = true;
        break;
      }
       
     }
    }
    console.log(hasMatch); 
   
   
    if(hasMatch==true){

    this.authService
      .login(loginData)
      .then(() => this.router.navigate(['/dashboard'],{queryParams: {user:"Admin"}}))
      .catch((e) => console.log(e.message)); 
  }
  
  }
  loginWithGoogle() {
    this.authService
      .loginWithGoogle()
      .then(() => this.router.navigate(['/dashboard']))
      .catch((e) => console.log(e.message));
  }
}