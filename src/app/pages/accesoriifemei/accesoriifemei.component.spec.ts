import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriifemeiComponent } from './accesoriifemei.component';

describe('AccesoriifemeiComponent', () => {
  let component: AccesoriifemeiComponent;
  let fixture: ComponentFixture<AccesoriifemeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesoriifemeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoriifemeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
