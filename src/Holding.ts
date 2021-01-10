export enum SecurityType{
    cash = "cash",
    derivative = "derivative",
    equity = "equity", 
    etf = "etf",
    "fixed income" = "fixed income",
    loan = "loan",
    "mutual fund" = "mutual fund", 
    other = "other"
}

export interface Holding{
    accountId:string, 
    securityName: string,
    securityType: SecurityType,
    value: number,
    currency: string,
    costBasis?: number
}