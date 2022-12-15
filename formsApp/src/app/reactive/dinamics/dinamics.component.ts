import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html'
})
export class DinamicsComponent implements OnInit {

 myForm: FormGroup = this.formBuilder.group({
  nombre: ['', [Validators.required, Validators.minLength(3)]],
  favoritos: this.formBuilder.array( [
    ['Civilization VI', Validators.required],
    ['It takes two', Validators.required]
  ], Validators.required)
 })

newFav: FormControl = this.formBuilder.control('', Validators.required);

 get favoritosArr() {
  return this.myForm.get('favoritos') as FormArray;
 }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  invalidInput(campo: string){
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
  }
  
addFav() {
  if (this.newFav.invalid) {
    return;
  }
this.favoritosArr.push(this.formBuilder.control(this.newFav.value, Validators.required))
//lo que también puede hacerse así:
//this.favoritosArr.push(new FormControl(this.newFav.value, Validators.required)); 


  this.newFav.reset();
}

  save() {
    //imprimir valor form, solo si es valido
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched;
      return
    }
      console.log(this.myForm.value);
  }

  delete(i: number) {
    this.favoritosArr.removeAt(i)
  }
}
