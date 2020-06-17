import { Course } from './course.entity';
import { Faculty } from './faculty.entity';
export class Student{
    id:string;
    name: string;
    photo: string;
    faculty: Faculty;
    courses: Course[];
}