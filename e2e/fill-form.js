import { Selector } from 'testcafe';

// eslint-disable-next-line
fixture('Test form').page('http://localhost:8080/');

test('User can fill the form', async t => {
    await t
        // Type an email
        .typeText('#email', 'john@doe.com')

        // Type a password
        .typeText('#password', '123456789')

        // Select a colour
        .click('#colour')
        .click('option[value="blue"]')

        // Check 2 animals
        .click('#bear')
        .click('#snake')

        // Expect to see no errors
        .expect(Selector('.field-error').exists)
        .notOk()

        // Expect the submit button to be enabled
        .expect(Selector('input[type="submit"]').hasAttribute('disabled'))
        .notOk();
});

test('User can see all the error messages', async t => {
    await t
        // Force an error for email
        .click('#email')
        .pressKey('tab')

        // Force an error for password
        .click('#password')
        .pressKey('tab')

        // Force an error for colour
        .click('#colour')
        .pressKey('esc tab')

        // Force an error for animals
        .click('#tiger')

        // Force an error for type of tiger
        .click('#tiger_type')
        .pressKey('tab')

        // Expect to see 5 error messages
        .expect(Selector('.field-error').count)
        .eql(5)

        // Expect the submit button to be disabled
        .expect(Selector('input[type="submit"]').hasAttribute('disabled'))
        .ok();
});
