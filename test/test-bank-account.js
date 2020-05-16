const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('BankAccount', () => {
    describe('#current', () => {
        let bankAccount = new BankAccount();
        bankAccount.append(50);
        it('Should show current balance', () => {
            assert.equal(50, bankAccount.current());
        })
    })

    describe('#appendPos', () => {
        let bankAccount = new BankAccount();
        it('Should append amount', () => {
            assert.equal(50, bankAccount.append(50));
        })
    })

    describe('#appendNeg', () => {
        let bankAccount = new BankAccount();
        it('Should not append amount', () => {
            assert.equal(0, bankAccount.append(-50));
        })
    })

    describe('#substractPos', () => {
        let bankAccount = new BankAccount();
        bankAccount.append(100);
        it('Should substract amount', () => {
            assert.equal(50, bankAccount.substract(50));
        })
    })

    describe('#substractNeg', () => {
        let bankAccount = new BankAccount();
        bankAccount.append(100);
        it('Should not substract amount', () => {
            assert.equal(100, bankAccount.substract(-50));
        })
    })

    describe('#mergeAppendAppend', () => {
        let bankAccount1 = new BankAccount();
        bankAccount1.append(100);
        let bankAccount2 = new BankAccount();
        bankAccount2.append(75);
        bankAccount1.merge(bankAccount2);
        it('Should merge accounts and show correct history', () => {
            assert.deepEqual([{operation: "append", amount: 100}, {operation: "append", amount: 75}, {operation: "merge", amount: 75}], bankAccount1.getHistory());
        })
    })

    describe('#mergeAppendSubstract', () => {
        let bankAccount1 = new BankAccount();
        bankAccount1.append(100);
        let bankAccount2 = new BankAccount();
        bankAccount2.substract(75);
        bankAccount1.merge(bankAccount2);
        it('Should merge accounts and show correct history', () => {
            assert.deepEqual([{operation: "append", amount: 100}, {operation: "substract", amount: 75}, {operation: "merge", amount: -75}], bankAccount1.getHistory());
        })
    })

    describe('#mergeSumBalance', () => {
        let bankAccount1 = new BankAccount();
        bankAccount1.append(100);
        let bankAccount2 = new BankAccount();
        bankAccount2.append(75);
        bankAccount1.merge(bankAccount2);
        it('Should merge accounts and sum balance', () => {
            assert.equal(175, bankAccount1.current());
        })
    })

    describe('#mergeSubstractBalance', () => {
        let bankAccount1 = new BankAccount();
        bankAccount1.append(100);
        let bankAccount2 = new BankAccount();
        bankAccount2.substract(75);
        bankAccount1.merge(bankAccount2);
        it('Should merge accounts and substract balance', () => {
            assert.equal(25, bankAccount1.current());
        })
    })

    describe('#history', () => {
        let bankAccount = new BankAccount();
        bankAccount.append(50);
        bankAccount.substract(20);
        it('Should show history', () => {
            assert.deepEqual([{operation: "append", amount: 50}, {operation: "substract", amount: 20}], bankAccount.getHistory());
        })
    })
})