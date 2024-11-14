import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  private readonly storageKey = 'cursos';

  constructor(private storage: StorageService) { }

  getAttendanceByCourseId(courseId: string): Promise<any[]> {
    return new Promise(async (resolve) => {
      const courses = await this.storage.get(this.storageKey) || [];
      const course = courses.find((c: any) => c.id === courseId);
      resolve(course ? course.attendance : []);
    });
  }

  addAttendance(courseId: string, attendance: any): Promise<void> {
    return new Promise(async(resolve) => {
      let courses = await this.storage.get(this.storageKey) || [];
      const course = courses.find((c: any) => c.id === courseId);
      if (course) {
        course.attendance.push(attendance);
        this.storage.set(this.storageKey, courses);
      }
      resolve();
    });
  }

  getAttendance(courseId: string): Promise<any[]> {
    return new Promise(async(resolve) => {
      const courses = await this.storage.get(this.storageKey) || [];
      const course = courses.find((c: any) => c.id === courseId);
      resolve(course ? course.attendance : []);
    });
  }

}
