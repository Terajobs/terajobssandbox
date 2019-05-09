import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantesListadoComponent } from './vacantes-listado.component';

describe('VacantesListadoComponent', () => {
  let component: VacantesListadoComponent;
  let fixture: ComponentFixture<VacantesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacantesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
