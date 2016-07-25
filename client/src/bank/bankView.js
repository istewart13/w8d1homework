var BankView = function(bank){
  this.bank = bank;
}

BankView.prototype = {
  renderDetails: function(){
    this.displayTotal();
    this.displayInterest();
    this.displayAccountTotals();
    this.displayAccountsByType();
  },
  displayTotal: function() {
    var totalDisplay = document.getElementById('total');
    console.log(totalDisplay);
    totalDisplay.innerText = "Total: £" + this.bank.totalCash().toFixed(2);
  },
  displayAccountTotals: function() {
    var accountList = document.getElementById('accounts');
    accountList.innerHTML = "";
    for (account of this.bank.accounts) {
      var accountListItem = document.createElement('li');
      accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
      accountList.appendChild(accountListItem);
    }
  }, 
  displayInterest: function() {
    var addInterest = document.getElementById('add-interest');
    var displayInterest = document.getElementById('interest');
    addInterest.onclick = function() {
      displayInterest.innerText = "Total with interest: £" + this.bank.addInterest(0.1).toFixed(2);
      this.displayAccountTotals();
      this.displayAccountsByType();
    }.bind(this);
  },
  displayAccountsByType: function() {
    var personal = document.getElementById('personal-accounts');
    var business = document.getElementById('business-accounts');
    personal.innerText = "Personal accounts:";
    business.innerText = "Business accounts:";
    for (account of this.bank.accounts) {
      var liType = document.createElement('li');
      console.log("here");
      if (account.type === "personal") {
        liType.innerText = account.owner + ": £" + account.amount.toFixed(2);
        personal.appendChild(liType);
      } else {
        liType.innerText = account.owner + ": £" + account.amount.toFixed(2);
        business.appendChild(liType);
      }
    }
  }
}

module.exports = BankView;