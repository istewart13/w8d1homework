var Bank = require('./bank/bank.js');
var sampleAccounts = require('./sample.json');
var Account = require('./bank/account.js');
var BankView = require('./bank/bankView.js');

window.onload = function(){
  console.log('loaded');
  var bank = new Bank();

  for (accountData of sampleAccounts) {
    bank.addAccount(new Account(accountData));
  }

  var bankView = new BankView(bank);
  bankView.renderDetails();

}
