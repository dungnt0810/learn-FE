import { Mobile } from './../../entities/mobile.entity';
import { MobileService } from './../../services/mobile.service';

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './mobile.component.html',

})

export class MobileComponent implements OnInit {

    constructor(
        private mobileService: MobileService,
    ){}

    mobile : Mobile;
    mobiles : Mobile[];

    ngOnInit() {
       this.mobileService.find().then(
           response => {
                this.mobile = response;
           },
           err => {
               console.log(err);
           }
       )
       this.mobileService.findAll().then(
           response => {
               this.mobiles = response;
           },
           err => {
               console.log(err);
           }
       )

       save(){
           var mobile: Mobile = {
               id: 'asd',
               name: 'asdasd',
               price: 102.51,
               status: true,
               quantity: 12,
           };
           this.mobileService.create(mobile).then(
               result => {
                   console.log(result);
               },
               err => {
                   console.log(err);
               }
           )
       }
    }


}
