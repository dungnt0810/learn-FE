import { Product } from './entities/product.entity';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './demo2.component.html',

})

export class Demo2Component implements OnInit {
    product: Product;
    products: Product[];

    ngOnInit() {
        this.product = {
            id: "asd",
            name: "name 1",
            price: 10.55,
        };

        this.products = [
            {
                id: "id 1",
                name: "name 1",
                price: 10.55,
            },
            {
                id: "id 2",
                name: "name 2",
                price: 10.55,
            },
            {
                id: "id 3",
                name: "name 3",
                price: 10.55,
            }
        ];
    }
}
