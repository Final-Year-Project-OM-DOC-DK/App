import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  public houseList: firebase.firestore.CollectionReference;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.houseList = firebase
          .firestore()
          .collection('/userProfile/${user.uid}/house');
      }
    });
   }
}
