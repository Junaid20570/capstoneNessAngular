import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondComponent } from './bond.component';

describe('BondComponent', () => {
  let component: BondComponent;
  let fixture: ComponentFixture<BondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondComponent]
    });
    fixture = TestBed.createComponent(BondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
