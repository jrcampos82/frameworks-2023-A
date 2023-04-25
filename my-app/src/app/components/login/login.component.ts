import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isError = false;
  isSuccess = false;

  user = ""
  pwd = ""


  login(){
    this.isError = true;

    if(this.user == "beto" && this.pwd == "beto"){
      this.isSuccess = true;
      this.isError = false;
    } else {
      this.isError = true;
      this.isSuccess = false;
    }

    // user == "beto@beto.com" pwd="beto"

    // console.log("User = " + this.user + " Password = " + this.pwd)

  }

}
