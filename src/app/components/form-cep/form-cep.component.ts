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

  // Validar se o CEP existe no banco do ViaCEP
  validarCEP(data: cepDataModel) {
    if (!("erro" in data)) {

      this.cepData.logradouro = data.logradouro;
      this.cepData.bairro = data.bairro;
      this.cepData.localidade = data.localidade;
      this.cepData.uf = data.uf;
      this.cepData.ibge = data.ibge;
    } else {

      this.limparCEP();
      alert("CEP não encontrado!");
    }
    
  }

  // Chama o serviço para fazer a requisição
  buscarCEP(){
    this.service.getCEP(this.cepData.cep).subscribe( data => {
      this.validarCEP(data);
    });
  }

  // Ao sair do campo inicia a requisição
  onBlur(event: FocusEvent) {
    if(this.cepData.cep.length !== 8){
      alert("O CEP deve conter 8 dígitos!");
      this.limparCEP();
      return;
    }
    
    this.buscarCEP();
  }

// Limpa o campo CEP
  limparCEP(){
    this.cepData.cep = '';
  }

  // Limpa o formulário
  limparFormulario() {
    this.cepData.cep = '';
    this.cepData.logradouro = '';
    this.cepData.bairro = '';
    this.cepData.localidade = '';
    this.cepData.uf = '';
    this.cepData.ibge = '';
  }

// Validação para aceitar só números no campo CEP
  validarNumeros(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    const numericInputValue = inputValue.replace(/\D/g, '');
    input.value = numericInputValue;
    this.cepData.cep = numericInputValue;
  }
}
