const { Given, When, Then } = require('cucumber');
const { Selector: NativeSelector } = require('testcafe');

const Selector = (input, t) => {
    return NativeSelector(input).with({ boundTestRun: t });
};

Given(/^I am at the example page$/, async t => t.navigateTo('http://devexpress.github.io/testcafe/example'));

When(/^I set the username to "([^"]*)"$/, async(t, [name]) => t.typeText('input[name="name"]', name));
When(/^I say I tested TestCafe$/, async t => t.click('#tried-test-cafe'));
When(/^I rate it with "([^"]*)"$/, async(t, [rating]) => {});
When(/^I press the submit button$/, async t => t.click('#submit-button'));

Then(/^I see the thank you page$/, async t => {
    await t.expect(await Selector('title').textContent).eql('Thank you!');
});