// @flow
import React from 'react';
import type { FormFields, FormErrors } from './validateForm';
import FormField from './FormField';

type Props = {
    onValidate: (fields: FormFields) => FormErrors,
};

type State = FormFields & {
    errors: FormErrors,
};

class Form extends React.Component<Props, State> {
    state = {
        errors: {},
        email: undefined,
        password: undefined,
        colour: undefined,
        animals: undefined,
        tigerType: undefined,
    };

    validateEmail = (evt: SyntheticInputEvent<>) => {
        const value = evt.target.value;
        const { email, ...otherErrors } = this.state.errors;
        const errors = {
            ...otherErrors,
            ...this.props.onValidate({ email: value }),
        };
        this.setState({ errors, email: value });
    };

    validatePassword = (evt: SyntheticInputEvent<>) => {
        const value = evt.target.value;
        const { password, ...otherErrors } = this.state.errors;
        const errors = {
            ...otherErrors,
            ...this.props.onValidate({ password: value }),
        };
        this.setState({ errors, password: value });
    };

    validateColour = (evt: SyntheticInputEvent<>) => {
        const value = evt.target.value;
        const { colour, ...otherErrors } = this.state.errors;
        const errors = {
            ...otherErrors,
            ...this.props.onValidate({ colour: value }),
        };
        this.setState({ errors, colour: value });
    };

    validateAnimals = (evt: SyntheticInputEvent<>) => {
        const value = evt.target.value;
        let selectedAnimals = this.state.animals || [];

        if (selectedAnimals.includes(evt.target.value))
            selectedAnimals = selectedAnimals.filter(
                animal => animal !== value,
            );
        else selectedAnimals = [...selectedAnimals, value];

        const { animals, ...otherErrors } = this.state.errors;
        const errors = {
            ...otherErrors,
            ...this.props.onValidate({ animals: selectedAnimals }),
        };
        this.setState({ errors, animals: selectedAnimals });
    };

    validateTigerType = (evt: SyntheticInputEvent<>) => {
        const value = evt.target.value;
        const { tigerType, ...otherErrors } = this.state.errors;
        const errors = {
            ...otherErrors,
            ...this.props.onValidate({
                animals: this.state.animals,
                tigerType: value,
            }),
        };
        this.setState({ errors, tigerType: value });
    };

    render() {
        const {
            errors,
            email = '',
            password = '',
            colour = '',
            animals = [],
            tigerType = '',
        } = this.state;
        const disableSubmit =
            Object.keys(
                this.props.onValidate({
                    email,
                    password,
                    colour,
                    animals,
                    tigerType,
                }),
            ).length > 0;

        return (
            <form method="post" action="">
                <h1>Fill out this awesome form</h1>
                <fieldset>
                    <h3>Your details</h3>
                    <FormField label="Email" error={errors.email}>
                        <input
                            value={email}
                            onChange={this.validateEmail}
                            onBlur={this.validateEmail}
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </FormField>
                    <FormField label="Password" error={errors.password}>
                        <input
                            value={password}
                            onChange={this.validatePassword}
                            onBlur={this.validatePassword}
                            type="password"
                            id="password"
                            name="username"
                            minLength="9"
                            required
                        />
                    </FormField>
                </fieldset>
                <fieldset>
                    <h3>Your animal</h3>
                    <FormField label="Colour" error={errors.colour}>
                        <select
                            value={colour}
                            name="colour"
                            onChange={this.validateColour}
                            onBlur={this.validateColour}
                            id="colour"
                            required
                        >
                            <option value="">Choose colour</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                            <option value="black">Black</option>
                            <option value="brown">Brown</option>
                        </select>
                    </FormField>
                    <p className={errors.animals ? 'error' : ''}>
                        <span className="label">Animal</span>

                        <input
                            checked={animals.includes('bear')}
                            onChange={this.validateAnimals}
                            type="checkbox"
                            name="animal"
                            value="bear"
                            id="bear"
                        />
                        <label htmlFor="bear">Bear</label>

                        <input
                            checked={animals.includes('tiger')}
                            onChange={this.validateAnimals}
                            type="checkbox"
                            name="animal"
                            value="tiger"
                            id="tiger"
                        />
                        <label htmlFor="tiger">Tiger</label>

                        <input
                            checked={animals.includes('snake')}
                            onChange={this.validateAnimals}
                            type="checkbox"
                            name="animal"
                            value="snake"
                            id="snake"
                        />
                        <label htmlFor="snake">Snake</label>

                        <input
                            checked={animals.includes('donkey')}
                            onChange={this.validateAnimals}
                            type="checkbox"
                            name="animal"
                            value="donkey"
                            id="donkey"
                        />
                        <label htmlFor="donkey">Donkey</label>

                        {errors.animals && (
                            <span
                                className="field-error"
                                data-id="animal-error"
                            >
                                {errors.animals}
                            </span>
                        )}
                    </p>
                    <p className={errors.tigerType ? 'error' : ''}>
                        <label className="label" htmlFor="tiger_type">
                            Type of tiger
                        </label>
                        <input
                            value={tigerType}
                            onChange={this.validateTigerType}
                            onBlur={this.validateTigerType}
                            type="text"
                            name="tiger_type"
                            id="tiger_type"
                        />
                        {errors.tigerType && (
                            <span
                                className="field-error"
                                data-id="tiger-type-error"
                            >
                                {errors.tigerType}
                            </span>
                        )}
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
