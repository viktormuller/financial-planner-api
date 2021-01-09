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
    gic = "gic",
    "health reimbursement arrangement" = "health reimburesement arragnement",
    hsa = "hsa",
    isa = "isa",
    ira = "ira",
    lif = "lif",
    lira = "lira",
    lrif = "lrif",
    lrsp = "lrsp",
    "non taxable brokerage account" = "non-taxable brokerage account",
    prif = "prif",
    rdsp = "rdsp",
    resp = "resp",
    rlif = "rlif",
    rrif = "rrif",
    pension = "pension",
    "profit sharing plan" = "profit sharing plan",
    retirement = "retirement",
    roth = "roth",
    "roth 401k" = "roth 401k",
    rrsp = "rrsp",
    "sep ira" = "sep ira",
    "simple ira" = "simple ira",
    sipp = "sipp",
    "stock plan" = "stock plan",
    "thrift savings plan" = "thrift savings plan",
    tfsa = "tfsa",
    trust = "trust",
    ugma = "ugma",
    utma = "utma",
    "variable annuity" = "variable annuity",
    "credit card" = "credit card",
    paypal = "paypal",
    cd = "cd",
    checking = "checking",
    savings = "savings",
    "money market" = "money market",
    prepaid = "prepaid",
    auto = "auto",
    commerical = "commercial",
    construction = "construction",
    consumer = "consumer",
    home = "home",
    "home equity" = "home equity",
    loan = "loan",
    mortgage = "mortgage",
    overdraft = "overdraft",
    "line of credit" = "line of credit",
    student = "student",
    "cash management" = "cash management",
    keogh = "keogh",
    "mutual fund" = "mutual fund",
    recurring = "recurring",
    rewards = "rewards",
    "safe deposit" = "safe deposit",
    sarsep = "sarsep",
    other = "other"
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
    [BankAccountSubType["stock plan"], BankAccountTaxType.TAXABLE],

    [BankAccountSubType["401a"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["401k"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["403b"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["457b"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.pension, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.ira, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType.retirement, BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["sep ira"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["simple ira"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["variable annuity"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["profit sharing plan"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["thrift savings plan"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["stock plan"], BankAccountTaxType.TAX_DEFERRED],
    [BankAccountSubType["non taxable brokerage account"], BankAccountTaxType.TAX_DEFERRED],

    [BankAccountSubType["roth"], BankAccountTaxType.TAX_FREE],
    [BankAccountSubType["roth 401k"], BankAccountTaxType.TAX_FREE],
    [BankAccountSubType.hsa, BankAccountTaxType.TAX_FREE],
    [BankAccountSubType["health reimbursement arrangement"], BankAccountTaxType.TAX_FREE],

    [BankAccountSubType["_529"], BankAccountTaxType.OTHER],
    [BankAccountSubType["education savings account"], BankAccountTaxType.OTHER],
    [BankAccountSubType.ugma, BankAccountTaxType.OTHER],
    [BankAccountSubType.utma, BankAccountTaxType.OTHER],
    [BankAccountSubType.trust, BankAccountTaxType.OTHER]
]);
