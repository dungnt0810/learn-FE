
import { Student } from './entities/student.entity';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './student.component.html',

})

export class StudentComponent implements OnInit{

    student: Student;

    ngOnInit(){
        this.student = {
            id : "asd",
            name: "asdvas",
            photo: "FB_IMG_1529509183911.jpg",
            faculty:{
                id: "asd",
                name: "adasda",

            },
            courses:[
                {id: 'asd', name:'aasdas', score: 20},
                {id: 'wieuuqhw', name:'mnn', score: 40},
                {id: 'jhgas', name:'ahbhjn ', score: 10},
            ] 

        };
    }
}