import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

function ValidationSetup() {

    extend('required', { ...required, message: "Please enter your {_field_}" });
    extend('email', { ...email, message: "Please enter a valid {_field_}" });

    // custom validator
    extend('positive', {
        validate: value => {
            return value > 0;
        },
        message: '{_field_} must be greater than zero'
    });

    extend('minmax', {
        validate(value, args) {
            const length = value.length;
            return length >= args.min && length <= args.max;  // args used are defined below...
        },
        params: ['min', 'max']  // args passed to the rule in order
    });

    extend('odd', {
        validate: value => {
            return value % 2 !== 0;
        },
        message: 'This field must be an odd number'
    });

    extend('lessthan', {
        params: ['val'],
        validate(value, { val }) {
            if (!value) return true;
            if (!val) return true;
            return value <= val;
        },
        message: 'This field must be less than or equal to {val}'
    });

}

export default { ValidationSetup }