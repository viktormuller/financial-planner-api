import { BankAccount } from "./BankAccount";
import { Holding } from "./Holding";

export * from "./BankAccount";
export * from "./Holding";

export interface FP_API{
    getLinkToken(userId:string):Promise<string>;

    setPublicToken(userId:string, publicToken:string):Promise<string>;

    getBankAccounts(userId:string):Promise<BankAccount[]>;

    getHoldings():Promise<Holding[]>;
}