import { BankAccount } from "./BankAccount";

export * from "./BankAccount";

export interface FP_API{
    getLinkToken(userId:string):Promise<string>;

    setPublicToken(userId:string, publicToken:string):Promise<string>;

    getBankAccounts(userId:string):Promise<BankAccount[]>;
}