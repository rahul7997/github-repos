import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() gitUser;
  gitUserProps: any = [];

  constructor() { }

  ngOnInit(): void {
    // for(let prop in this.gitUser){
    //   this.gitUserProps.push(prop);
    // }
  }

}
