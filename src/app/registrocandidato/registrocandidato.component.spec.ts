import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrocandidatoComponent } from './registrocandidato.component';

describe('RegistrocandidatoComponent', () => {
  let component: RegistrocandidatoComponent;
  let fixture: ComponentFixture<RegistrocandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrocandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrocandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
