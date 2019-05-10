import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
    await t
        .click('button')
        .typeText('input', 'Hello World!');

    const checkboxes = Selector('input[type="checkbox"]')
    await t.click(checkboxes.nth(0));
});