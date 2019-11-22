import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { House, HouseService } from 'src/app/Services/house.service';

//import activated route to get param id
//import house service to get house object


@Component({
  selector: 'app-house-select',
  templateUrl: './house-select.page.html',
  styleUrls: ['./house-select.page.scss'],
})
export class HouseSelectPage implements OnInit {

  private houses: Observable<House[]>;

  house: House ={
    id:'',
    name: '',
    address: '',
    eircode: '',
    members: []
  };

  constructor(public navCtrl: NavController,
              private houseService: HouseService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.houses = this.houseService.getHouses();
  }

  addHouse(){
    this.houseService.addHouse(this.house).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('House Added');
    }, err => {
      this.showToast('There was a problem adding your house');
    });
  }

  deleteHouse(){
    this.houseService.deleteHouse(this.house.id).then(() => {
      this.router.navigateByUrl('/');
      this.showToast('House Deleted');
    }, err => {
      this.showToast('There was a problem deleting your house');
    });
  }

  updateHouse(){
    this.houseService.updateHouse(this.house).then(() => {
      //this.router.navigateByUrl('/');
      this.showToast('House Updated');
    }, err => {
      this.showToast('There was a problem updating your house');
    });
  }

  

  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
