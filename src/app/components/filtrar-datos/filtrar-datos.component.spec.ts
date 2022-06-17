import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarDatosComponent } from './filtrar-datos.component';

describe('FiltrarDatosComponent', () => {
  let component: FiltrarDatosComponent;
  let fixture: ComponentFixture<FiltrarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
