import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItiDetailsComponent } from './iti-details.component';

describe('ItiDetailsComponent', () => {
  let component: ItiDetailsComponent;
  let fixture: ComponentFixture<ItiDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItiDetailsComponent]
    });
    fixture = TestBed.createComponent(ItiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
