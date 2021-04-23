import { Component, OnInit } from '@angular/core';
import {Institution} from "../models/institution";
import {institutionsService} from "../services/institutionsService";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  institutions: Institution[];
  institution: Institution;
  currentInstitution: Institution;
  newInstitutionForm: FormGroup;
  detailsInstitutionForm: FormGroup;
  validation_messages: any;

  constructor(private institutionsService: institutionsService, private router: Router,
              public dialog: MatDialog, private formBuilder: FormBuilder) {


    this.newInstitutionForm = this.formBuilder.group({
      institutionName: new FormControl('', Validators.compose([
        Validators.required,])),
      institutionDescription: new FormControl(''),
      institutionUrl: new FormControl(''),
      institutionResponsable: new FormControl('', Validators.compose([
        Validators.required])),
    });
    this.detailsInstitutionForm = this.formBuilder.group({
    })
  }

  ngOnInit() {
    this.updateInfo();
    this.validation_messages = {
      name: [
        { type: 'required', message: 'Name is required' },
      ],
      responsable: [
        { type: 'required', message: 'Responsable is required' }
      ],
    };
  }

  updateInfo(){
    this.institutionsService.getInstitutions().subscribe(institutions=>{this.institutions = institutions});
  }

  public institutionSelect(institution){
    this.currentInstitution = institution;
  }

  public addInstitution(){
    let institution = new Institution();
    institution.name = this.newInstitutionForm.get('institutionName').value;
    institution.description = this.newInstitutionForm.get('institutionDescription').value;
    institution.url = this.newInstitutionForm.get('institutionUrl').value;
    institution.responsable = this.newInstitutionForm.get('institutionResponsable').value;
    console.log(institution.url);
    this.institutionsService.addInstitution(institution)
      .subscribe( res => {
          console.log('Res' + res);
          this.updateInfo();
      },
      err => {
        console.log(err);
        HomeComponent.handleError(err);
      });
    console.log(this.institutions.length);
  }

  public removeInstitution(){
    let institution = new Institution();
    institution = this.currentInstitution;
    this.institutionsService.removeInstitution(this.currentInstitution)
      .subscribe (res => {
        console.log('Res' + res);
        this.updateInfo();
      },      
      err => {
        console.log(err);
        HomeComponent.handleError(err);
      });
  }

  private static handleError(err: HttpErrorResponse) {
    if ( err.status === 500 ) {
      alert('Ha ocurrido un error al crear la asignatura');
    }
  }

}
