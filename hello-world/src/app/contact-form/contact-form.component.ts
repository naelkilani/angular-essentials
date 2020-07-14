import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [
    { id: 1, name: "email"},
    { id: 2, name: "phone"}
  ];

  genders = [
    { id: 1, name: 'Male'},
    { id: 2, name: 'Female' }
  ]

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
