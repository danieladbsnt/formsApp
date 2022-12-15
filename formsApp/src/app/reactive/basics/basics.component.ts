import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {
//Se puede hacer así la conexión entre los inputs del formulario y los valores que le queremos dar por defecto.
// myForm: FormGroup = new FormGroup({
//   'nombre': new FormControl('RTX 4080ti'),
//   'precio': new FormControl(1500),
//   'stock': new FormControl(5)
// })

//La otra forma de hacerlo es con FormmBuilder
myForm: FormGroup = this.formBuilder.group({
  nombre: [, [Validators.required, Validators.minLength(3)]],
  precio: [, [Validators.min(0), Validators.required]],
  stock: [, [Validators.min(0), Validators.required]]
})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'RTX 4080ti',
      precio: 1600
    })
  }

  invalidInput(campo: string) {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
