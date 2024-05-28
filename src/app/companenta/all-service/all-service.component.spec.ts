import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServiceComponent } from './all-service.component';

describe('AllServiceComponent', () => {
  let component: AllServiceComponent;
  let fixture: ComponentFixture<AllServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
