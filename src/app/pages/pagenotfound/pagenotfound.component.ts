import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  redirectMessage: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.redirectMessage = true;
    }, 2000);
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 3000);
  }

}
