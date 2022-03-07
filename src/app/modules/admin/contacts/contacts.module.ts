import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactsRoutingModule} from './contacts-routing.module';
import {ContactsComponent} from './contacts.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {SharedModule} from "../../../shared/shared.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    ContactsComponent,
    ContactInfoComponent,
    AddContactComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    SharedModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class ContactsModule {
}
