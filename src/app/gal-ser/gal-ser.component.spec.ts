import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalSerComponent } from './gal-ser.component';

describe('GalSerComponent', () => {
  let component: GalSerComponent;
  let fixture: ComponentFixture<GalSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
