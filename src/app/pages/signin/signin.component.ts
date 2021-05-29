import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  error: any;

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSignin(f: NgForm){
    const {email, password} = f.value;
    this.authService.signIn(email, password).then((res) => {
      this.router.navigateByUrl('/');
      this.toastr.success('Login Successful', '', {timeOut: 1000});
    }).catch((err) => {
      this.toastr.error('Login failed !');
      this.error = err;
    });
  }

}
