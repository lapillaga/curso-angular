export interface Product {
  products: ProductInfo[];
  account: AccountType;
}

export interface ProductInfo {
  code: string;
  accountAvailable: number;
  accountUsed: number;
  accountNumber: string;
}

export interface AccountType {
  code: string;
  name: string;
}

export interface Transaction {
  description: string;
  type: TransactionType;
  amount: number;
  date: Date;
  currentBalance: number;
  number: string;
  canal: string;
  account: string;
}

export interface TransactionType {
  code: string;
  name: string;
}
