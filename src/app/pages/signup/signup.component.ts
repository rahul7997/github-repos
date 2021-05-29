import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: any;

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSignup(f: NgForm){
    const email = f.value.email;
    const password = f.value.password;
    this.authService.signUp(email, password).then((res) => {
      this.router.navigateByUrl('/');
      this.toastr.success('Signup successful');
    }).catch((err)=> {
      this.error = err;
      this.toastr.error('Signup failed !')
      // console.log(err);
    });
  }

}
