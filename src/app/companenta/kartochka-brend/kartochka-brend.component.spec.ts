import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartochkaBrendComponent } from './kartochka-brend.component';

describe('KartochkaBrendComponent', () => {
  let component: KartochkaBrendComponent;
  let fixture: ComponentFixture<KartochkaBrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KartochkaBrendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KartochkaBrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
