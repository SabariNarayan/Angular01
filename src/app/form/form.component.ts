import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  employee: any = {
    name: '',
    designation: '',
    location: '',
    salary: null};
    
    onSubmit() {
      this.employee = {
        name: '',
        designation: '',
        location: '',
        salary: null
      };
    }
}
