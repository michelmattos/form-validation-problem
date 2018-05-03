import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

function createProps(overrides = {}) {
    return { onValidate: jest.fn().mockName('onValidate'), ...overrides };
}

function createEvent({ value }) {
    return { target: { value } };
}

describe('For email field', () => {
    test('Should call onValidate on change', () => {
        const props = createProps();
        const event = createEvent({ value: 'john.doe@example.com' });
        const wrapper = shallow(<Form {...props} />);

        wrapper.find('#email').simulate('change', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            email: event.target.value,
        });
    });
    test('Should call onValidate on blur', () => {
        const props = createProps();
        const event = createEvent({ value: 'john.doe@example.com' });
        const wrapper = shallow(<Form {...props} />);

        wrapper.find('#email').simulate('blur', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            email: event.target.value,
        });
    });
});

describe('For email field', () => {
    test('Should call onValidate on change');
    test('Should call onValidate on blur');
    test('Should show the error when invalid');
    test('Should hide the error when valid');
    test('Should add "error" className when invalid');
    test('Should remove "error" className when valid');
    test('Should disable submit button when invalid');
    test('Should enable submit button when valid');
});
