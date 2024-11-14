import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly storageKey = 'cursos';

  constructor(private storage: StorageService) { }

  private course = {
    id: '1',
    name: 'Course 1',
    attendance: [
      { studentId: 's1', date: '2023-01-01', present: true },
      { studentId: 's2', date: '2023-01-01', present: false }
    ]
  };

  getCourses(): Promise<any[]> {
    return new Promise((resolve) => {
      const courses = this.storage.get(this.storageKey) || [];
      resolve(courses);
    });
  }

  getCourseById(courseId: string): Promise<any> {
    return new Promise(async (resolve) => {
      const courses = await this.storage.get(this.storageKey) || [];
      const course = courses.find((c: any) => c.id === courseId);
      resolve(course);
    });
  }

  addCourse(course: any): Promise<void> {
    return new Promise(async(resolve) => {
      const courses = await this.storage.get(this.storageKey) || [];
      courses.push(course);
      this.storage.set(this.storageKey, courses);
      resolve();
    });
  }

  updateCourse(course: any): Promise<void> {
    return new Promise(async(resolve) => {
      let courses = await this.storage.get(this.storageKey) || [];
      courses = courses.map((c: any) => c.id === course.id ? course : c);
      this.storage.set(this.storageKey, courses);
      resolve();
    });
  }

  deleteCourse(courseId: string): Promise<void> {
    return new Promise(async(resolve) => {
      let courses = await this.storage.get(this.storageKey) || [];
      courses = courses.filter((c: any) => c.id !== courseId);
      this.storage.set(this.storageKey, courses);
      resolve();
    });
  }

}
