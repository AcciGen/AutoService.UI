import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlavniComponent } from './glavni.component';

describe('GlavniComponent', () => {
  let component: GlavniComponent;
  let fixture: ComponentFixture<GlavniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlavniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlavniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
