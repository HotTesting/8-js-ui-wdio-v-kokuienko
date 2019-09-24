import { ProductDetailsModel } from '../dataModels/ProductDetails';
import { BasePage } from './base';
// for example: http://ip-5236.sunline.net.ua:38015/rubber-ducks-c-1/blue-duck-p-4


export class ProductDetails extends BasePage {
    open(productPath) {
        browser.url(productPath)
    }

    addToCart() {
        const currentItemsInCart = this.header.getQuantity()
        $('button[name="add_cart_product"]').click()
        browser.waitUntil(() => {
            return this.header.getQuantity() > currentItemsInCart
        }, null, `Expected items in cart to be changed. 
        Current items: ${this.header.getQuantity()} items before ${currentItemsInCart}`)
    }

    public getProductPrice() {
        return parseFloat($('#box-product')
            .getAttribute('data-price'))
    }

    public getProductName() {
        return $('h1.title').getText()
    }

    public getProductDetails() {
        const productDetails = new ProductDetailsModel()

        productDetails.name = this.getProductName()
        productDetails.price = this.getProductPrice()

        return productDetails
    }
}
