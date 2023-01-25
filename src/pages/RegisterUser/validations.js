import {
  required,
  email,
  minLength
} from '@vuelidate/validators'

const mustBeValidPassword = function (value) {
  const regex = /[^ A-Za-z0-9_#@!$%^&+=]/g
  return !regex.test(value)
}

export function getValidations () {
  return {
    password: {
      value: {
        required,
        minLength: minLength(8),
        containsUppercase: function (value) {
          return /[A-Z]/.test(value)
        },
        containsLowercase: function (value) {
          return /[a-z]/.test(value)
        },
        containsNumber: function (value) {
          return /[0-9]/.test(value)
        },
        mustBeValidPassword
        // containsSpecial: function (value) {
        //   return /[#?!@$%^&*-]/.test(value);
        // },
      }
    },
    email: {
      required,
      email
    }
  }
}

//
// ─── VALIDATION ERRORS ──────────────────────────────────────────────────────────
//

export function getPasswordError (v$) {
  if (v$.password.value.mustBeValidPassword.$invalid) {
    return 'فقط از کاراکترهای _ # @ ! $ % ^ & + = می‌توانید استفاده کنید'
  }
}

export function getEmailError (v$) {
  if (v$.email.required.$invalid) {
    return 'email is required'
  } else if (v$.email.email.$invalid) {
    return 'please enter valid email'
  } else {
    return null
  }
}
