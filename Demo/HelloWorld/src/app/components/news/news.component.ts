

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'app-root',
    templateUrl: './news.component.html',

})

export class NewsComponent implements OnInit {
    
    constructor(
        private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(){
        this.activatedRoute.paramMap.subscribe(p => {
            var id1 = p.get('id1');
            var id2 = p.get('id2');
            console.log(id1);
            console.log(id2);
        })
    }
    
   
}
