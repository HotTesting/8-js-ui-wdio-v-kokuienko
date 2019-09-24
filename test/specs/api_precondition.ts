import { createNewUser } from '../../utils/createUser';

describe('Cart', function () {
    beforeEach(function () {
        const credentials = createNewUser();
        browser.url("/login");
        browser.pause(1000)
        let loginForm = $('[name="login_form"]');
        loginForm.$('[name="email"]').setValue(credentials.email);
        loginForm.$('[name="password"]').setValue(credentials.password);
        loginForm.$('button[name="login"]').click();

        browser.pause(10000);
    });
    it('can add item', function () {
        
    })
});
