export interface Contact {
  recipient: Recipient;
  accountInfo: AccountInfo;
  email: string;
}

export interface AccountInfo {
  bankName: string;
  bankCode: string;
  type: string;
  number: string;
}

export interface Recipient {
  names: string;
  idCard: string;
  identificationType: string;
}
