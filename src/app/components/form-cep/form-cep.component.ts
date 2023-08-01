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
    this.service.getCEP(this.cepData.cep).subscribe( data => {
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
  }

// Limpa o campo CEP.
  limparCEP(){
    this.cepData.cep = '';
  }

  limparFormulario() {
    this.cepData.cep = '';
    this.cepData.logradouro = '';
    this.cepData.bairro = '';
    this.cepData.localidade = '';
    this.cepData.uf = '';
    this.cepData.ibge = '';
  }

// Validação para aceitar só números no campo CEP
  validarNumeros(event: any) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    const numericInputValue = inputValue.replace(/\D/g, '');
    input.value = numericInputValue;
    this.cepData.cep = numericInputValue;
  }

}
