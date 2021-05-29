import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { faBook, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string;
  faSignInAlt = faSignInAlt;
  faSignOutAlt = faSignOutAlt;
  faBook = faBook;
  faUser = faUser;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {
    authService.getUser().subscribe((user) => {
      this.email = user?.email;
    })
   }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try{
      const res = await this.authService.signOut();
      this.router.navigateByUrl("/signin");
      this.toastr.info("Logged out. Please login again to continue");  
      this.email = null; 
    } catch(error){
      this.toastr.error("Something is wrong .")
    }
  }




}
