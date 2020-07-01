import { Mobile } from './../entities/mobile.entity';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MobileService{
    private baseURL: string = 'http://localhost:50089/api/product/';

    constructor(
        private httpClient: HttpClient,
    ){}

    findAll(){
        return this.httpClient.get(this.baseURL + 'findall')
                    .toPromise()
                    .then(respone => respone as Mobile[]);
    }

    find(){
        return this.httpClient.get(this.baseURL + 'find')
                    .toPromise()
                    .then(respone => respone as Mobile);
    }

    create(moblie: Mobile){
        return this.httpClient.post(this.baseURL + 'create' , moblie)
                    .toPromise()
                    .then(respone => respone as Mobile);
    }
}