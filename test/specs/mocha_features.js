describe("Registration @ALL", function () {
  this.retries(3); 

  let isFailed = false

  it("should be successful", function() {
    try {
      this.timeout(340000);
      this.retries(2);
      this.slow(10000);
  
      console.log("DONE: should be successful");
    } catch (err) {
      isFailed = true
      throw err
    } 
  });

  it("can be done via Facebook", function() {
    if (isFailed) {
      throw new Error('')
    }
    console.log("DONE: can be done via Facebook");
  });

  it("should be failed for existing email @SMOKE", function() {
    console.log("DONE: should be failed for existing email");
  });

  it("has email as required field", function() {
    console.log("DONE: has email as required field");
  });
});
