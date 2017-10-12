import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../model/person.model';

@Pipe({ name: 'CustomPipe' })
export class CustomPipe implements PipeTransform {
  transform(persons: Person[], containsChars: string, gender: string) {
    let personList: Person[] = [];
    let personFinalList: Person[] = [];
    if (persons) {
      if (containsChars) {
        persons.forEach((person) => {
          if (person.pname.toLocaleLowerCase().includes(containsChars.toLocaleLowerCase())) {
            personList.push(person);
          }
        });
      } else {
        personList = persons;
      }
      if (gender && gender !== 'Any') {
        personList.forEach((person) => {
          if (person.gender === gender) {
            personFinalList.push(person);
          }
        });
      } else {
        personFinalList = personList;
      }

    }
    return personFinalList;
  }

}
