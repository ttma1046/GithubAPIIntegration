import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatButtonModule } from '@angular/material';
import { GithubRoutingModule } from './github-routing.module';
import { GithubRepoTableComponent } from './github-repo-table/github-repo-table.component';
import { GithubRepoCommitComponent } from './github-repo-commit/github-repo-commit.component';
import { GithubRepoPrComponent } from './github-repo-pr/github-repo-pr.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    GithubRoutingModule
  ],
  declarations: [ GithubRepoTableComponent, GithubRepoCommitComponent, GithubRepoPrComponent ]
})
export class GithubModule { }
