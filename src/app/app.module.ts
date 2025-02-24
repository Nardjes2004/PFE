/* this file contains importation and routing for other files ( for example when i click on projets , it leads me to another file , if u know u know )
instead of having app-routing.module.ts , we directly wrote the code here so that no one
steals our precious lil code , unless they have full access to the code ;) */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [];
//////////////
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { TreeTableModule } from 'primeng/treetable';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { AnimateModule } from 'primeng/animate';
import { ImageModule } from 'primeng/image';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CheckboxModule } from 'primeng/checkbox';
import { ChartModule } from 'primeng/chart';
import { DividerModule } from 'primeng/divider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PasswordModule } from 'primeng/password';
import { MultiSelectModule } from 'primeng/multiselect';
import { DragDropModule } from 'primeng/dragdrop';
/////////////
import { AppComponent } from './app.component';
import { TrsComponent } from './trs/trs.component';
//////////////////////
import { AuthService } from 'src/app/login/auth.service';
import { TrsEncComponent } from './trs-enc/trs-enc.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SitTrsComponent } from './sit-trs/sit-trs.component';
import { MntChqEncTrsComponent } from './mnt-chq-enc-trs/mnt-chq-enc-trs.component';
import { LoginComponent } from './login/login.component';
import { GanttComponent } from './Gantt/Gantt.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { JrnActComponent } from './jrn-act/jrn-act.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { AjtTrsComponent } from './ajt-trs/ajt-trs.component';

@NgModule({
  declarations: [
    AppComponent,
    TrsComponent,
    TrsEncComponent,
    NavbarComponent,
    SidenavComponent,
    SitTrsComponent,
    MntChqEncTrsComponent,
    LoginComponent,
    GanttComponent,
    RegisterComponent,
    UsersComponent,
    JrnActComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'bord',
        component: TrsEncComponent,
        canActivate: [AuthService],
      },
      {
        path: 'sit-tresorerie',
        component: SitTrsComponent,
        canActivate: [AuthService],
      },
      {
        path: 'Montant-chéque',
        component: MntChqEncTrsComponent,
        canActivate: [AuthService],
      },
      {
        path: 'Gantt',
        component: GanttComponent,
        canActivate: [AuthService],
      },
      {
        path: 'liste-utilisateurs',
        component: UsersComponent,
        canActivate: [AuthService],
      },
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthService],
      },
      {
        path: 'journal-activité',
        component: JrnActComponent,
        canActivate: [AuthService],
      }
      ,
      {
        path: 'projet',
        component: MntChqEncTrsComponent,
        canActivate: [AuthService],
      },

      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]),
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    TreeTableModule ,
    InputTextModule,
    DividerModule,
    FormsModule,
    MessagesModule,
    DragDropModule,
    MultiSelectModule,
    ToastModule,
    TabMenuModule,
    TabViewModule,
    DialogModule,
    ConfirmDialogModule,
    CalendarModule,
    InputNumberModule,
    FileUploadModule,
    CardModule,
    AnimateModule,
    ImageModule,
    MenubarModule,
    BreadcrumbModule,
    CheckboxModule,
    ChartModule,
    ToggleButtonModule,
    PasswordModule,
    GanttModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}