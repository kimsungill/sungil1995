import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamintroComponent } from './teamintro.component';

describe('TeamintroComponent', () => {
  let component: TeamintroComponent;
  let fixture: ComponentFixture<TeamintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
