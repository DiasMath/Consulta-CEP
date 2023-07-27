import { Component } from '@angular/core';
import { cepDataModel } from 'src/app/model/cepDataModel';

@Component({
  selector: 'app-form-cep',
  templateUrl: './form-cep.component.html',
  styleUrls: ['./form-cep.component.css']
})
export class FormCepComponent {
  cepData!: cepDataModel
}
