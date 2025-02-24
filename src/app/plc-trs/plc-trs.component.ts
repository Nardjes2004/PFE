import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-plc-trs',
  templateUrl: './plc-trs.component.html',
  styleUrls: ['./plc-trs.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class PlcTrsComponent {
  //declarations
  TrsEncArray: any[] = [];
  isResultLoaded = false;
  total_Montant = 0;
  value: any[] = [];
  date_plc = '';
  currentTrsID = '';
  montant = '';
  visible: boolean = false;
  bnq: any[] = [];
  nom_cmpt = '';
  taux = '';
  date_ech = '';
  duree = '';
  showDialog_confirm = false;

  isButtonDisabled: boolean = true;
  ngOnInit(): void {
    const crudValue = localStorage.getItem('CRUD'); // Récupérer la valeur du CRUD depuis le localStorage
    if (crudValue && crudValue === '1') {
      this.isButtonDisabled = false; // Activer le bouton si le CRUD est égal à 1
    }
  }
  //////request
  userForm = this.fb.group({
    date_plc: ['', Validators.required],
    duree: ['', Validators.required],
    date_ech: ['', Validators.required],
    nom_cmpt: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.getPlcTrs();
  }

  //read banque
  getBnq() {
    return this.http
      .get('http://localhost:3002/trs-enc/readBnq')
      .subscribe((data: any) => {
        this.bnq = data;
      });
  }

  //read
  getPlcTrs() {
    this.http
      .get('http://localhost:3002/trs-enc/readPlcTrs')
      .subscribe((data: any) => {
        this.isResultLoaded = true;
        this.TrsEncArray = data;
        this.totalMontant(this.TrsEncArray);
        this.getBnq();
      });
  }
  ////
  showDialog() {
    this.visible = true;
  }
  /////
  clear() {
    window.location.reload();
  }

  /////total encaissement
  totalMontant(Data: any) {
    this.value = Data;
    for (let j = 0; j < Data.length; j++) {
      this.total_Montant += this.value[j].montant;
    }
  }

  /////////// supprimer un placement

  Delete(data: any): void {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer ce Placement?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      rejectButtonStyleClass: 'p-button-sm p-button-danger',
      acceptButtonStyleClass: 'p-button-sm p-button-success', // Ajoutez une classe CSS pour le bouton "Non"
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Opération réussie',
          detail: 'Vous avez supprimé un Placement avec succès',
        });
        this.http
          .delete('http://localhost:3002/trs-enc/deletePlc' + '/' + data.id)
          .subscribe((data: any) => {
            this.getPlcTrs();
            // Vous pouvez ajouter d'autres traitements après la suppression si nécessaire
            setTimeout(() => {
              this.showDialog_confirm = false;
              location.reload();
            }, 1000);
          });
      },
      reject: (type: ConfirmEventType) => {
        if (type === ConfirmEventType.REJECT) {
          this.messageService.add({
            severity: 'error',
            summary: 'Annulation',
            detail: 'La suppression du Placement a été annulée',
          });
          setTimeout(() => {
            this.showDialog_confirm = false;
            location.reload();
          }, 1000);
        }
      },
    });
  }

  /////ajout operation
  register() {
    let bodyData = {
      date_plc: this.date_plc,
      montant: this.montant,
      duree: this.duree,
      taux: this.taux,
      date_ech: this.date_ech,
      nom_cmpt: this.nom_cmpt,
    };

    this.http
      .post('http://localhost:3002/trs-enc/createPlcTrs', bodyData)
      .subscribe((resultData: any) => {
        this.getPlcTrs();
      });
  }

  // Fonction save
  save() {
    if (this.currentTrsID === '') {
      this.confirmationService.confirm({
        message: "Voulez-vous vraiment confirmer l'ajout de ce Placement?",
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Oui',
        rejectLabel: 'Non',
        rejectButtonStyleClass: 'p-button-sm p-button-danger',
        acceptButtonStyleClass: 'p-button-sm p-button-success',
        accept: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmation',
            detail: 'Le Placement a été ajouté avec succès',
          });
          this.register();
          this.getPlcTrs();
          setTimeout(() => {
            this.showDialog_confirm = false;
            location.reload();
          }, 1000);
        },
        reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Annulation',
            detail: "L'ajout du Placement a été annulé",
          });
          this.showDialog_confirm = false;
          setTimeout(() => {
            this.showDialog_confirm = false;
            location.reload();
          }, 1000);
        },
      });
      this.showDialog_confirm = true;
    } else {
      this.confirmationService.confirm({
        message:
          'Voulez-vous vraiment effectuer la mise à jour de ce Placement?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Oui',
        rejectLabel: 'Non',
        rejectButtonStyleClass: 'p-button-sm p-button-danger',
        acceptButtonStyleClass: 'p-button-sm p-button-success',
        accept: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Confirmation',
            detail: 'Le Placement a été mis à jour avec succès',
          });
          this.UpdateRecords();
          setTimeout(() => {
            this.showDialog_confirm = false;
            location.reload();
          }, 1000);
        },
        reject: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Annulation',
            detail: 'La mise à jour du Placement a été annulée',
          });
          this.showDialog_confirm = false;
          setTimeout(() => {
            this.showDialog_confirm = false;
            location.reload();
          }, 1000);
        },
      });
      this.showDialog_confirm = true;
    }
  }

  //update

  ///// modifier operation

  UpdateRecords() {
    let bodyData = {
      date_plc: this.date_plc,
      montant: this.montant,
      duree: this.duree,
      taux: this.taux,
      date_ech: this.date_ech,
      nom_cmpt: this.nom_cmpt,
    };

    this.http
      .patch(
        'http://localhost:3002/trs-enc/updatePlcTrs' + '/' + this.currentTrsID,
        bodyData
      )
      .subscribe((data: any) => {
        this.getPlcTrs();
      });
  }

  Update(data: any) {
    const date_plc = new Date(data.date_plc);
    const year_plc = date_plc.getFullYear();
    const month_plc = date_plc.getMonth() + 1; // Les mois commencent à partir de zéro
    const day_plc = date_plc.getDate();
    this.date_plc = `${year_plc}-${month_plc < 10 ? '0' : ''}${month_plc}-${
      day_plc < 10 ? '0' : ''
    }${day_plc}`;
    //////

    const date_ech = new Date(data.date_ech);
    const year_ech = date_ech.getFullYear();
    const month_ech = date_ech.getMonth() + 1; // Les mois commencent à partir de zéro
    const day_ech = date_ech.getDate();
    this.date_ech = `${year_ech}-${month_ech < 10 ? '0' : ''}${month_ech}-${
      day_ech < 10 ? '0' : ''
    }${day_ech}`;
    //////
    (this.montant = data.montant),
      (this.duree = data.duree),
      (this.taux = data.taux),
      (this.nom_cmpt = data.banque);
    (this.currentTrsID = data.id), (this.visible = true);
  }
}
