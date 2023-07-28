import { Component, OnInit } from '@angular/core';
import { cepDataModel } from 'src/app/model/cepDataModel';
import { ReqAPIService } from 'src/app/services/req-api.service';

@Component({
  selector: 'app-form-cep',
  templateUrl: './form-cep.component.html',
  styleUrls: ['./form-cep.component.css']
})
export class FormCepComponent implements OnInit {
  
  cepData: cepDataModel = {
    cep: '',
    logradouro: '',
    localidade: '',
    bairro: '',
    uf: '',
    ibge: ''
  };
   
  ngOnInit(): void {}
  
  constructor(private service: ReqAPIService) {}

  buscarCEP(){
    this.service.getCEP(this.cepData).subscribe( data => {
      this.cepData.cep = data.cep;
      this.cepData.logradouro = data.logradouro;
      this.cepData.localidade = data.localidade;
      this.cepData.bairro = data.bairro;
      this.cepData.uf = data.uf;
      this.cepData.ibge = data.ibge;

    });
  }

  blur(event: any) {
    this.buscarCEP();

    console.log(this.buscarCEP);
}
}
