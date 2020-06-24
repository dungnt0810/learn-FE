import { Account } from './entities/account.entity';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './demo6.component.html',

})

export class Demo6Component implements OnInit {
    
    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder

    ){}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: '',
            password: '',
        })        
    };

    Save(){
        console.log('submit');
        //map value su dung angular
        var account: Account = this.registerForm.value;
        console.log(account.username);
        console.log(account.password);
    }
    
}
