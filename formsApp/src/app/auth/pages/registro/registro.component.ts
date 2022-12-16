import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
  nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
  email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
  username: ['', [Validators.required, this.validatorService.cantUseThisName]],
  password: ['', [Validators.required, Validators.minLength(6)]],
  confirmPass: ['', [Validators.required]],
}, {
  validators: [this.validatorService.camposIguales('password', 'confirmPass')]
})

get emailErrorMsg(): string {
  const errors = this.myForm.get('email')?.errors;
  if (errors?.['required']) {
    return 'Email es obligatorio'
  } else if (errors?.['pattern']) {
    return 'El email no tiene formato adecuado'
  } else if (errors?.['emailNoDisponible']) {
    return 'El email ya está registrado'
  }
  return '';
}
  constructor(private formBuilder: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService
    ) { }

  ngOnInit(): void {
    this.myForm.reset({
      nombre: 'Fernando Herrera',
      email: 'test1@test.com',
      username: 'fer_her',
      password: '123456',
      confirmPass: '123456'
    })
  }

campoNoValido(campo: string) {
  return this.myForm.get(campo)?.invalid && this.myForm.get(campo)?.touched;
}



submitForm() {
  console.log(this.myForm.value);
  this.myForm.markAllAsTouched();
}
}
