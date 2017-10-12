import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../app/model/user.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  user: User;

  isSubmitted= false;

  userForm: FormGroup;

  constructor( private fb: FormBuilder) {
    this.createForm();
    this.user =  new User();
   }
   createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    const formModel = this.userForm.value;
    this.user.name = formModel.name as string;
    this.user.email = formModel.email as string;
    this.isSubmitted = true;
  }

}
