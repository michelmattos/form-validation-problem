import React from 'react';
import { shallow } from 'enzyme';
import FormField from '../FormField';

function createProps(overrides) {
    return {
        label: 'My label',
        children: <input />,
        ...overrides,
    };
}

test('Should render a label element', () => {
    const props = createProps({
        label: 'Email',
    });
    const wrapper = shallow(<FormField {...props} />);
    expect(wrapper.text()).toContain(props.label);
});

test('Should render its child', () => {
    const props = createProps({
        children: <input type="email" />,
    });
    const wrapper = shallow(<FormField {...props} />);
    expect(wrapper.containsMatchingElement(props.children)).toBe(true);
});

test('Should set the label\'s "htmlFor" to child\'s "id" when defined', () => {
    const props = createProps({
        children: <input type="email" id="email" />,
    });
    const wrapper = shallow(<FormField {...props} />);
    expect(wrapper.find('label').prop('htmlFor')).toBe('email');
});

test('Should throw an error when more than one child is passed', () => {
    const props = createProps();
    expect(() => {
        shallow(
            <FormField {...props}>
                <input />
                <input />
            </FormField>,
        );
    }).toThrow('expected to receive a single React element child');
});

describe('When an error is passed', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = createProps({
            error: 'This is an error!',
        });
        wrapper = shallow(<FormField {...props} />);
    });

    test('should has an "error" className', () => {
        expect(wrapper.hasClass('error')).toBe(true);
    });

    test('should render an error', () => {
        expect(wrapper.text()).toContain(props.error);
    });
});

describe('When an error is not passed', () => {
    let props;
    let wrapper;

    beforeEach(() => {
        props = createProps();
        wrapper = shallow(<FormField {...props} />);
    });

    test('should not has an "error" className', () => {
        expect(wrapper.hasClass('error')).toBe(false);
    });

    test('should not render an error', () => {
        expect(wrapper.text()).not.toContain(props.error);
    });
});
