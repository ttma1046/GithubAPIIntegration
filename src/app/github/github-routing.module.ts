import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GithubRepoTableComponent } from './github-repo-table/github-repo-table.component';
import { GithubRepoCommitComponent } from './github-repo-commit/github-repo-commit.component';
import { GithubRepoPrComponent } from './github-repo-pr/github-repo-pr.component';

const githubRoutes: Routes = [
  { path: 'gitrepos',  component: GithubRepoTableComponent },
  { path: 'gitcommits/:full_name', component: GithubRepoCommitComponent },
  { path: 'gitprs/:full_name/:state', component: GithubRepoPrComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(githubRoutes)
  ]
})
export class GithubRoutingModule { }
