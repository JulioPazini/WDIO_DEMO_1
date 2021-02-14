const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');

describe('Header Test Suite', () => {

    it('should redirect to new site', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);
        HeaderPage.linkLink.click();
        assert.equal(browser.getUrl(), 'https://glitchitsystem.com/', 'Link is not correct!')
        browser.pause(1000);
    })

    it('should open wolverine modal', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);
        HeaderPage.heroFactsLink.click();
        HeaderPage.wolverineOption.click();
        browser.pause(1000);

        assert.equal(HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Wolverine window not displayed');
        assert.equal(HeaderPage.wolverineModalTitleText.getText(), 'Wolverine Fact', 'Tile is not correct');
        assert.equal(HeaderPage.wolverineModalContentText.getText(), 'Wolverine made his first comic book appearance in 1974.', 'Context is not correct');
    })

    it('should close wolverine modal', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);
        HeaderPage.heroFactsLink.click();
        HeaderPage.wolverineOption.click();
        browser.pause(1000);

        assert.equal(HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Wolverine window not displayed');

        HeaderPage.wolverineModalCloseButton.click();
        browser.pause(1000);

        assert.equal(HeaderPage.wolverineModalWindow.isDisplayed(), false, 'Wolverine window still displayed');
    })

    it('should open spiderman modal', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);
        HeaderPage.heroFactsLink.click();
        HeaderPage.spiderManOption.click();
        browser.pause(1000);

        assert.equal(HeaderPage.spiderManModalWindow.isDisplayed(), true, 'SpiderMan window not displayed');
        assert.equal(HeaderPage.spiderManModalTitleText.getText(), 'Spider-Man Fact', 'Tile is not correct');
        assert.equal(HeaderPage.spiderManModalContentText.getText(), 'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.', 'Context is not correct');
    })

    it('should close spiderman modal', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);
        HeaderPage.heroFactsLink.click();
        HeaderPage.spiderManOption.click();
        browser.pause(1000);

        assert.equal(HeaderPage.spiderManModalWindow.isDisplayed(), true, 'SpiderMan window not displayed');

        HeaderPage.spiderManModalCloseButton.click();
        browser.pause(1000);

        assert.equal(HeaderPage.spiderManModalWindow.isDisplayed(), false, 'SpiderMan window still displayed');
    })

    it('should logOut the page', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);
        HeaderPage.logOutLink.click();

        assert.equal(LoginPage.overlay.isDisplayed(), true, 'Overlay not displayed')
    })

    it('should search for Wolverine', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);

        HeaderPage.searchField.setValue('Wolverine');
        HeaderPage.searchButton.click();
        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Wolverine is awesome!', 'Text is not the same');
    })

    it('should search for something else', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);

        HeaderPage.searchField.setValue('test');
        HeaderPage.searchButton.click();
        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Your search for test returned 0 reults. Try something else.', 'Text is not the same');
    })

    it('should close the alert window', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        HeaderPage.navBarButton.click();
        browser.pause(100);

        HeaderPage.searchField.setValue('test');
        HeaderPage.searchButton.click();
        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        browser.acceptAlert();
        assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    })
})