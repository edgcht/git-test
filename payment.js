var payment = {
  apiKey: "azeaeaeazaez",
  currency: "usd",
  methods: ["card", "paypal", "bank_transfer"],
  processPayment: function(amount, method) {
    if (this.methods.includes(method)) {
      console.log(`Processing ${amount} ${this.currency} via ${method}`);
      // Simulate payment processing
      return true;
    } else {
      console.log(`Payment method ${method} not supported.`);
      return false;
    }
  }
};

module.exports = payment;