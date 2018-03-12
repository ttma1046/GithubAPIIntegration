import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GitRepository } from '../entity/GitRepository';
import { Commit } from '../entity/Commit';
import { PullRequest } from '../entity/PullRequest';

import {  } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic bWF5YmUxMDQ2OkNhbXBhaWduTW9uaXRvcjEyMw=='
  })
};


@Injectable()
export class GithubService {
  constructor(private http: HttpClient) {}
   baseUrl = 'https://api.github.com';

   getRepositories() {
       return this.http.get<GitRepository[]>(`${this.baseUrl}/users/maybe1046/repos`);
   }

   getCommits(fullName: string) {
       return this.http.get<Commit[]>(`${this.baseUrl}/repos/${fullName}/commits`);
   }

   getPRs(fullName: string, state: string) {
       return this.http.get<PullRequest[]>(`${this.baseUrl}/repos/${fullName}/pulls?state=${state}`);
   }

   mergePR(fullName: string, number: number, sha: string) {
       console.log(fullName, number);
       return this.http.put(`${this.baseUrl}/repos/${fullName}/pulls/${number}/merge`,
         {
           commit_title: 'Merge',
           sha: sha,
         }, httpOptions);
   }
}
