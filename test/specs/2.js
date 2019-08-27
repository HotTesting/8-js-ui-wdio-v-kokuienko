
describe('Website', function () {
    it('should be alive', function () {
        browser.url('/rubber-ducks-c-1/')
        const products = $$('.product')
        let redDuck = products.find(product => product.getText().includes('Red Duck'))
        let a = products[5].getText()
        let second = $$('p>*')[2]
    })
})