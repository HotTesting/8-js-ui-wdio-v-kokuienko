import { expect } from 'chai';

describe('Test', function () {
    beforeEach(function () {
        // browser.setTimeout({
        //     implicit: 1000
        // });
    })

    it("negative", function () {
        browser.url("/");
        browser.setTimeout({
            implicit: 0
        });
        let timeouts = browser.getTimeouts()

        console.dir(timeouts)
        let res = $("nonexist").isDisplayed();
        expect(res).to.equal(false);
    });

    it.only("explicit testing non-existing elements", function() {
        browser.url("/");
        
        // $('nonexist').waitForDisplayed()

        $('div').waitForDisplayed(null, null, 'Expected div to became visible')
        
        // $('div').waitForEnabled()
        // $('div').waitForExist()
    
        // browser.waitUntil(
        //   function() {
        //     return !$(".loader").isDisplayed() && $("div").isDisplayed();
        //   },
        //   undefined,
        //   undefined,
        //   100
        // );
      });
})
