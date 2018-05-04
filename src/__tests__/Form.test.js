import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

function createProps(overrides = {}) {
    return { onValidate: () => ({}), ...overrides };
}

function createEvent({ value }) {
    return { target: { value } };
}

test('Submit button should be initially disabled', () => {
    const errors = { email: '' };
    const props = createProps({ onValidate: () => errors });
    const wrapper = shallow(<Form {...props} />);

    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
});

describe('For email field', () => {
    test('Should call onValidate on change', () => {
        const props = createProps({ onValidate: jest.fn(() => ({})) });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: 'john.doe@example.com' });
        wrapper.find('#email').simulate('change', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            email: event.target.value,
        });
    });
    test('Should call onValidate on blur', () => {
        const props = createProps({ onValidate: jest.fn(() => ({})) });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: 'john.doe@example.com' });
        wrapper.find('#email').simulate('blur', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            email: event.target.value,
        });
    });
    test('Should show the error when invalid', () => {
        const errors = { email: 'Error!' };
        const props = createProps({
            onValidate: () => errors,
        });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#email').simulate('change', event);

        expect(wrapper.find('[data-id="email-error"]').text()).toBe(
            errors.email,
        );
    });
    test('Should hide the error when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#email').simulate('change', event);

        expect(wrapper.find('[data-id="email-error"]').exists()).toBe(false);
    });
    test('Should add "error" className when invalid', () => {
        const errors = { email: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#email').simulate('change', event);

        expect(
            wrapper
                .find('#email')
                .closest('p')
                .prop('className'),
        ).toMatch('error');
    });
    test('Should remove "error" className when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#email').simulate('change', event);

        expect(
            wrapper
                .find('#email')
                .closest('p')
                .prop('className'),
        ).not.toMatch('error');
    });
    test('Should disable submit button when invalid', () => {
        const errors = { email: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#email').simulate('change', event);

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            true,
        );
    });
    test('Should enable submit button when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#email').simulate('change', event);

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            false,
        );
    });
});

describe('For password field', () => {
    test('Should call onValidate on change', () => {
        const props = createProps({ onValidate: jest.fn(() => ({})) });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '123456' });
        wrapper.find('#password').simulate('change', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            password: event.target.value,
        });
    });
    test('Should call onValidate on blur', () => {
        const props = createProps({ onValidate: jest.fn(() => ({})) });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '123456' });
        wrapper.find('#password').simulate('blur', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            password: event.target.value,
        });
    });
    test('Should show the error when invalid', () => {
        const errors = { password: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#password').simulate('change', event);

        expect(wrapper.find('[data-id="password-error"]').text()).toBe(
            errors.password,
        );
    });
    test('Should hide the error when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#password').simulate('change', event);

        expect(wrapper.find('[data-id="password-error"]').exists()).toBe(false);
    });
    test('Should add "error" className when invalid', () => {
        const errors = { password: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#password').simulate('change', event);

        expect(
            wrapper
                .find('#password')
                .closest('p')
                .prop('className'),
        ).toMatch('error');
    });
    test('Should remove "error" className when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#password').simulate('change', event);

        expect(
            wrapper
                .find('#password')
                .closest('p')
                .prop('className'),
        ).not.toMatch('error');
    });
    test('Should disable submit button when invalid', () => {
        const errors = { password: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#password').simulate('change', event);

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            true,
        );
    });
    test('Should enable submit button when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#password').simulate('change', event);

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            false,
        );
    });
});

describe('For colour field', () => {
    test('Should call onValidate on change', () => {
        const props = createProps({ onValidate: jest.fn(() => ({})) });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: 'red' });
        wrapper.find('#colour').simulate('change', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            colour: event.target.value,
        });
    });
    test('Should call onValidate on blur', () => {
        const props = createProps({ onValidate: jest.fn(() => ({})) });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: 'red' });
        wrapper.find('#colour').simulate('blur', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            colour: event.target.value,
        });
    });
    test('Should show the error when invalid', () => {
        const errors = { colour: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#colour').simulate('change', event);

        expect(wrapper.find('[data-id="colour-error"]').text()).toBe(
            errors.colour,
        );
    });
    test('Should hide the error when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#colour').simulate('change', event);

        expect(wrapper.find('[data-id="colour-error"]').exists()).toBe(false);
    });
    test('Should add "error" className when invalid', () => {
        const errors = { colour: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#colour').simulate('change', event);

        expect(
            wrapper
                .find('#colour')
                .closest('p')
                .prop('className'),
        ).toMatch('error');
    });
    test('Should remove "error" className when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#colour').simulate('change', event);

        expect(
            wrapper
                .find('#colour')
                .closest('p')
                .prop('className'),
        ).not.toMatch('error');
    });
    test('Should disable submit button when invalid', () => {
        const errors = { colour: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#colour').simulate('change', event);

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            true,
        );
    });
    test('Should enable submit button when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#colour').simulate('change', event);

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            false,
        );
    });
});

