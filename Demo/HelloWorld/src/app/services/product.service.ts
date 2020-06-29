import { Product } from './../entities/product.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

    findAll(): Product[] {
         
        return [
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

    find(id: string) : Product{
        let products = this.findAll();
        for(let i = 0; i < products.length; i++){
            if(id == products[i].id){
                return products[i];
            }
        }
        return null;
    }
}