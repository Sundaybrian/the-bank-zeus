//Business Logic

function BankAccount(name,balance) {
  this.name=name;
  this.balance=balance;

};





//user interface
$(document).ready(function() {
//submit function for create-account
  $("form#create-account").submit(function(event){
    event.preventDefault();
    var inputtedFullName=$("input#full-name").val();
    var inputtedBalance=$("input#initial-deposit").val();
    console.log(inputtedFullName,inputtedBalance);

    var newCustomer=new BankAccount(inputtedFullName,inputtedBalance);


  });

  //submit function for deposit
  $("form#deposit-funds").submit(function(event){
    event.preventDefault();
    var inputtedDeposit=$("input#deposit").val();
    console.log(inputtedDeposit);




  });



});
