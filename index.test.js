const fs = require('fs');
const $ = require('jquery');

function renderHtml(filepath) {
    const html = fs.readFileSync(filepath, { encoding: 'utf-8' });
    $('html').html(html);
}

test('it passes', () => {
    expect(true).toBe(true);
});

describe('Email must be a valid email address', () => {
    test('input type is email', () => {
        renderHtml('index.html');
        expect($('#email').attr('type')).toBe('email');
    });

    test('passes when a valid email is passed', () => {
        renderHtml('index.html');
        $('#email').val('john.doe@example.com');
        expect($('#email')[0].checkValidity()).toBe(true);
    });

    test('do not pass when a non valid email is passed', () => {
        renderHtml('index.html');
        $('#email').val('john.doe');
        expect($('#email')[0].checkValidity()).toBe(false);
    });
});

describe('Password must be longer than 8 characters', () => {
    test('passes when password is greater than 8 characters', () => {
        renderHtml('index.html');
        $('#password').val('123456789');
        expect($('#password')[0].checkValidity()).toBe(true);
    });

    // JSDom doesn't support "minlength" attr
    // See: https://github.com/jsdom/jsdom/blob/b3d823f3118816f962a78ecf43dc64f829f7767c/test/web-platform-tests/to-run.yaml#L509
    test.skip('do not pass when password is less or equal than 8 characters', () => {
        renderHtml('index.html');
        $('#password').val('12345678');
        expect($('#password')[0].checkValidity()).toBe(false);
    });
});

describe('Colour must be selected', () => {
    test('passes when a colour is selected', () => {
        renderHtml('index.html');
        $('#colour').val('blue');
        expect($('#colour')[0].checkValidity()).toBe(true);
    });

    test('do not pass when a colour is not selected', () => {
        renderHtml('index.html');
        $('#colour').val('');
        expect($('#colour')[0].checkValidity()).toBe(false);
    });
});
