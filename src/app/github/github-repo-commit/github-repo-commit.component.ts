import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { GithubService } from '../../core/github.service';

import { Commit } from '../../entity/Commit';

@Component({
  selector: 'app-github-repo-commit',
  templateUrl: './github-repo-commit.component.html',
  styleUrls: ['./github-repo-commit.component.css']
})
export class GithubRepoCommitComponent implements OnInit {
    commits: Commit[];
    displayedColumns = ['authorfullname', 'created_at', 'message'];

    constructor(private route: ActivatedRoute, private router: Router, private githubService: GithubService) { }

    ngOnInit() {
        this.route.paramMap.switchMap((params: ParamMap) =>
        this.githubService.getCommits(params.get('full_name')))
        .subscribe(
            data => {
                this.commits = data;
            }
        );
    }
}
