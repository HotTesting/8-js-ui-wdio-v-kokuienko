const assert = require('assert');

describe('Website', function () {
    it('should be alive', function () {
        const url = 'http://test.com'
        browser.url(`${url}/hello/world`)
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]')
        assert(img.isExisting(), 'Website should be opened, and logo displayed')
        browser.pause(5000)
    })
})