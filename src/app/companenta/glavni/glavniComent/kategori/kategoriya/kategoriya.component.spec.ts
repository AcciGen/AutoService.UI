import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriyaComponent } from './kategoriya.component';

describe('KategoriyaComponent', () => {
  let component: KategoriyaComponent;
  let fixture: ComponentFixture<KategoriyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KategoriyaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KategoriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
