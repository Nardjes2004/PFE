import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('500ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  photo: string = '';
  direction: string = '';
  user: any[] = [];
  CRUD = false;
  admin = false;
  Add_project = false;
  import = false;
  export = false;

  constructor(private http: HttpClient, private router: Router) {
    this.username = '';
    this.password = '';
  }

  ngOnInit() {
    // Vérifier si l'utilisateur est déjà connecté lors de l'initialisation du composant
    if (localStorage.getItem('isLoggedIn') === 'true') {
      // Rediriger vers une autre page si l'utilisateur est déjà connecté
      this.router.navigate(['/bord']);
    }
  }

  //login

  login() {
    this.http
      .get(
        'http://localhost:3002/trs-enc/login' +
          '/' +
          this.username +
          '/' +
          this.password
      )
      .subscribe((data: any) => {
        if (data && data.length > 0 && data[0].compte != 0) {
          const firstUser = data[0]; // Obtenir le premier utilisateur (s'il y en a plusieurs)
          localStorage.setItem('isLoggedIn', 'true'); // Connectez l'utilisateur et stockez l'état de connexion dans le localStorage
          localStorage.setItem('CRUD', firstUser.CRUD.toString()); // Stocker le droit CRUD de l'utilisateur dans le localStorage
          localStorage.setItem('nom', firstUser.nom.toString()); // Stocker le nom de l'utilisateur dans le localStorage
          localStorage.setItem('prenom', firstUser.prenom.toString()); // Stocker le prenom de l'utilisateur dans le localStorage
          localStorage.setItem('poste', firstUser.poste.toString()); // Stocker le prenom de l'utilisateur dans le localStorage
          localStorage.setItem('admin', firstUser.admin.toString()); // Stocker le prenom de l'utilisateur dans le localStorage
          localStorage.setItem('compte', firstUser.compte.toString());
          localStorage.setItem('photo', firstUser.photo.toString());
          localStorage.setItem('import', firstUser.import.toString());
          localStorage.setItem('export', firstUser.export.toString());
          localStorage.setItem('Add_project', firstUser.Add_project.toString());
          localStorage.setItem('direction', firstUser.direction.toString());
          this.router.navigate(['/bord']); // Rediriger vers la page du tableau de bord
          console.log('Le droit CRUD est égal à', firstUser.CRUD); // Afficher le droit CRUD dans la console
          console.log('Le droit compte est égal à', firstUser.compte); // Afficher le droit CRUD dans la console
          console.log('Le droit compte est égal à', firstUser.photo); // Afficher le droit CRUD dans la console
          console.log('La direction', firstUser.direction); // Afficher le droit CRUD dans la console
        } else {
          alert("Veuillez vérifier vos données d'identification."); // Afficher une alerte si les identifiants sont incorrects
        }
      });
    console.log(this.username); // Afficher le nom d'utilisateur dans la console
  }
}