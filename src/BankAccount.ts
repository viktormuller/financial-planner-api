export interface BankAccount{
    accountId: string;
    name: string;
    type: BankAccountType;
    subType: string;
    taxType: BankAccountTaxType;    
    balance: number;
    limit?: number;
    currency: string;
}

export enum BankAccountType{
    INVESTMENT,
    CREDIT,
    DEPOSITORY,
    LOAN,
    OTHER
}

export enum BankAccountSubType{
    _401a, 
    _401k, 
    _403B, 
    _457b, 
    _529, 
    BROKERAGE, 
    CASH_ISA, 
    EDUCATION_SAVINGS_ACCOUNT,
    GIC, 
    HEALTH_REIMBURSEMENT_ARRANGEMENT,
    HSA,
    ISA,
    IRA,
    LIF,
    LIRA, 
    LRIF,
    LRSP, 
    NON_TAXABLE_BROKERAGE_ACCOUNT,
    PRIF,
    RDSP,
    RESP,
    RLIF,
    RRIF,
    PENSION,
    PROFIT_SHARING_PLAN,
    RETIREMENT,
    ROTH,
    ROTH_401K,
    RRSP,
    SEP_IRA,
    SIMPLE_IRA,
    SIPP,
    STOCK_PLAN,
    THRIFT_SAVINGS_PLAN,
    TFSA,
    TRUST,
    UGMA,
    UTMA,
    VARIABLE_ANNUITY,
    CREDIT_CARD,
    PAYPAL,
    CD,
    CHECKING,
    SAVINGS,
    MONEY_MARKET,
    PREPAID,
    AUTO,
    COMMERICAL,
    CONSTRUCTION,
    CONSUMER,
    HOME,
    HOME_EQUITY,
    LOAN,
    MORTGAGE,
    OVERDRAFT,
    LINE_OF_CREDIT,
    STUDENT,
    CASH_MANAGEMENT,
    KEOGH,
    MUTUAL_FUND,
    RECURRING,
    REWARDS,
    SAFE_DEPOSIT,
    SARSEP,
    OTHER
}

//Investment accounts only for now
export enum BankAccountTaxType{
    TAXABLE, 
    TAX_DEFERRED,
    TAX_FREE,
    OTHER
}



export const BANK_ACCOUNT_TAX_TYPE_BY_SUBTYPE = new Map<BankAccountSubType, BankAccountTaxType>([
    [BankAccountSubType.BROKERAGE ,BankAccountTaxType.TAXABLE ],
    [BankAccountSubType.STOCK_PLAN ,BankAccountTaxType.TAXABLE ],

    [BankAccountSubType._401a ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType._401k ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType._403B ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType._457b ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.PENSION ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.IRA ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.RETIREMENT ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.SEP_IRA ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.SIMPLE_IRA ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.VARIABLE_ANNUITY ,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.PROFIT_SHARING_PLAN,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.THRIFT_SAVINGS_PLAN,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.STOCK_PLAN,BankAccountTaxType.TAX_DEFERRED ],
    [BankAccountSubType.NON_TAXABLE_BROKERAGE_ACCOUNT,BankAccountTaxType.TAX_DEFERRED ],

    [BankAccountSubType.ROTH,BankAccountTaxType.TAX_FREE ],
    [BankAccountSubType.ROTH_401K,BankAccountTaxType.TAX_FREE ],
    [BankAccountSubType.HSA,BankAccountTaxType.TAX_FREE ],
    [BankAccountSubType.HEALTH_REIMBURSEMENT_ARRANGEMENT,BankAccountTaxType.TAX_FREE ],

    [BankAccountSubType._529,BankAccountTaxType.OTHER ],
    [BankAccountSubType.EDUCATION_SAVINGS_ACCOUNT,BankAccountTaxType.OTHER ],
    [BankAccountSubType.UGMA,BankAccountTaxType.OTHER ],
    [BankAccountSubType.UTMA,BankAccountTaxType.OTHER ],
    [BankAccountSubType.TRUST,BankAccountTaxType.OTHER ]
]);
