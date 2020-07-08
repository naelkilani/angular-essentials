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
    <div class="form-group">
        <input class="form-control" (keyUp.enter)="onEnter1($event)" />
    </div>
    <div class="form-group">
    <input class="form-control" #email (keyUp.enter)="onEnter2(email.value)" />
</div>
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses: string[];
    imageSrc = "https://picsum.photos/200/300";
    isActive = false;
    colSpan = 4;

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
}