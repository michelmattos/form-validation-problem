// @flow
import React from 'react';
import type { FormFields, FormErrors } from './validateForm';

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
        const email = evt.target.value;
        const errors = this.props.onValidate({ email });
        this.setState({ errors, email });
    };

    validatePassword = (evt: SyntheticInputEvent<>) => {
        const password = evt.target.value;
        const errors = this.props.onValidate({ password });
        this.setState({ errors, password });
    };

    validateColour = (evt: SyntheticInputEvent<>) => {
        const colour = evt.target.value;
        const errors = this.props.onValidate({ colour });
        this.setState({ errors, colour });
    };

    validateAnimals = (evt: SyntheticInputEvent<>) => {
        const selectedAnimal = evt.target.value;
        let animals = this.state.animals || [];

        if (animals.includes(evt.target.value))
            animals = animals.filter(animal => animal !== selectedAnimal);
        else animals = [...animals, selectedAnimal];

        const errors = this.props.onValidate({ animals });
        this.setState({ errors, animals });
    };

    validateTigerType = (evt: SyntheticInputEvent<>) => {
        const tigerType = evt.target.value;
        const errors = this.props.onValidate({
            animals: this.state.animals,
            tigerType,
        });
        this.setState({ errors, tigerType });
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
                        {errors.email && (
                            <span data-id="email-error">{errors.email}</span>
                        )}
                    </p>
                    <p className={errors.password ? 'error' : ''}>
                        <label className="label" htmlFor="password">
                            Password
                        </label>
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
                        {errors.password && (
                            <span data-id="password-error">
                                {errors.password}
                            </span>
                        )}
                    </p>
                </fieldset>
                <fieldset>
                    <h3>Your animal</h3>
                    <p className={errors.colour ? 'error' : ''}>
                        <label className="label" htmlFor="colour">
                            Colour
                        </label>
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
                        {errors.colour && (
                            <span data-id="colour-error">{errors.colour}</span>
                        )}
                    </p>
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
                            <span data-id="animal-error">{errors.animals}</span>
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
                            <span data-id="tiger-type-error">
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
