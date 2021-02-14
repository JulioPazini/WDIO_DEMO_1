const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require('../pages/intro.page');
const RosterPage = require('../pages/roster.page');
const VotePage = require('../pages/vote.page');

describe('Smoke Test Suite', () => {

    it('should verify static elements are present', () => {
        browser.url('');

        //Verify the Login
        assert.equal(LoginPage.headingText.isDisplayed(), true, 'LoginPage.headingText');
        assert.equal(LoginPage.emailLabel.isDisplayed(), true, 'LoginPage.emailLabel');
        assert.equal(LoginPage.emailField.isDisplayed(), true, 'LoginPage.emailField');
        assert.equal(LoginPage.passwordLabel.isDisplayed(), true, 'LoginPage.passwordLabel');
        assert.equal(LoginPage.passwordField.isDisplayed(), true, 'LoginPage.passwordField');
        assert.equal(LoginPage.rememberLoginCheckbox.isDisplayed(), true, 'LoginPage.rememberLoginCheckbox');
        assert.equal(LoginPage.rememberLoginLabel.isDisplayed(), true, 'LoginPage.rememberLoginLabel');
        assert.equal(LoginPage.submitButton.isDisplayed(), true, 'LoginPage.submitButton');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();
        browser.pause(2000)
        HeaderPage.navBarButton.click();

        //Verify the Header
        assert.equal(HeaderPage.homeLink.isDisplayed(), true, 'HeaderPage.homeLink');
        assert.equal(HeaderPage.linkLink.isDisplayed(), true, 'HeaderPage.linkLink');
        assert.equal(HeaderPage.heroFactsLink.isDisplayed(), true, 'HeaderPage.heroFactsLink');

        HeaderPage.heroFactsLink.click();

        assert.equal(HeaderPage.wolverineOption.isDisplayed(), true, 'HeaderPage.wolverineOption');
        assert.equal(HeaderPage.spiderManOption.isDisplayed(), true, 'HeaderPage.spiderManOption');
        assert.equal(HeaderPage.searchField.isDisplayed(), true, 'HeaderPage.searchField');
        assert.equal(HeaderPage.searchButton.isDisplayed(), true, 'HeaderPage.searchButton');
        assert.equal(HeaderPage.logOutLink.isDisplayed(), true, 'HeaderPage.logOutLink');

        //Verify teh Intro
        assert.equal(IntroPage.titleText.isDisplayed(), true, 'IntroPage.titleText');
        assert.equal(IntroPage.mainImage.isDisplayed(), true, 'IntroPage.mainImage');

        //Verify the Roster
        assert.equal(RosterPage.instructionText.isDisplayed(), true, 'RosterPage.instructionText');
        assert.equal(RosterPage.listTitle.isDisplayed(), true, 'RosterPage.listTitle');
        assert.equal(RosterPage.wolverineItem.isDisplayed(), true, 'RosterPage.wolverineItem');
        assert.equal(RosterPage.ironManItem.isDisplayed(), true, 'RosterPage.ironManItem');
        assert.equal(RosterPage.deadpoolItem.isDisplayed(), true, 'RosterPage.deadpoolItem');
        assert.equal(RosterPage.thorItem.isDisplayed(), true, 'RosterPage.thorItem');
        assert.equal(RosterPage.spiderManItem.isDisplayed(), true, 'RosterPage.spiderManItem');
        assert.equal(RosterPage.addHeroLabel.isDisplayed(), true, 'RosterPage.addHeroLabel');
        assert.equal(RosterPage.addHeroField.isDisplayed(), true, 'RosterPage.addHeroField');
        assert.equal(RosterPage.submitButton.isDisplayed(), true, 'RosterPage.submitButton');

        //Verify the Vote
        assert.equal(VotePage.voteTitleText.isDisplayed(), true, 'VotePage.voteTitleText');
        assert.equal(VotePage.voteItem1.isDisplayed(), true, 'VotePage.voteItem1');
        assert.equal(VotePage.voteItem2.isDisplayed(), true, 'VotePage.voteItem2');
        assert.equal(VotePage.voteItem3.isDisplayed(), true, 'VotePage.voteItem3');
        assert.equal(VotePage.voteItem4.isDisplayed(), true, 'VotePage.voteItem4');
        assert.equal(VotePage.voteItem5.isDisplayed(), true, 'VotePage.voteItem5');
        assert.equal(VotePage.voteItemLabel1.isDisplayed(), true, 'VotePage.voteItemLabel1');
        assert.equal(VotePage.voteItemLabel2.isDisplayed(), true, 'VotePage.voteItemLabel2');
        assert.equal(VotePage.voteItemLabel3.isDisplayed(), true, 'VotePage.voteItemLabel3');
        assert.equal(VotePage.voteItemLabel4.isDisplayed(), true, 'VotePage.voteItemLabel4');
        assert.equal(VotePage.voteItemLabel5.isDisplayed(), true, 'VotePage.voteItemLabel5');
        assert.equal(VotePage.submitButton.isDisplayed(), true, 'VotePage.submitButton');
        assert.equal(VotePage.voteItemText1.isDisplayed(), true, 'VotePage.voteItemText1');
        assert.equal(VotePage.voteItemText2.isDisplayed(), true, 'VotePage.voteItemText2');
        assert.equal(VotePage.voteItemText3.isDisplayed(), true, 'VotePage.voteItemText3');
        assert.equal(VotePage.voteItemText4.isDisplayed(), true, 'VotePage.voteItemText4');
        assert.equal(VotePage.voteItemText5.isDisplayed(), true, 'VotePage.voteItemText5');
        assert.equal(VotePage.voteItemVal1.isDisplayed(), true, 'VotePage.voteItemVal1');
        assert.equal(VotePage.voteItemVal2.isDisplayed(), true, 'VotePage.voteItemVal2');
        assert.equal(VotePage.voteItemVal3.isDisplayed(), true, 'VotePage.voteItemVal3');
        assert.equal(VotePage.voteItemVal4.isDisplayed(), true, 'VotePage.voteItemVal4');
        assert.equal(VotePage.voteItemVal5.isDisplayed(), true, 'VotePage.voteItemVal5');
    })

})