import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestComponent } from './newest.component';

describe('NewestComponent', () => {
  let component: NewestComponent;
  let fixture: ComponentFixture<NewestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
