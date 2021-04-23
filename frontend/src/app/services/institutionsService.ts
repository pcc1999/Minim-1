import { Injectable } from '@angular/core';
import {Environment} from "./environment";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Institution } from '../models/institution';

@Injectable({
  providedIn: 'root'
})
export class institutionsService {

  url: Environment;

  constructor(private http: HttpClient) {
    this.url = new Environment();
  }

  addInstitution(institution:Institution){
    return this.http.post(this.url.urlInstitutions, institution);
  }
  getInstitutions(): Observable<Institution[]>{
    return this.http.get<Institution[]>(this.url.urlInstitutions);
  }
  removeInstitution(institution:Institution){
    return this.http.post(this.url.urlInstitutions + '/remove/', institution);
  }

}
