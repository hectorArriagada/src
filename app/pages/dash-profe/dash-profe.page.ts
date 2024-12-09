import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../servicios/cursos.service';
import { AsistenciaService } from '../../servicios/asistencia.service';

@Component({
  selector: 'app-dash-profe',
  templateUrl: './dash-profe.page.html',
  styleUrls: ['./dash-profe.page.scss'],
})
export class DashProfePage implements OnInit {
  courses: any[] = [];
  selectedCourse: any;
  qrCode: string = '';

  constructor(private cursosService: CursosService, private asistenciaService: AsistenciaService) { }

  ngOnInit() {
    // this.loadCourses();
  }

  // async loadCourses() {
  //   this.courses = await this.cursosService.getCourses();
  // }

  selectCourse(course: any) {
    this.selectedCourse = course;
    this.generateQrCode();
  }

  generateQrCode() {
    this.qrCode = `https://api.qrserver.com/v1/create-qr-code/?data=courseId:${this.selectedCourse.id}`;
  }

  registerAttendance(studentId: string) {
    this.asistenciaService.addAttendance(this.selectedCourse.id, studentId);
  }
}
