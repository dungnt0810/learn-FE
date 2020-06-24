import { StudentService } from './services/student.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './demo7.component.html',

})

export class Demo7Component implements OnInit {
    
    math: number;
    phys:number;
    che: number;
    avg: number;
    rank: string;

    constructor(
        private studentService:StudentService
    ){}

    ngOnInit(){

    }
    
    calculate(){
        this.avg = this.studentService.averageScore(this.math, this.che, this.phys);
        console.log(this.avg);
        this.rank = this.studentService.rank(this.avg);
        
    }
}
