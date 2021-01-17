import { BankAccount } from "./BankAccount";
import { Holding } from "./Holding";

export * from "./BankAccount";
export * from "./Holding";

export interface FP_API{
    getLinkToken(userId?:string):Promise<string>;

    setPublicToken(publicToken:string, userId?:string):Promise<string>;

    hasPlaidAccessToken(userId?:string):Promise<boolean>;

    getBankAccounts(userId?:string):Promise<BankAccount[]>;

    getHoldings(userId?:string):Promise<Holding[]>;
}