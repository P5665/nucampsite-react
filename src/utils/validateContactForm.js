export const validateContactForm = (values) => {
	const errors = {};

	if (!values.firstName) {
		errors.firstName = 'Required';
	} else if (values.firstName.length < 2) {
		errors.firstName = 'Must be at least 2 characters.';
	} else if (values.firstName.length > 15) {
		errors.firstName = 'Must be 15 characters or less';
	}

	if (values.lastName.length < 2) {
		errors.lastName = 'Must be at least 2 characters.';
	} else if (values.lastName.length > 15) {
		errors.lastName = 'Must be 15 characters or less';
	}

	const reg = /^\d{10}$|^\d{3}-\d{3}-\d{4}$/;
	// ^\d{10}$: Matches a sequence of 10 digits.
	// |: OR operator.
	// ^\d{3}-\d{3}-\d{4}$: Matches a sequence of three digits, followed by a hyphen, followed by three digits, another hyphen, and then four digits.
	if (!reg.test(values.phoneNum)) {
		errors.phoneNum = 'The phone number should contain only numbers.';
	}

	if (!values.email.includes('@')) {
		errors.email = 'Email should contain a @';
	}

	return errors;
};
