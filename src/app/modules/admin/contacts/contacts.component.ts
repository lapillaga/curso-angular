import {Component, OnInit} from '@angular/core';
import {Contact} from 'src/app/model/contact';
import {ContactService} from 'src/app/shared/services/contact/contact.service';
import {FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AddContactComponent} from "./add-contact/add-contact.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  searchCtrl = new FormControl();
  isLoading = true;

  constructor(
    private contactService: ContactService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.getContacts('');
    this.searchCtrl.valueChanges
      .subscribe(value => this.onFilterChange(value));
  }

  onFilterChange(value: string) {
    value = value.trim();
    value = value.toLowerCase();
    this.getContacts(value);
  }

  getContacts(name: string): void {
    this.contactService.getContacts(name)
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
        this.isLoading = false;
      }, (error: HttpErrorResponse) => {
        this.openSnackBar(error.error.message, 'OK');
        this.isLoading = false;
      });
  }

  getInitials(nameString: string): string {
    const allNames = nameString.trim().split(' ');
    return allNames.reduce((acc: string, curr: string, index: number) => {
      if (index === 0 || index === allNames.length - 1) {
        acc = `${acc}${curr.charAt(0).toUpperCase()}`;
      }
      return acc;
    }, '');
  }

  createContact() {
    this.dialog.open(AddContactComponent, {
      width: '500px',
      maxWidth: '100%',
      disableClose: true
    }).afterClosed()
      .subscribe((contact: Contact) => {
        if (contact) {
          this.isLoading = true;
          this.contactService.addContact(contact)
            .subscribe((newContact: Contact) => {
              if (newContact) {
                this.getContacts('');
                this.openSnackBar('Contact added successfully', 'OK');
              }
              this.isLoading = false;
            }, (error: HttpErrorResponse) => {
              this.openSnackBar(error.error.message, 'OK');
              this.isLoading = false;
            });
        }
      });
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(
      message,
      action,
      {
        duration: 3000,
      }
    );
  }
}
