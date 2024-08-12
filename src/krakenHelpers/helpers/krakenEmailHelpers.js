

export const krakenEmailHelpers = {
    isEmail: isValidEmail
}


function isValidEmail(email) {
    if (typeof email !== 'string') {
        throw new TypeError('The provided value must be a string.');
    }

    // Regular expression to validate email addresses
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ;

    return emailRegex.test(email);
}

