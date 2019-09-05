import { expect } from 'chai';

describe('Website', function () {
    it('should be alive', function () {
        browser.url(`/`)
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]')
        expect(img.isExisting(), 'Website should be opened, and logo displayed').to.be.true
    })
})