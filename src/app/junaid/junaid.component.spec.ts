import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JunaidComponent } from './junaid.component';

describe('JunaidComponent', () => {
  let component: JunaidComponent;
  let fixture: ComponentFixture<JunaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JunaidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JunaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
