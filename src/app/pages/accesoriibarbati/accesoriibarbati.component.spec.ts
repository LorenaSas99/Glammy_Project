import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriibarbatiComponent } from './accesoriibarbati.component';

describe('AccesoriibarbatiComponent', () => {
  let component: AccesoriibarbatiComponent;
  let fixture: ComponentFixture<AccesoriibarbatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriibarbatiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriibarbatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
