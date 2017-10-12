import { Component, OnInit } from '@angular/core';
import { Person } from '../../app/model/person.model';

@Component({
  selector: 'app-pipe-and-directives',
  templateUrl: './pipe-and-directives.component.html',
  styleUrls: ['./pipe-and-directives.component.css']
})
export class PipeAndDirectivesComponent implements OnInit {

  persons: Person[];

  constructor() {
    this.persons = [new Person('Kishori', 'Female'),
    new Person('Ajay', 'Male'),
    new Person('Shruti', 'Female'),
    new Person('Yash', 'Male'),
    new Person('Priya', 'Female'),
    new Person('Jaideep', 'Male'),
    new Person('Mihika', 'Female')];

    console.log(this.persons);
   }

  ngOnInit() {
  }

}
