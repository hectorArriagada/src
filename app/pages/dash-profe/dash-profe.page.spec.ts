import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashProfePage } from './dash-profe.page';

describe('DashProfePage', () => {
  let component: DashProfePage;
  let fixture: ComponentFixture<DashProfePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
