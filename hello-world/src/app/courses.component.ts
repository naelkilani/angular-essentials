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
    <button class="btn btn-primary">Save</button>
    `
})
export class CoursesComponent {
    title = "List of courses"
    courses: string[];

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }
}