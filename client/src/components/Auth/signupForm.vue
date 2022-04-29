<template>
  <VeeForm @submit="signup">
    <h5 class="text-td_lt_grey text-4xl font-ChripBold mt-16">Create your account</h5>
    <TextField input_label="name" input_placeholder="Name" class="mt-8" />
    <TextField input_label="email" input_placeholder="Email" class="mt-3" />
    <PasswordField input_label="password" input_placeholder="Password" class="mt-3" />

    <button type="submit" class="flex justify-center w-full py-2 px-5
        rounded-full cursor-pointer
        bg-td_blue hover:bg-td_dark_blue
        mt-14">
      <p class="text-xbase truncate font-ChripBold pl-3 text-td_white">Sign up</p>
    </button>
  </VeeForm>
</template>

<script>
import TextField from '@/components/fields/textField.vue';
import PasswordField from '@/components/fields/passwordField.vue';

export default {
  name: 'App',
  props: {
    onSignupClick: {
      type: Function,
      required: true,
    },
  },
  methods: {
    async signup(values) {
      try {
        console.log('Signup submit', values);

        await this.$store.dispatch('register', values);
      }
      catch (error) {
        console.error(error);
        return;
      }

      window.location.reload();
    },
  },
  components: {
    TextField,
    PasswordField,
  },
};
</script>
