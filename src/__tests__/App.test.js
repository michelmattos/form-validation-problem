import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('When email field is empty', () => {
    it('should disable the submit button', () => {
        const wrapper = mount(<App />);
        wrapper.find('#email').simulate('change', { target: { value: '' } });
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(
            true,
        );
    });

    it('should add "error" className to parent element on blur', () => {
        const wrapper = mount(<App />);
        wrapper.find('#email').simulate('blur');
        expect(
            wrapper
                .find('#email')
                .closest('p')
                .prop('className'),
        ).toBe('error');
    });
});
