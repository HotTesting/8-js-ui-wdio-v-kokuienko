
export class Checkout {
    shoppingCart

    constructor() {
        this.shoppingCart = new ShoppingCart()
    }

    private get noItemsLabel() {
        return $('.cart.wrapper em')
    }

    open() {
        browser.url('/checkout')
        $('.loader-wrapper .loader').waitForDisplayed(null, true, `Expected loader to disappear`)
    }

    isNoItemsInCart() {
        if(this.noItemsLabel.isDisplayed()) {
            return this.noItemsLabel.getText()
                .includes('There are no items in your cart.')
        } else {
            return false
        }
    }

    isItemsInCart() {
        return !this.isNoItemsInCart()
    }
}

// Component
class ShoppingCart {
    private get container(): WebdriverIO.Element {
        return $('#box-checkout-cart')
    }

    public get items(): Item[] {
        return $$('table.items tr.item').map(item => {
            return new Item(item)
        })
    }

    public getItemByName(name: string): Item {
        return this.items.find(item => item.getProductName().includes(name))
    }

}

class Item {
    container

    constructor(itemContainer) {
        this.container = itemContainer
    }

    public getProductName(): string {
        return this.container.getAttribute('data-name')
    }

    public getProductPrice(): number {
        return parseFloat(this.container.getAttribute('data-price'))
    }
    
}
