import { Selector } from 'testcafe';

// eslint-disable-next-line
fixture('Test form').page('http://localhost:8080/');

test('User can fill the form', async t => {
    await t
        // Type an email
        .typeText('#email', 'john@doe.com')

        // Type a password
        .typeText('#password', '123456789')

        // Select one colour
        .click('#colour')
        .click('option[value="blue"]')

        // Check two animals
        .click('#bear')
        .click('#snake')

        // There shouldn't be any error
        .expect(Selector('.field-error').exists)
        .notOk('The form should not have errors')

        // Submit button should be enabled
        .expect(Selector('input[type="submit"]').hasAttribute('disabled'))
        .notOk('Submit button should not be disabled');
});
