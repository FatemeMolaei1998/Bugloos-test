import { mapActions } from 'vuex'
import useVuelidate from '@vuelidate/core'
import {
  getValidations,
  getPasswordError,
  getEmailError
} from './validations'

export default {
  name: 'RegisterPage',

  //
  // ──────────────────────────────────────────────────────────
  //   :::::: D A T A : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────
  //

  data: () => {
    return {
      v$: useVuelidate(),
      username: '',
      password: {
        value: '',
        isPw: true
      },
      email: '',
      gender: '',
      genderOptions: ['Male', 'Female'],
      termsAgree: false,
    }
  },

  //
  // ────────────────────────────────────────────────────────────────────────
  //   :::::: V A L I D A T I O N S : :  :   :    :     :        :          :
  // ────────────────────────────────────────────────────────────────────────
  //

  validations () {
    return getValidations()
  },

  //
  // ──────────────────────────────────────────────────────────
  //   :::::: M E T H O D S : :  :   :    :     :        :    :
  // ──────────────────────────────────────────────────────────
  //

  methods: {
    ...mapActions({
      registerUser: 'auth/registerUser'
    }),

    //
    // ─── REGISTER ──────────────────────────────────────────────────────
    //

    submit () {
      const data = {
        username: this.username,
        password: this.password.value,
        gender: this.gender,
        email: this.email,
      }
      this.registerUser(data).then(() => {
        this.$router.push(`/all-courses`)
      })

    }
  },

  //
  // ──────────────────────────────────────────────────────────────────
  //   :::::: C O M P U T E D : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────
  //

  computed: {

    //
    // ─── GET PASSWORD ERROR ──────────────────────────────────────────────────────
    //

    getPasswordError () {
      return getPasswordError(this.v$)
    },

    //
    // ─── GET EMAIL ERROR ──────────────────────────────────────────────────────
    //

    getEmailError () {
      return getEmailError(this.v$)
    }
  },
}
