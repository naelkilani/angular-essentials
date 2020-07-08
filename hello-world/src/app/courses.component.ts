import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

// deaerator function
@Component({
    selector: 'courses',
    template: `
    <h2>{{ title }}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    <img [src]="imageSrc" />
    <table>
        <td>
            <tr [attr.colspan]="4"></tr>
        </td>
    </table>
    <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button>
    `
})
export class CoursesComponent {
    title = "List of courses"
    courses: string[];
    imageSrc = "https://picsum.photos/200/300";
    isActive = false;
    colSpan = 4;

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
}