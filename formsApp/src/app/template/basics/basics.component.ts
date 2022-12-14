import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {

@ViewChild('myForm') myForm!: NgForm;

initialForm = {
  producto: 'RTX 4080ti',
  precio: 10,
  stock: 10
}
  constructor() { }

  ngOnInit(): void {
  }

  validName():boolean {
    return this.myForm?.form.controls['producto']?.invalid 
        && this.myForm?.form.controls['producto']?.touched
  }

  validPrice(): boolean {
    return this.myForm?.form.controls['precio']?.touched
        && this.myForm?.form.controls['precio']?.value < 0
  }

  save() {
    console.log('correcto')
    this.myForm.resetForm({
      producto: 'algo',
      precio: 0,
      stock: 0
    });
  }
}
