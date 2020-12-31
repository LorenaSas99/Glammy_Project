import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncaltamintebarbatiComponent } from './incaltamintebarbati.component';

describe('IncaltamintebarbatiComponent', () => {
  let component: IncaltamintebarbatiComponent;
  let fixture: ComponentFixture<IncaltamintebarbatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncaltamintebarbatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncaltamintebarbatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
