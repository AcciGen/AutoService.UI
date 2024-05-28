import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomlaComponent } from './nomla.component';

describe('NomlaComponent', () => {
  let component: NomlaComponent;
  let fixture: ComponentFixture<NomlaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NomlaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
