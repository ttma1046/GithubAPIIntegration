import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { GithubService } from '../../core/github.service';

import { PullRequest } from '../../entity/PullRequest';

@Component({
  selector: 'app-github-repo-pr',
  templateUrl: './github-repo-pr.component.html',
  styleUrls: ['./github-repo-pr.component.css']
})
export class GithubRepoPrComponent implements OnInit {

    pullrequests: PullRequest[];
    displayedColumns = ['title', 'state', 'body', 'merge'];
    state: string;

    private full_name: string;
    constructor(private route: ActivatedRoute, private router: Router, private githubService: GithubService) { }

    ngOnInit() {
        this.getPRs();
    }

    getPRs(): void {
        this.route.paramMap.switchMap((params: ParamMap) => {
            this.full_name = params.get('full_name');
            this.state = params.get('state');

            if (this.state === 'close') {
                this.displayedColumns.splice(this.displayedColumns.indexOf('merge'), 1);
            }

            return this.githubService.getPRs(params.get('full_name'), params.get('state'));
        }).subscribe(
            data => {
                this.pullrequests = data;
            }
        );
    }

    mergePR(numb: number, sha: string): void {
        this.githubService.mergePR(this.full_name, numb, sha).subscribe(
            data => {
                    this.getPRs();
                });
    }
}
