import { Component, OnInit } from '@angular/core';
import { HouseService, House } from '../Services/house.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private houseService: HouseService,
    private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastCtrl: ToastController) { }

 house: House;

  ngOnInit() {
  }

  onAddHouse(form: NgForm){
    this.house.name = form.value.name;
    this.house.address = form.value.address;
    this.house.eircode = form.value.eircode;

    console.log(this.house);

      this.houseService.addHouse(this.house).then(() => {
        this.router.navigateByUrl('/');
        this.showToast('House Added');
      }, err => {
        this.showToast('There was a problem adding your house');
      });
    }


  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }


}
