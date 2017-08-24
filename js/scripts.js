//Business Logic

function BankAccount(name,balance) {
  this.name=name;
  this.balance=balance;

};

//user interface
$(document).ready(function() {
  $("form#create-account").submit(function(event){
     event.preventDefault();
   var inputtedFullName=$("input#full-name").val();
   var inputtedBalance=$("input#initial-deposit").val();
   console.log(inputtedFullName,inputtedBalance);

   var newCustomer=new BankAccount(inputtedFullName,inputtedBalance);


  });

});
