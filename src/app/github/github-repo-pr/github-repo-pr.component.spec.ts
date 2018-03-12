import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoPrComponent } from './github-repo-pr.component';

describe('GithubRepoPrComponent', () => {
  let component: GithubRepoPrComponent;
  let fixture: ComponentFixture<GithubRepoPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubRepoPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
