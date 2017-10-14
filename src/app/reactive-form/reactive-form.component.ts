import { Component, OnInit, Input } from '@angular/core';
import {
  FormArray, FormGroup, Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  isSubmitted = false;

  signUpForm: FormGroup;

  genders = ['male', 'female'];

  hobbyControls: any[];

  constructor() {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.signUpForm);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
    this.hobbyControls =  (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
}
