<template>
  <!-- g-t_xx_lt_grey dark: -->
  <div class="bg-td_black w-screen h-screen grid grid-cols-2">
    <div>
      <img class="w-full h-full object-cover" src="@/assets/imgs/twitter-signup-hero-img.png" alt="Twitter Hero Image">
    </div>

    <div class="text-left py-12 px-10">
      <TwitterSvg svg_class="fill-td_lt_grey w-12" />

      <h1 class="text-6xl text-td_xlt_grey font-ChripExtendedHeavy mt-24">Happening now</h1>
      <h5 class="text-4xl text-td_xlt_grey font-ChripExtendedHeavy mt-16">Join Twitter today.</h5>

      <div class="w-80 mt-12">
        <BtnWithIcon btn_text="Sign up with Google" class="mt-3">
          <template v-slot:svg>
            <GoogleSvg svg_class="h-6" />
          </template>
        </BtnWithIcon>

        <BtnWithIcon btn_text="Sign up with Apple" class="mt-3">
          <template v-slot:svg>
            <AppleSvg svg_class="h-6" />
          </template>
        </BtnWithIcon>

        <div class="my-2 grid grid-cols-11 grid-rows-1 items-center">
          <div class="col-span-5 h-px" style="background-color: #2f3336;"></div>
          <p class="text-sm text-td_lt_grey font-ChripRegular mx-auto">or</p>
          <div class="col-span-5 h-px" style="background-color: #2f3336;"></div>
        </div>

        <BtnNormal btn_text="Sign up with email address" :onClick="toggleSignupModal" />
        <div class="text-xs text-td_dk_grey mt-2 font-ChripRegular">
          By signing up, you agree to the
          <span class="text-td_blue">Terms of Service</span>
          and
          <span class="text-td_blue">Privacy Policy</span>
          , including
          <span class="text-td_blue">Cookie Use.</span>
        </div>

        <div class="mt-20">
          <h5 class="text-lg text-td_lt_grey font-ChripBold">Already have an account?</h5>
          <BtnOutline btn_text="Sign in" :onClick="toggleLoginModal" />
        </div>

      </div>

    </div>
  </div>

  <Modal :showModal="showSignupModal" :onClick="toggleSignupModal">
    <template v-slot:modal_body>
      <div class="w-5/6 mx-auto">
        <SignupForm />
      </div>
    </template>
  </Modal>

  <Modal :showModal="showLoginModal" :onClick="toggleLoginModal">
  <template v-slot:modal_body>
    <div class="w-5/6 mx-auto">
      <LoginForm />
    </div>
  </template>
  </Modal>
</template>

<script>
import Modal from '@/components/modalComponent.vue';

import BtnWithIcon from '@/components/buttons/btnWithIcon.vue';
import BtnOutline from '@/components/buttons/btnOutline.vue';
import BtnNormal from '@/components/buttons/btn.vue';

import TwitterSvg from '@/components/svg/twitter_svg.vue';
import GoogleSvg from '@/components/svg/google_svg.vue';
import AppleSvg from '@/components/svg/apple_svg.vue';

import SignupForm from '@/components/forms/signupForm.vue';
import LoginForm from '@/components/forms/loginForm.vue';

import '@/index.css';

//

export default {
  name: 'App',
  data() {
    return {
      showSignupModal: false,
      showLoginModal: false,
    };
  },
  methods: {
    toggleSignupModal() {
      this.showSignupModal = !this.showSignupModal;
    },
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
  },
  components: {
    BtnWithIcon,
    BtnNormal,
    BtnOutline,
    TwitterSvg,
    GoogleSvg,
    AppleSvg,
    Modal,
    SignupForm,
    LoginForm,
  },
};
</script>
