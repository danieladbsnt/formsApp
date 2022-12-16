import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  cantUseThisName = (control: FormControl): ValidationErrors | null => {
    const val = control.value?.trim().toLowerCase();
    if (val === 'strider') {
      return {
        noStrider: true
      }
    } 
    return null;
}

camposIguales(campo1: string, campo2: string) {
  return (FormGroup: AbstractControl): ValidationErrors | null => {
    
    const password = FormGroup.get(campo1)?.value;
    const confirmPass = FormGroup.get(campo2)?.value
    if (password !== confirmPass) {
      FormGroup.get(campo2)?.setErrors({noIguales: true})
      return {noIguales: true}
    }
    
    FormGroup.get(campo2)?.setErrors(null)
    return null;
  }
}
}
