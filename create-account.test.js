const { createAccount } = require("./create-account");

describe("createAccount", function() {
  let account;
  let bigAccount;

  beforeEach(function() {
    account = createAccount("1234");
    bigAccount = createAccount("4321", 10000);
  });

  it("has four methods on it", function() {
    expect(account.checkBalance).toBeInstanceOf(Function);
    expect(account.deposit).toBeInstanceOf(Function);
    expect(account.withdraw).toBeInstanceOf(Function);
    expect(account.changePin).toBeInstanceOf(Function);
  });

  it("accepts an optional starting balance as a second argument", function() {
    expect(bigAccount.checkBalance("4321")).toBe("$10000");
  });

  describe("checkBalance", function() {
    it("returns 'Invalid PIN.' if the PIN doesn't match", function() {
      expect(account.checkBalance("nope")).toBe("Invalid PIN.");
    });

    it("returns the balance if the pin is correct", function() {
      expect(account.checkBalance("1234")).toBe("$0");
    });
  });

  describe("deposit", function() {
    it("returns 'Invalid PIN.' if the PIN doesn't match", function() {
      expect(account.deposit("nope", 100)).toBe("Invalid PIN.");
    });

    it("adds the amount to the account balance", function() {
      expect(account.deposit("1234", 100)).toBe(
        "Succesfully deposited $100. Current balance: $100."
      );
      expect(account.deposit("1234", 200)).toBe(
        "Succesfully deposited $200. Current balance: $300."
      );
      expect(account.checkBalance("1234")).toBe("$300");
    });
  });

  describe("withdraw", function() {
    it("returns 'Invalid PIN.' if the PIN doesn't match", function() {
      expect(bigAccount.withdraw("nope", 100)).toBe("Invalid PIN.");
    });

    it("subtracts the amount from the account balance", function() {
      expect(bigAccount.withdraw("4321", 250)).toBe(
        "Succesfully withdrew $250. Current balance: $9750."
      );
      expect(bigAccount.withdraw("4321", 1000)).toBe(
        "Succesfully withdrew $1000. Current balance: $8750."
      );
    });

    it("prohibits you from withdrawing more than you have", function() {
      expect(account.withdraw("1234", 50)).toBe(
        "Withdrawal amount exceeds account balance. Transaction cancelled."
      );
    });
  });

  describe("changePin", function() {
    it("returns 'Invalid PIN.' if the PIN doesn't match", function() {
      expect(bigAccount.withdraw("nope", 100)).toBe("Invalid PIN.");
    });

    it("changes the PIN with a success message if the PIN matches", function() {
      expect(account.changePin("1234", "5678")).toBe(
        "PIN successfully changed!"
      );
      expect(account.checkBalance("1234")).toBe("Invalid PIN.");
      expect(account.checkBalance("5678")).toBe("$0");
    });
  });
});
