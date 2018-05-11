// @flow
import * as React from 'react';

type Props = {
    label: string,
    error?: string,
    children: React.Element<any>,
};

const FormField = (props: Props) => {
    const child = React.Children.only(props.children);
    return (
        <p className={props.error ? 'error' : ''}>
            <label className="label" htmlFor={child.props.id}>
                {props.label}
            </label>
            {child}
            {props.error && <span className="field-error">{props.error}</span>}
        </p>
    );
};

FormField.defaultProps = {
    error: undefined,
};

export default FormField;
