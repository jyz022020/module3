// TODO: What is `this` referring to here?
// This refers to the window
console.log(this);

// TODO: What is `this` referring to here?
// This refers to window object the message that the console will log
function helloThis() {
  console.log('Inside this function, this is ' + this);
}

// TODO: What is `this` referring to here? What will be logged in the console?
// This refers to the child object. Will console log age 20
var child = {
  age: 10,
  ageTenYears: function() {
    console.log(this.age + 10);
  }
};

// TODO: What is `this` referring to here? What will be logged in the console?
var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15);
    }
  }
};

// TODO: Call the `helloThis` function and the object methods to check results in the console
helloThis();
child.ageTenYears();
investor.investment.investmentGrowth();