import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinishaComponent } from './vinisha.component';

describe('VinishaComponent', () => {
  let component: VinishaComponent;
  let fixture: ComponentFixture<VinishaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinishaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
