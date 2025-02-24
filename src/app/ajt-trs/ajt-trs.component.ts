import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajt-trs',
  templateUrl: './ajt-trs.component.html',
  styleUrls: ['./ajt-trs.component.css']
})
export class AjtTrsComponent { 

  currentTrsID = "";
  N_PCS= "";
  Date= "";
  N_CHQ= "";
  OP= "";
  BNF= "";
  ENC= "";
  DEC= "";
  

}
