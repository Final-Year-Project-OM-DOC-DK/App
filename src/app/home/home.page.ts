import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public afAuth: AngularFireAuth) {}

  //function for sign out button. Reloads page once user is logged out
  signOut(){
    this.afAuth.auth.signOut().then(() =>{
      location.reload;
    });
  }

}
