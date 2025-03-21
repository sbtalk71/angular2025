import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

  canExit(){
    if(window.confirm("Please check your data before exit")){
      return true;
    }else{
      return false;
    }
  }
}
