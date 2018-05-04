import React from 'react';
import { render } from 'react-dom';
import Form from './Form';
import validateForm from './validateForm';

render(<Form onValidate={validateForm} />, document.body);
