
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './demo5.component.html',

})

export class Demo5Component implements OnInit {
    //data binding
    //xu ly form
    nameA : string;
    nameB : string;
    photoHeight: number;
    photoWidth: number;

    ngOnInit() {
        this.nameA = 'asd';
        this.nameB = 'Name 2';
        this.photoHeight = 100;
        this.photoWidth = 120;
    };

    
    
}
