import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiraeDetailsComponent } from './mirae-details.component';

describe('MiraeDetailsComponent', () => {
  let component: MiraeDetailsComponent;
  let fixture: ComponentFixture<MiraeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiraeDetailsComponent]
    });
    fixture = TestBed.createComponent(MiraeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
