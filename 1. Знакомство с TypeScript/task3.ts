interface IAccount {
    id: number;
    balance: number;    
    makeDeposit(amount: number): void;
    withdraw(amount: number): boolean;
    getBalance(): number;
}

interface ICreditAccount extends IAccount {
    creditLimit: number;
    getDebt(): number;
}

class DebitAccount implements IAccount {
    readonly id: number
    balance: number;

    constructor(id: number ,initialBalance: number) {
        this.id = id;
        this.balance = initialBalance;
    }

    makeDeposit(amount: number): void {
        console.log(`Пополнение дебетового счета: ${amount}`);
        this.balance += amount;
        console.log(`Текущий баланс: ${this.balance}`);
    }

    withdraw(amount: number): boolean {
        if (this.balance >= amount) {
            console.log(`Снятие с дебетового счета: ${amount}`);
            this.balance -= amount;
            console.log(`Текущий баланс: ${this.balance}`);
            return true;
        } else {
            console.log('Недостаточно средств.');
            return false;
        }
    }

    getBalance(): number {
        console.log(`Баланс ${this.id}: ${this.balance}`);
        return this.balance;
    }
}

class CreditAccount implements ICreditAccount {
    readonly id: number
    balance: number;
    creditLimit: number;

    constructor(id: number, creditLimit: number, initialBalance: number) {
        this.id = id;
        this.creditLimit = creditLimit;
        this.balance = initialBalance;
    }

    makeDeposit(amount: number): void {
        console.log(`Пополнение кредитного счета: ${amount}`);
        this.balance += amount;
        console.log(`Текущий баланс: ${this.balance}`);
    }

    withdraw(amount: number): boolean {
        if (this.balance + this.creditLimit >= amount) {
            console.log(`Снятие с кредитного счета суммы: ${amount}`);
            this.balance -= amount;
            console.log(`Текущий баланс:: ${this.balance}`);
            return true;
        } else {
            console.log('Превышен кредитный лимит.');
            return false;
        }
    }

    getBalance(): number {
        console.log(`Балнас ${this.id}: ${this.balance}`);
        return this.balance;
    }

    getDebt(): number {
        const debt = this.balance < 0 ? -this.balance : 0;
        console.log(`Текущий долг по кредитному счету: ${debt}`);
        return debt;
    }
}

const debitAccount = new DebitAccount(12345, 100);
debitAccount.makeDeposit(100);
debitAccount.withdraw(50);
debitAccount.withdraw(1000);
debitAccount.getBalance();


const creditAccount = new CreditAccount(12345, 500, 0);
creditAccount.makeDeposit(200);
creditAccount.withdraw(300);
creditAccount.withdraw(1500);
creditAccount.getBalance();
creditAccount.getDebt();