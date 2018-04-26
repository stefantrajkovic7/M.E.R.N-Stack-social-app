const Validator = require('validator');

exports.validateRegistration = data => {
    let errors = {};

    dataFields = ["name", "email", "password", "password2"];

    dataFields.forEach(field => {
        data[field] = !isEmpty(data[field]) ? data[field] : "";
        if (Validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 and 30 characters';
    }

    if (!Validator.isLength(data.password, {min: 6})) {
        errors.password = 'Password requires minimum of 6 characters';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

};

exports.validateLogin = data => {
    let errors = {};

    dataFields = ["email", "password"];

    dataFields.forEach(field => {
        data[field] = !isEmpty(data[field]) ? data[field] : "";
        if (Validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

};

exports.validatePost = data => {
    let errors = {};

    dataFields = ["text"];

    dataFields.forEach(field => {
        data[field] = !isEmpty(data[field]) ? data[field] : "";
        if (Validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

    if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
        errors.text = 'Post must be between 10 and 300 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

};

exports.validateProfileExp = data => {
    let errors = {};

    dataFields = ["title", "company", "from"];

    dataFields.forEach(field => {
        data[field] = !isEmpty(data[field]) ? data[field] : "";
        if (Validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

    return {
        errors,
        isValid: isEmpty(errors)
    }

};

exports.validateProfileEdu = data => {
    let errors = {};

    dataFields = ["school", "degree", "fieldofstudy", "from"];

    dataFields.forEach(field => {
        data[field] = !isEmpty(data[field]) ? data[field] : "";
        if (Validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

    return {
        errors,
        isValid: isEmpty(errors)
    }

};

exports.validateProfile = data => {
    let errors = {};

    siteUrls = [
        "website"
    ];
    dataFields = ["handle", "status", "skills"];
    dataFields.forEach(field => {
        data[field] = !isEmpty(data[field]) ? data[field] : "";
        if (Validator.isEmpty(data[field])) {
            errors[field] = `${field} field is required`;
        }
    });

    if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
        errors.handle = "Handle must be between 2 and 40 characters";
    }

    if (!isEmpty(data.website)) {
        siteUrls.forEach(url => {
            data[url] = !isEmpty(data[url]) ? data[url] : "";
            if (!Validator.isURL(data[url])) {
                errors[url] = "Not a valid URL";
            }
        });
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

};

const isEmpty = value => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};