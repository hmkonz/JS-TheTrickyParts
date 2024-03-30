// initialize 'balance' to zero so that when create an instance of createAccount (below) can add the initial deposit amount to it; otherwise, 'balance' will be undefined and an error will be thrown when try to add the initial deposit amount to undefined
function createAccount(pin, balance = 0) {
  // The return value should be an object with four methods on it:
  return {
    checkBalance(inputPin) {
      // if the inputPin matches the account 'pin', return the account balance; otherwise, return "Invalid PIN"
      if (inputPin === pin) {
        return `$${balance}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit(inputPin, depositAmount) {
      // if the inputPin matches the account 'pin' and a depositAmount is given:
      if (inputPin === pin && depositAmount) {
        // add the depositAmount to the balance and return the current balance
        balance += depositAmount;
        return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
      }
      // if PIN is invalid, return "Invalid PIN"
      else if (inputPin !== pin) {
        return "Invalid PIN.";
      }
      // if no depositAmount is included,
      else if (!depositAmount) {
        return "No money was included with deposit. Transaction cancelled!";
      }
    },
    withdraw(inputPin, withdrawalAmount) {
      // if the inputPin matches the account 'pin' and a withdrawalAmount is given:
      if (inputPin === pin && withdrawalAmount) {
        // check first to see if there's enough money in the account to withdraw the 'withdrawlAmount' and if so, subtract 'withdrawalAmount' from 'balance' and return the current balance
        if (balance >= withdrawalAmount) {
          balance -= withdrawalAmount;
          return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${balance}.`;
        }
        // if there's not enough money in the account to cover 'withdrawlAmount' then return a message saying so
        else if (balance < withdrawalAmount) {
          return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
      }
      // otherwise, return "Invalid PIN"
      else if (inputPin !== pin) {
        return "Invalid PIN.";
      }
      // if no withdrawalAmount is included,
      else if (!withdrawalAmount) {
        return "No amount was included with withdrawal. Transaction cancelled!";
      }
    },
    changePin(oldPin, newPin) {
      // check if 'oldPin' matches 'pin'. If so, assign 'pin' to 'newPin' and return message
      if (oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      }
      //   otherwise, if oldPin doesn't match 'pin', return "Invalid PIN"
      else {
        return "Invalid PIN.";
      }
    },
  };
}

let account = createAccount("1234", 100);

module.exports = { createAccount };
