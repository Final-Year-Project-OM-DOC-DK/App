import { Component, OnInit } from '@angular/core';

//import activated route to get param id
//import house service to get house object
import { ActivatedRoute } from '@angular/router';
import { HouseService } from '../Services/house.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private houseService: HouseService,
             ) { }


  ngOnInit() {
    //get house id from activated route from previous page
    //let id = this.activatedRoute.snapshot.paramMap.get('id');
    //if (id){
    //this.houseService.getHouse(id).subscribe(house => {
        //this.house = house;
    //   })
   //  }
  }

}
