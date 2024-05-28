import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersInfoComponent } from './pers-info.component';

describe('PersInfoComponent', () => {
  let component: PersInfoComponent;
  let fixture: ComponentFixture<PersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
