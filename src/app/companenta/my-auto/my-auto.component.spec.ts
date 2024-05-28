import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAutoComponent } from './my-auto.component';

describe('MyAutoComponent', () => {
  let component: MyAutoComponent;
  let fixture: ComponentFixture<MyAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyAutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
