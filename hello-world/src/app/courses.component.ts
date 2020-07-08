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
    <div (click)="onDivClicked()">
        <button class="btn btn-primary"
            [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'red'"
            (click)=[onSave($event)]
        >Save</button>
    </div>
    <input (keyUp.enter)="onEnter1($event)" /> <br/>
    <input #email (keyUp.enter)="onEnter2(email.value)" /> <br/>
    <input [(ngModel)]="name" (keyUp.enter)="onEnter3()" /> <br/>
    {{ course.title | uppercase }} <br/>
    {{ course.students | number }} <br/>
    {{ course.rating | number:'2.1-1' }} <br/>
    {{ course.price | currency:'USD':true:'3.2-2' }} <br/>
    {{ course.releaseDate | date:'shortDate' }}
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses: string[];
    imageSrc = "https://picsum.photos/200/300";
    isActive = false;
    colSpan = 4;
    name = "default value";
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    constructor(coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    onDivClicked() {
        console.log("on Div clicked");
    }

    onSave($event) {
        $event.stopPropagation();

        console.log("Save button clicked", $event);
    }

    onEnter1($event) {
        console.log("input value:", $event.target.value);
    }

    onEnter2(email) {
        console.log("input value:", email);
    }

    onEnter3() {
        console.log("email value:", this.name);
    }
}