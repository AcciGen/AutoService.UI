import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HammaServicelarComponent } from './hamma-servicelar.component';

describe('HammaServicelarComponent', () => {
  let component: HammaServicelarComponent;
  let fixture: ComponentFixture<HammaServicelarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HammaServicelarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HammaServicelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
