import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api'; 
import { TreeTableModule } from 'primeng/treetable';
import { NodeService } from '../../service/projet';
import { MultiSelectModule } from 'primeng/multiselect';

interface City {
    name: string,
    code: string
}


@Component({
  selector: 'app-mnt-chq-enc-trs',
  templateUrl: './mnt-chq-enc-trs.component.html',
  styleUrls: ['./mnt-chq-enc-trs.component.css'],   
  providers: [NodeService]
})

export class MntChqEncTrsComponent {

  
  cities!: City[];

  selectedCities!: City[];
 
  files!: TreeNode[];
  date1: Date | undefined;

  visible: boolean = false;
  visible2: boolean = false;
  constructor(private nodeService: NodeService) {}

  showDialog() {
    this.visible = true;
  }


  
  showDialog2() {
    this.visible2 = true;
  }

  ngOnInit() {
      this.nodeService.getFilesystem().then((files) => (this.files = files));
      
      this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
  }
}