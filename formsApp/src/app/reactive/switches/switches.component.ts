import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit{

myForm: FormGroup = this.formBuilder.group({
  genero: ['M', Validators.required],
  notificaciones: [ true, Validators.required],
  terminos: [false, Validators.requiredTrue]
})

persona = {
  genero: 'F',
  notificaciones: true,
}

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.persona,
      condiciones: false
    });

    this.myForm.valueChanges.subscribe(form => {
      delete form.terminos;
      this.persona = form
      
    })
  }

  save() {
    const formValue = {...this.myForm.value}
    delete  formValue.terminos
    console.log(formValue);
    this.persona = formValue;
    
  }
}
