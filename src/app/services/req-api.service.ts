import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { cepDataModel } from '../model/cepDataModel';
@Injectable({
  providedIn: 'root'
})
export class ReqAPIService {
  
  private apiURL = environment.API_URL

  constructor(private http: HttpClient) {}

  getCEP(cep: cepDataModel): Observable<cepDataModel>{
    return this.http.get<cepDataModel>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}