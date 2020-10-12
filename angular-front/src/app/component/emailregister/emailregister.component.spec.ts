import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailregisterComponent } from './emailregister.component';

describe('EmailregisterComponent', () => {
  let component: EmailregisterComponent;
  let fixture: ComponentFixture<EmailregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
