import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrendPloshadki1920Component } from './brend-ploshadki-1920.component';

describe('BrendPloshadki1920Component', () => {
  let component: BrendPloshadki1920Component;
  let fixture: ComponentFixture<BrendPloshadki1920Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrendPloshadki1920Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrendPloshadki1920Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
