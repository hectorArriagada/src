import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashAlumnoPage } from './dash-alumno.page';

describe('DashAlumnoPage', () => {
  let component: DashAlumnoPage;
  let fixture: ComponentFixture<DashAlumnoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
