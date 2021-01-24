import { BankAccount } from "./BankAccount";
import { FinancialAccount } from "./FinancialAccounts/FinancialStatement";
import { Holding } from "./Holding";

export * from "./BankAccount";
export * from "./Holding";
export * from "./FinancialAccounts/ChartOfAccounts";
export * from "./FinancialAccounts/FinancialStatement";
export * from "./FinancialAccounts/HouseholdCoA";
export * from "./MonetaryAmount"
export * from "./Transaction"
export * from "./Currency"

export interface FP_API{
    getLinkToken(userId?:string):Promise<string>;

    setPublicToken(publicToken:string, userId?:string):Promise<string>;

    hasPlaidAccessToken(userId?:string):Promise<boolean>;

    getBankAccounts(userId?:string):Promise<BankAccount[]>;

    getHoldings(userId?:string):Promise<Holding[]>;

    getCashFlowAccounts(userId?: string):Promise<FinancialAccount[]>;
}