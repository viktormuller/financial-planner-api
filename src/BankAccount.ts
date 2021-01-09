export interface BankAccount {
    accountId: string;
    name: string;
    type: BankAccountType;
    subType: string;
    taxType: BankAccountTaxType;
    balance: number;
    limit?: number;
    currency: string;
}

export enum BankAccountType {
    investment = "investment",
    credit = "credit",
    depository = "depository",
    loan = "loan",
    other = "other"
}

export enum BankAccountSubType {
    "401a" = "401a",
    "401k" = "401k",
    "403b" = "403b",
    "457b" = "457b",
    "_529" = "_529",
    brokerage = "brokerage",
    "cash isa" = "cash isa",
    "education savings account" = "education savings account",
    GIC = "gic",
    HEALTH_REIMBURSEMENT_ARRANGEMENT = "health reimburesement arragnement",
    HSA = "hsa",
    ISA = "isa",
    ira = "ira",
    LIF = "lif",
    LIRA = "lira",
    LRIF = "lrif",
    LRSP = "lrsp",
    NON_TAXABLE_BROKERAGE_ACCOUNT = "non-taxable brokerage account",
    PRIF = "prif",
    RDSP = "rdsp",
    RESP = "resp",
    RLIF = "rlif",
    RRIF = "rrif",
    PENSION = "pension",
    PROFIT_SHARING_PLAN = "profit sharing plan",
    RETIREMENT = "retirement",
    ROTH = "roth",
    ROTH_401K = "roth 401k",
    RRSP = "rrsp",
    SEP_IRA = "sep ira",
    SIMPLE_IRA = "simple ira",
    SIPP = "sipp",
    STOCK_PLAN = "stock plan",
    THRIFT_SAVINGS_PLAN = "thrift savings plan",
    TFSA = "tfsa",
    TRUST = "trust",
    UGMA = "ugma",
    UTMA = "utma",
    VARIABLE_ANNUITY = "variable annuity",
    "credit card" = "credit card",
    PAYPAL = "paypal",
    cd = "cd",
    checking = "checking",
    savings = "savings",
    "money market" = "money market",
    PREPAID = "prepaid",
    AUTO = "auto",
    COMMERICAL = "commercial",
    CONSTRUCTION = "construction",
    CONSUMER = "consumer",
    HOME = "home",
    HOME_EQUITY = "home equity",
    LOAN = "loan",
    mortgage = "mortgage",
    OVERDRAFT = "overdraft",
    LINE_OF_CREDIT = "line of credit",
    student = "student",
    CASH_MANAGEMENT = "cash management",
    KEOGH = "keogh",
    MUTUAL_FUND = "mutual fund",
    RECURRING = "recurring",
    REWARDS = "rewards",
    SAFE_DEPOSIT = "safe deposit",
    SARSEP = "sarsep",
    OTHER = "other"
}

//Investment accounts only for now
export enum BankAccountTaxType {
    TAXABLE = "taxable",
    TAX_DEFERRED = "tax_deferred",
    TAX_FREE = "tax_free",
    OTHER = "other"
}



export const BANK_ACCOUNT_TAX_TYPE_BY_SUBTYPE = new Map<BankAccountSubType, BankAccountTaxType>([
    [BankAccountSubType.brokerage, BankAccountTaxType.TAXABLE],
    [BankAccountSubType.STOCK_PLAN, BankAccountTaxType.TAXABLE],

    [BankAccountSubType["401a"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["401k"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["403b"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["457b"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.PENSION, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.ira, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.RETIREMENT, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.SEP_IRA, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.SIMPLE_IRA, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.VARIABLE_ANNUITY, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.PROFIT_SHARING_PLAN, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.THRIFT_SAVINGS_PLAN, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.STOCK_PLAN, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.NON_TAXABLE_BROKERAGE_ACCOUNT, BankAccountTaxType.TAX_DEFERRED],

    [BankAccountSubType.ROTH, BankAccountTaxType.TAX_FREE],
    [BankAccountSubType.ROTH_401K, BankAccountTaxType.TAX_FREE],
    [BankAccountSubType.HSA, BankAccountTaxType.TAX_FREE],
    [BankAccountSubType.HEALTH_REIMBURSEMENT_ARRANGEMENT, BankAccountTaxType.TAX_FREE],

    [BankAccountSubType["_529"], BankAccountTaxType.OTHER],
    [BankAccountSubType["education savings account"], BankAccountTaxType.OTHER],
    [BankAccountSubType.UGMA, BankAccountTaxType.OTHER],
    [BankAccountSubType.UTMA, BankAccountTaxType.OTHER],
    [BankAccountSubType.TRUST, BankAccountTaxType.OTHER]
]);
