const assert = require('assert');
const BankAccount = require('../app/BankAccount');

describe('BankAccount', () => {
    describe('#current', () => {
        let bankAccount = new bankAccount();
        bankAccount.append(50);
        it('Should show current amount', () => {
            assert.equal(50, bankAccount.current());
        })
    })

    describe('#appendPos', () => {
        let bankAccount = new bankAccount();
        it('Should append amount', () => {
            assert.equal(50, bankAccount.append(50));
        })
    })

    describe('#appendNeg', () => {
        let bankAccount = new bankAccount();
        it('Should not append amount', () => {
            assert.equal(0, bankAccount.append(-50));
        })
    })

    describe('#substractPos', () => {
        let bankAccount = new bankAccount();
        bankAccount.append(100);
        it('Should substract amount', () => {
            assert.equal(50, bankAccount.substract(50));
        })
    })

    describe('#substractNeg', () => {
        let bankAccount = new bankAccount();
        bankAccount.append(100);
        it('Should not substract amount', () => {
            assert.equal(100, bankAccount.substract(-50));
        })
    })

    describe('#mergePos', () => {
        let bankAccount1 = new bankAccount();
        bankAccount.append(100);
        let bankAccount2 = new bankAccount();
        bankAccount.append(75);
        it('Should merge accounts and sum amounts', () => {
            assert.equal(175, bankAccount1.merge(bankAccount2));
        })
    })

    describe('#mergeNeg', () => {
        let bankAccount1 = new bankAccount();
        bankAccount.append(100);
        let bankAccount2 = new bankAccount();
        bankAccount.substract(75);
        it('Should merge accounts and substract amounts', () => {
            assert.equal(25, bankAccount1.merge(bankAccount2));
        })
    })

    describe('#history', () => {
        let bankAccount = new bankAccount();
        bankAccount.append(100);
        bankAccount.substract(50);
        it('Should show history', () => {
            assert.deepEqual([{operation: "append", amount: 100}, {operation: "substract", amount: 50}], bankAccount.history());
        })
    })
})