import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Bank} from "../../../../model/bank";
import {CatalogService} from "../../../../shared/services/catalog/catalog.service";
import {AccountType} from "../../../../model/account-type";
import {IdType} from "../../../../model/id-type";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  form: FormGroup | undefined;
  banks: Observable<Bank[]> | undefined;
  accountTypes: Observable<AccountType[]> | undefined;
  idTypes: Observable<IdType[]> | undefined;
  constructor(
    private fb: FormBuilder,
    private catalogService: CatalogService,
    private dialogRef: MatDialogRef<AddContactComponent>,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.getBanks();
    this.getAccountTypes();
    this.getIdTypes();
    this.setBankName();
  }

  get accountInfo() {
    return this.form?.get('accountInfo') as FormGroup;
  }

  get recipient() {
    return this.form?.get('recipient') as FormGroup;
  }

  private createForm(): any {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      recipient: this.fb.group({
        names: ['', Validators.required],
        idCard: ['', [Validators.required, Validators.maxLength(10)]],
        identificationType: ['', Validators.required],
      }),
      accountInfo: this.fb.group({
        bankName: [''],
        bankCode: ['', Validators.required],
        type: [''],
        number: ['', Validators.required],
      }),
    });
  }

  private getBanks() {
    this.banks = this.catalogService.getBanks();
  }

  private getAccountTypes() {
    this.accountTypes = this.catalogService.getAccountTypes();
  }

  private getIdTypes() {
    this.idTypes = this.catalogService.getIdTypes();
  }

  private setBankName() {
    this.accountInfo.get('bankCode')?.valueChanges
      .subscribe(bankCode => {
      this.banks?.subscribe(banks => {
        const bank = banks.find(bank => bank.bankCode === bankCode);
        this.accountInfo.get('bankName')?.setValue(bank?.bankName);
      });
    });
  }

  saveForm() {
    this.dialogRef.close(this.form?.value)
  }
}
