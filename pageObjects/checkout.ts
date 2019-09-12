
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
    private get container() {
        return $('#box-checkout-cart')
    }

    public get items() {
        return $$('table.items tr.item').map(item => {
            return new Item(item)
        })
    }

}

class Item {
    container

    constructor(itemContainer) {
        this.container = itemContainer
    }

    public getProductName() {
        return this.container.getAttribute('data-name')
    }

    public getProductPrice() {
        return parseFloat(this.container.getAttribute('data-price'))
    }
    
}
