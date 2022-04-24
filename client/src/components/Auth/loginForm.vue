<template>
  <VeeForm @submit="login">
    <h5 class="text-td_lt_grey text-4xl font-ChripBold mt-16">Sign in to Twitter</h5>
    <TextField input_label="email" input_placeholder="Email" class="mt-8" />
    <PasswordField input_label="password" input_placeholder="Password" class="mt-3" />

    <button
      type="submit"
      class="flex justify-center w-full py-2 px-5
        rounded-full cursor-pointer
        bg-td_blue hover:bg-td_dark_blue
        mt-14"
    >
      <p class="text-xbase truncate font-ChripBold pl-3 text-td_white">Sign in</p>
    </button>
    <BtnOutline btn_text="Forgot Password?" btn_class="mt-4" />
  </VeeForm>
</template>

<script>
import BtnOutline from '@/components/buttons/btnOutline.vue';

import TextField from '@/components/fields/textField.vue';
import PasswordField from '@/components/fields/passwordField.vue';

export default {
  name: 'App',
  props: {
    onLoginClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async login(values) {
      console.log('Login submit', values);

      // TODO:
      // 1. Call API
      // 2. if successs then redirect to home
      // 3. else show error msg
      // eslint-disable-next-line no-constant-condition
      if (true) {
        setTimeout(() => {
          console.log('Mock Login');
        }, 1000);
      }
    },
  },
  components: {
    TextField,
    PasswordField,
    BtnOutline,
  },
};
</script>
