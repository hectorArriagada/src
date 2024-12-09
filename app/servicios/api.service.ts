import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry, catchError } from 'rxjs';
import { StorageService } from './storage.service';

 

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
  }

  apiUrl = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient, private storage: StorageService) { }

  getUser(): Observable<any> {
    return this.http.get(this.apiUrl + "users/"
    );
  }

  postUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl + "/users/", data);
  }

  updateUser(id: string, data:any): Observable<any> {
    return this.http.put(this.apiUrl + "/users/" + id, data)
  }

  deleteUser(id:any): Observable<any> {
    return this.http.delete(this.apiUrl + "/users/" + id);
  }



}



// // firebase
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBoi1Rf6W9Epc-SKBsQFgnEjh-qsnMxjUA",
//   authDomain: "ionic-9b450.firebaseapp.com",
//   projectId: "ionic-9b450",
//   storageBucket: "ionic-9b450.firebasestorage.app",
//   messagingSenderId: "1037914900113",
//   appId: "1:1037914900113:web:0f280133b9fc4290da2130",
//   measurementId: "G-44T4FYRXFM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);