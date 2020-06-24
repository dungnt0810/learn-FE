import {Injectable} from '@angular/core';

@Injectable()
export class StudentService{
    
    constructor(){}

    averageScore(math: number, che: number, phys: number): number{
        if(math == null || che == null || phys == null){
            return 0;
        }
        return (math*3 + che*2 + phys)/6;
    }

    rank(score: number): string{
        if(score == null){
            return " data fail";
        }
        if(score >=8){
            return "good";
        }
        if(score >= 5){
            return "Normal";
        }
        return "Bad";
    }
}