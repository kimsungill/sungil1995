import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankForReloadComponent } from './blank-for-reload.component';

describe('BlankForReloadComponent', () => {
  let component: BlankForReloadComponent;
  let fixture: ComponentFixture<BlankForReloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankForReloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankForReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
