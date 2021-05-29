import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  repos = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.repoUrl){
      this.githubService.getRepos(this.repoUrl).subscribe((res) => {
        this.repos = Object.values(res);
      }, (err) => {
        this.repos = [];
      });
    }
  }

}
 