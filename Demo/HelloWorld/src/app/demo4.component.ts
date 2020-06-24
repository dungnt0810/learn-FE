
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './demo4.component.html',

})

export class Demo4Component implements OnInit {

    photo : string;
    photoHeight: number;
    photoWidth: number;
    ngOnInit() {
        this.photo = "asset/img/FB_IMG_1529509183911.jpg"
        this.photoHeight = 100;
        this.photoWidth = 120;
    };

    hello(){
        alert("Helooooo");
    }

    changebg(e: any) {
        document.bgColor = e.target.value;
    }
    changePhoto(e: any){
        this.photo = e.target.value;
    }

    display(e:any){
        console.log(e.target.value);
    }

    display2(e:any){
        console.log(e.target.value);
    }

    changeHeight(e:any){
        this.photoHeight = e.target.value;
    }

    changeWidth(e:any){
        this.photoWidth = e.target.value;
    }
    selectCategory(e:any){
        console.log(e.target.value);
    }

    
}
