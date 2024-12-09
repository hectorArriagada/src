import { Component, OnInit } from '@angular/core';
import { UserI } from '../../servicios/modelos';
import { FirestoreService } from '../../firestore.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {


  users: UserI[] = [];

  constructor( private firestore: FirestoreService) {
    this.loadUsers();
   }

  ngOnInit() {
  }

  loadUsers() {
    this.firestore.getCollectionChanges<UserI>('Usuarios').subscribe( data => {
      if (data) {
        this.users = data
      }
  });
}

}
