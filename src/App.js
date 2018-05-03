// @flow
import React from 'react';

type State = {
    formTouched: boolean,
    isEmailValid: boolean,
};

class App extends React.Component<{}, State> {
    state = {
        formTouched: false,
        isEmailValid: false,
    };

    validateEmail = (evt: SyntheticInputEvent<>) => {
        const isEmailValid = evt.target.validity.valid;
        this.setState({ isEmailValid, formTouched: true });
    };

    render() {
        const { isEmailValid, formTouched } = this.state;
        const emailErrorClassName = !formTouched || isEmailValid ? '' : 'error';
        const isSubmitDisabled = !formTouched && !isEmailValid;
        return (
            <form>
                <h1>Fill out this awesome form</h1>
                <fieldset>
                    <h3>Your details</h3>
                    <p className={emailErrorClassName}>
                        <label className="label" htmlFor="email">
                            Email
                        </label>
                        <input
                            onBlur={this.validateEmail}
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </p>
                </fieldset>
                <fieldset>
                    <p>
                        <input
                            type="submit"
                            value="Create account"
                            disabled={isSubmitDisabled}
                        />
                    </p>
                </fieldset>
            </form>
        );
    }
}

export default App;
