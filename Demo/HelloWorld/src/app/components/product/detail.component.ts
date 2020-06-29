import { Product } from './../../entities/product.entity';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './detail.component.html',

})

export class DetailComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private productSercive: ProductService
    ){}

    product: Product;

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(p => {
            let id = p.get('id');
            this.product = this.productSercive.find(id); 
        })
    }
}
