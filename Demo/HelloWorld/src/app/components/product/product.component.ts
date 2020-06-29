import { ActivatedRoute } from '@angular/router';
import { Product } from '../../entities/product.entity';
import { ProductService } from '../../services/product.service';


import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './product.component.html',

})

export class ProductComponent implements OnInit {

    constructor(
        private productSercive: ProductService
    ){}

    products : Product[];

    ngOnInit() {
        this.products = this.productSercive.findAll();
        
    }
}
