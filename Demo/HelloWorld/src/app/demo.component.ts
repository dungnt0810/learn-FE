import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './demo.component.html',

})
export class DemoComponent implements OnInit {
    //   title = 'HelloWorld';
    age : number;
    price : number;
    quantity : number;
    status : boolean;
    username : string;
    phone : any;
    photo : string;
    photos : string[];
    ngOnInit() {
        this.age = 100;
        this.price = 10.4;
        this.quantity = 10;
        this.status = true;
        this.username = "asd";
        this.phone = "12320";
        this.photo = "FB_IMG_1533218193931.jpg";
        this.photos = [
            "FB_IMG_1529509183911.jpg",
            "FB_IMG_1530102590413.jpg",
        ];
    }
}