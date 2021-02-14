const assert = require('assert');
const RosterPage = require('../pages/roster.page');
const LoginPage = require('../pages/login.page');

describe('Roster Test Suite', () => {

    it('should have default values', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        var instructions = 'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.';

        assert.equal(RosterPage.instructionText.getText(), instructions, 'Instructions are not the same');
        assert.equal(RosterPage.listTitle.getText(), 'Build Your Superhero Roster:', 'Title is not the same.');

        assert.equal(RosterPage.wolverineItem.getText(), 'Wolverine', 'Item Wolverine is not the same');
        assert.equal(RosterPage.ironManItem.getText(), 'Iron Man', 'Item Iron Man is not the same');
        assert.equal(RosterPage.deadpoolItem.getText(), 'Deadpool', 'Item Deadpool is not the same');
        assert.equal(RosterPage.thorItem.getText(), 'Thor', 'Item Thor is not the same');
        assert.equal(RosterPage.spiderManItem.getText(), 'Spider-Man', 'Item Spider-Man is not the same');

        assert.equal(RosterPage.addHeroLabel.getText(), 'ADD A SUPERHERO', 'Title ADD is not the same ');
        assert.equal(RosterPage.addHeroField.getAttribute('placeholder'), 'Enter Hero', 'Placeholder is not the same');
    })

    it('should test something else', () => {
        browser.url('');

        LoginPage.emailField.setValue('1@2.com');
        LoginPage.passwordField.setValue('password');
        LoginPage.submitButton.click();

        var newItem = 'Bob';

        RosterPage.addHeroField.setValue(newItem);
        RosterPage.submitButton.click();

        assert.equal(RosterPage.addedItem.getText(), newItem, 'Added item is not the same');

    })
})