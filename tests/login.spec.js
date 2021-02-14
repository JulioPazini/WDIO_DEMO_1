const assert = require('assert');
const LoginPage = require('../pages/login.page')
const HeaderPage = require('../pages/header.page');

describe('Login Test Suite', () => {
    //Valid Email: 1@2.com
    //Valid Password: password
    it('should display error when password is missing', () => {
        browser.url('');

        LoginPage.emailField.setValue('teste@teste.com');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open!');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    });

    it('should display error when email is missing', () => {
        browser.url('');

        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    });

    it('should display error when email and password is missing', () => {
        browser.url('');

        assert.equal(LoginPage.emailField.getValue(), '', 'Email is not null');
        assert.equal(LoginPage.passwordField.getValue(), '', 'Password is not null');

        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'Alert text is not equal');
        browser.acceptAlert();
    });

    it('should display error when email is incorrect', () => {
        browser.url('');

        LoginPage.emailField.setValue('fake@fake.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    });

    it('should display error when password is incorrect', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('passw212ord');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    });

    it('should display error when password case is incorrect', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('PASSWORD');
        LoginPage.submitButton.click();

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'Alert text is not equal');
        browser.acceptAlert();

        assert.equal(browser.isAlertOpen(), false, 'The alert is still open');
    });


    it('should login with valid email and password', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed')
    });

    it('should remember login creds', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.rememberLoginCheckbox.click();
        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed')

        HeaderPage.navBarButton.click();
        browser.pause(100);
        HeaderPage.logOutLink.click();
        assert.equal(LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed')

        assert.equal(LoginPage.emailField.getValue(), '1@2.com', 'Field email is empty');
        assert.equal(LoginPage.passwordField.getValue().length, 8, 'Field password is empty');
        assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), true, 'Remember checkbox is not selected')
    });

    it('should not remember login creds', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed')

        HeaderPage.navBarButton.click();
        browser.pause(100);
        HeaderPage.logOutLink.click();
        assert.equal(LoginPage.overlay.isDisplayed(), true, 'Overlay is not displayed')

        assert.equal(LoginPage.emailField.getValue(), '', 'Field email is not empty');
        assert.equal(LoginPage.passwordField.getValue().length, 0, 'Field password is not empty');
        assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), false, 'Remember checkbox is still selected')
    });
});