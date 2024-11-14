import { Component, OnInit } from '@angular/core';
import { AsistenciaService } from '../../servicios/asistencia.service';


@Component({
  selector: 'app-dash-alumno',
  templateUrl: './dash-alumno.page.html',
  styleUrls: ['./dash-alumno.page.scss'],
})
export class DashAlumnoPage implements OnInit {
  constructor(private asistenciaService: AsistenciaService) { }

  scanQrCode(qrCode: string) {
    const [courseId, studentId] = qrCode.split(':');
    this.asistenciaService.addAttendance(courseId, studentId);
  }

  ngOnInit(): void {
    this.trackAttendance();
  }

  async trackAttendance() {
    const courseId = '1';
    const attendance = { studentId: 's1', date: '2023-01-01', present: true };

    // Add attendance
    await this.asistenciaService.addAttendance(courseId, attendance);

    // Get attendance
    const attendanceRecords = await this.asistenciaService.getAttendanceByCourseId(courseId);
    console.log(attendanceRecords);
  }
}
