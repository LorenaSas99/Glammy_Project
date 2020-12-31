import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticefemeiComponent } from './cosmeticefemei.component';

describe('CosmeticefemeiComponent', () => {
  let component: CosmeticefemeiComponent;
  let fixture: ComponentFixture<CosmeticefemeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmeticefemeiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticefemeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
