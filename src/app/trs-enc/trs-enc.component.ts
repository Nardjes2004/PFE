import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { DragDropModule } from 'primeng/dragdrop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trs-enc',
  templateUrl: './trs-enc.component.html',
  styleUrls: ['./trs-enc.component.css']
})
export class TrsEncComponent { 
  availableProducts: Product[] | undefined;

  selectedProducts: Product[] | undefined;

  draggedProduct: Product | undefined | null;

  ngOnInit() {
      this.selectedProducts = [];
      this.availableProducts = [
          {id:'1', name: 'Tache 1'},
          {id:'2', name: 'Tache 2'},
          {id:'3', name: 'Tache 3'},
          {id:'4', name: 'Tache 4'},
          {id:'5', name: 'Tache 5'},
          {id:'6', name: 'Tache 6'}
      ]
  }

  dragStart(product: Product) {
      this.draggedProduct = product;
  }

  drop() {
      if (this.draggedProduct) {
          let draggedProductIndex = this.findIndex(this.draggedProduct);
          this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
          this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
          this.draggedProduct = null;
      }
  }

  dragEnd() {
      this.draggedProduct = null;
  }

  findIndex(product: Product) {
      let index = -1;
      for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
          if (product.id === (this.availableProducts as Product[])[i].id) {
              index = i;
              break;
          }
      }
      return index;
  }
}
 