import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  gitUsername: string;
  gitUser: any;
  error: any;
  user: any;

  constructor(private githubService: GithubService, 
    private toastr: ToastrService, 
    private changeDetectorRef: ChangeDetectorRef, 
    private authService: AuthService,
    private router: Router) {
      this.authService.getUser().subscribe((user) => {
        this.user = user;
      }, (err) => {
        this.user = null;
      }) 
  }

  ngOnInit(): void {
  }

  handleGithubSearch(){
    if(this.user){
      this.githubService.getUserDetails(this.gitUsername).subscribe((res) => {
        this.gitUser = res;
        this.error = null;
        this.changeDetectorRef.detectChanges();
      },
        (err) => {
          this.gitUser = null;
          this.error = 'User not found. Please enter the correct username';
          this.toastr.error('User not found. Please enter the correct username');
        }
      );
    } else {
      this.toastr.info('Please Sign In');
      this.router.navigateByUrl('/signin');
    }
  }

}
