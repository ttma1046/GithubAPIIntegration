import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoTableComponent } from './github-repo-table.component';

describe('GithubRepoTableComponent', () => {
  let component: GithubRepoTableComponent;
  let fixture: ComponentFixture<GithubRepoTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRepoTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
