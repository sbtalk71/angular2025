import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms1',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactiveforms1.component.html',
  styleUrl: './reactiveforms1.component.css'
})
export class Reactiveforms1Component {

constructor(){}

userForm=new FormGroup({
  userName:new FormControl(''),
  password:new FormControl(''),
  confirmPassword:new FormControl(''),
});

//set form data programatically
loadData(){
  this.userForm.setValue(
    {
      userName:'Shantanu',
      password:'test',
      confirmPassword: "test"
    }
  );
}

//partial update of form field
updateField(){
  this.userForm.patchValue(
    {
      userName:'Sukanto',
      
    }
  );
 }
}
