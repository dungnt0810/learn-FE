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
    
    ngOnInit() {

    }
}