// @flow
import React from 'react';
import type { FormFields, FormErrors } from './validateForm';

type Props = {
    onValidate: (fields: FormFields) => FormErrors,
};

type State = {
    errors: {
        email?: string,
    },
    email?: string,
};

class Form extends React.Component<Props, State> {
    state = {
        errors: {},
        email: undefined,
    };

    validateEmail = (evt: SyntheticInputEvent<>) =>
        this.props.onValidate({ email: evt.target.value });

    render() {
        const { errors, email = '' } = this.state;
        const disableSubmit = Object.keys(errors).length > 0;
        return (
            <form>
                <h1>Fill out this awesome form</h1>
                <fieldset>
                    <h3>Your details</h3>
                    <p className={errors.email ? 'error' : ''}>
                        <label className="label" htmlFor="email">
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={this.validateEmail}
                            onBlur={this.validateEmail}
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                        {errors.email && <span>{errors.email}</span>}
                    </p>
                </fieldset>
                <fieldset>
                    <p>
                        <input
                            type="submit"
                            value="Create account"
                            disabled={disableSubmit}
                        />
                    </p>
                </fieldset>
            </form>
        );
    }
}

export default Form;
