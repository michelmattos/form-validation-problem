// @flow

export type FormFields = {
    email?: string,
    password?: string,
    colour?: string,
    animals?: string[],
    tigerType?: string,
};

export type FormErrors = {
    email?: string,
    password?: string,
    colour?: string,
    animals?: string,
    tigerType?: string,
};

const isEmailInvalid = (email: string) => {
    // eslint-disable-next-line
    const emailPattern = /^[\w\.]+@\w+(\.\w+)*$/;
    return !emailPattern.test(email);
};

/**
 * Validate the form fields. You can exclude fields that you don't want
 * to validate.
 */
const validateForm = (fields: FormFields): FormErrors => {
    const { email, password, colour, animals, tigerType } = fields;
    const errors = {};

    if (email !== undefined) {
        if (isEmailInvalid(email)) errors.email = 'Must be a valid email';
        if (email.length === 0) errors.email = "Can't be empty";
    }

    if (password !== undefined) {
        if (password.length < 9)
            errors.password = 'Must be longer than 8 characters';
        if (password.length === 0) errors.password = "Can't be empty";
    }

    if (colour !== undefined) {
        if (colour.length === 0) errors.colour = 'One colour must be selected';
    }

    if (animals !== undefined) {
        if (animals.length < 2)
            errors.animals = 'At least two animals must be chosen';

        if (tigerType !== undefined) {
            if (tigerType.length === 0 && animals.includes('Tiger'))
                errors.tigerType = "Can't be empty";
        }
    }

    return errors;
};

export default validateForm;
