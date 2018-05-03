import validateForm from '../validateForm';

test('Should return an error when email is empty', () => {
    const fields = { email: '' };
    expect(validateForm(fields)).toEqual({ email: "Can't be empty" });
});

test('Should return an error when email is not valid', () => {
    const fields = { email: 'john.doe@' };
    expect(validateForm(fields)).toEqual({
        email: 'Must be a valid email',
    });
});

test('Should not return an error when email is valid', () => {
    const fields = { email: 'john.doe@example.com' };
    expect(validateForm(fields)).toEqual({});
});

test('Should return an error when password is empty', () => {
    const fields = { password: '' };
    expect(validateForm(fields)).toEqual({ password: "Can't be empty" });
});

test('Should return an error when password is less than 9 characters', () => {
    const fields = { password: '12345678' };
    expect(validateForm(fields)).toEqual({
        password: 'Must be longer than 8 characters',
    });
});

test('Should not return an error when password is greater than 8 characters', () => {
    const fields = { password: '123456789' };
    expect(validateForm(fields)).toEqual({});
});

test('Should return an error when colour is not selected', () => {
    const fields = { colour: '' };
    expect(validateForm(fields)).toEqual({
        colour: 'One colour must be selected',
    });
});

test('Should not return an error when colour is selected', () => {
    const fields = { colour: 'red' };
    expect(validateForm(fields)).toEqual({});
});

test('Should return an error when less than 2 animals are selected', () => {
    const fields = { animals: ['dog'] };
    expect(validateForm(fields)).toEqual({
        animals: 'At least two animals must be chosen',
    });
});

test('Should not return an error when 2 or more animals are selected', () => {
    const fields = { animals: ['dog', 'cat'] };
    expect(validateForm(fields)).toEqual({});
});

test('Should return an error when "Tiger" is selected and type of tiger is empty', () => {
    const fields = { animals: ['Tiger', 'cat'], tigerType: '' };
    expect(validateForm(fields)).toEqual({ tigerType: "Can't be empty" });
});

test('Should not return an error when "Tiger" is selected and type of tiger is not empty', () => {
    const fields = { animals: ['Tiger', 'cat'], tigerType: 'Snow tiger' };
    expect(validateForm(fields)).toEqual({});
});
