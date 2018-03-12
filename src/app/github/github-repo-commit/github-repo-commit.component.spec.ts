import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoCommitComponent } from './github-repo-commit.component';

describe('GithubRepoCommitComponent', () => {
  let component: GithubRepoCommitComponent;
  let fixture: ComponentFixture<GithubRepoCommitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRepoCommitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
