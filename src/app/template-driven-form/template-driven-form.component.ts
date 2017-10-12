import { Component, OnInit } from '@angular/core';
import { TemplateFormModel } from '../model/templateform.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  templateModel: TemplateFormModel;
  isSubmitted = false;

  constructor() {
    this.templateModel = new TemplateFormModel();
  }


  ngOnInit() {
  }

  onSubmit() {
    this.isSubmitted = true;
  }
  onReset() {
    this.isSubmitted = false;
    this.templateModel = new TemplateFormModel();
  }

}
