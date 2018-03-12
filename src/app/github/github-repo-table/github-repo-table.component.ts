import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../core/github.service';

import { GitRepository } from '../../entity/GitRepository';

@Component({
  selector: 'app-github-repo-table',
  templateUrl: './github-repo-table.component.html',
  styleUrls: ['./github-repo-table.component.css']
})
export class GithubRepoTableComponent implements OnInit {

    repositories: GitRepository[];
    displayedColumns = ['name', 'authorfullname', 'view_commit', 'view_open_pull_requests', 'view_closed_pull_requests'];

    constructor(private githubService: GithubService) { }

    ngOnInit() {
        this.githubService.getRepositories().subscribe(
            data => {
                    this.repositories = data;
                }
        );
    }
}
