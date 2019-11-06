import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanteDetalleComponent } from './vacante-detalle.component';

describe('VacanteDetalleComponent', () => {
  let component: VacanteDetalleComponent;
  let fixture: ComponentFixture<VacanteDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacanteDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacanteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