describe('For animal checkboxes', () => {
    ['bear', 'tiger', 'snake', 'donkey'].forEach(animal => {
        test(`Should call onValidate when "${animal}" changes`, () => {
            const props = createProps({
                onValidate: jest.fn(() => ({})),
            });
            const wrapper = shallow(<Form {...props} />);

            const event = createEvent({ value: animal });
            wrapper.find(`#${animal}`).simulate('change', event);

            expect(props.onValidate).toHaveBeenCalledWith({
                animals: [animal],
            });
        });
        test('Should show the error when invalid', () => {
            const errors = { animals: 'Error!' };
            const props = createProps({ onValidate: () => errors });
            const wrapper = shallow(<Form {...props} />);

            const event = createEvent({ value: animal });
            wrapper.find(`#${animal}`).simulate('change', event);

            expect(wrapper.find('[data-id="animal-error"]').text()).toBe(
                errors.animals,
            );
        });
        test('Should hide the error when valid', () => {
            const errors = {};
            const props = createProps({ onValidate: () => errors });
            const wrapper = shallow(<Form {...props} />);

            const event = createEvent({ value: animal });
            wrapper.find(`#${animal}`).simulate('change', event);

            expect(wrapper.find('[data-id="animal-error"]').exists()).toBe(
                false,
            );
        });
        test('Should add "error" className when invalid', () => {
            const errors = { animals: 'Error!' };
            const props = createProps({ onValidate: () => errors });
            const wrapper = shallow(<Form {...props} />);

            const event = createEvent({ value: animal });
            wrapper.find(`#${animal}`).simulate('change', event);

            expect(
                wrapper
                    .find(`#${animal}`)
                    .closest('p')
                    .prop('className'),
            ).toMatch('error');
        });
        test('Should remove "error" className when valid', () => {
            const errors = {};
            const props = createProps({ onValidate: () => errors });
            const wrapper = shallow(<Form {...props} />);

            const event = createEvent({ value: animal });
            wrapper.find('#colour').simulate('change', event);

            expect(
                wrapper
                    .find(`#${animal}`)
                    .closest('p')
                    .prop('className'),
            ).not.toMatch('error');
        });
        test('Should disable submit button when invalid', () => {
            const errors = { animals: 'Error!' };
            const props = createProps({ onValidate: () => errors });
            const wrapper = shallow(<Form {...props} />);

            const event = createEvent({ value: animal });
            wrapper.find(`#${animal}`).simulate('change', event);

            expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
                true,
            );
        });
        test('Should enable submit button when valid', () => {
            const errors = {};
            const props = createProps({ onValidate: () => errors });
            const wrapper = shallow(<Form {...props} />);

            const event = createEvent({ value: animal });
            wrapper.find(`#${animal}`).simulate('change', event);

            expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
                false,
            );
        });
    });
});

describe('For type of tiger field', () => {
    test('Should call onValidate on change', () => {
        const props = createProps({ onValidate: jest.fn(() => ({})) });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: 'snow tiger' });
        wrapper.find('#tiger_type').simulate('change', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            animals: undefined,
            tigerType: event.target.value,
        });
    });
    test('Should call onValidate on blur', () => {
        const props = createProps({ onValidate: jest.fn(() => ({})) });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: 'snow tiger' });
        wrapper.find('#tiger_type').simulate('blur', event);

        expect(props.onValidate).toHaveBeenCalledWith({
            animals: undefined,
            tigerType: event.target.value,
        });
    });
    test('Should show the error when invalid', () => {
        const errors = { tigerType: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#tiger_type').simulate('change', event);

        expect(wrapper.find('[data-id="tiger-type-error"]').text()).toBe(
            errors.tigerType,
        );
    });
    test('Should hide the error when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#tiger_type').simulate('change', event);

        expect(wrapper.find('[data-id="tiger-type-error"]').exists()).toBe(
            false,
        );
    });
    test('Should add "error" className when invalid', () => {
        const errors = { tigerType: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#tiger_type').simulate('change', event);

        expect(
            wrapper
                .find('#tiger_type')
                .closest('p')
                .prop('className'),
        ).toMatch('error');
    });
    test('Should remove "error" className when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#tiger_type').simulate('change', event);

        expect(
            wrapper
                .find('#tiger_type')
                .closest('p')
                .prop('className'),
        ).not.toMatch('error');
    });
    test('Should disable submit button when invalid', () => {
        const errors = { tigerType: 'Error!' };
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#tiger_type').simulate('change', event);

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            true,
        );
    });
    test('Should enable submit button when valid', () => {
        const errors = {};
        const props = createProps({ onValidate: () => errors });
        const wrapper = shallow(<Form {...props} />);

        const event = createEvent({ value: '' });
        wrapper.find('#tiger_type').simulate('change', event);

        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            false,
        );
    });
});
