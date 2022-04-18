<template>
<!-- g-t_xx_lt_grey dark: -->
  <div class="bg-td_black w-screen h-screen grid grid-cols-2">
    <div>
      <img class="w-full h-full object-cover" src="./assets/imgs/twitter-signup-hero-img.png" alt="Twitter Hero Image">
    </div>

    <div class="text-left py-12 px-10">
      <svg class="fill-td_lt_grey w-12" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" >
        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/>
      </svg>

      <h1 class="text-6xl text-td_xlt_grey font-ChripExtendedHeavy mt-24">Happening now</h1>
      <h5 class="text-4xl text-td_xlt_grey font-ChripExtendedHeavy mt-16">Join Twitter today.</h5>

      <div class="w-80 mt-12">
        <BtnWithIcon btn_text="Sign up with Google" class="mt-3">
          <template v-slot:svg>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="LgbsSe-Bz112c">
                <g>
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                </g>
              </svg>
          </template>
        </BtnWithIcon>

        <BtnWithIcon btn_text="Sign up with Apple" class="mt-3">
          <template v-slot:svg>
            <svg viewBox="0 0 24 24" aria-hidden="true" style="color: rgb(15, 20, 25);">
              <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
            </svg>    
          </template>
        </BtnWithIcon>

        <div class="my-2 grid grid-cols-11 grid-rows-1 items-center">
          <div class="col-span-5 h-px" style="background-color: #2f3336;"></div>
          <p class="text-sm text-td_lt_grey font-ChripRegular mx-auto">or</p>
          <div class="col-span-5 h-px" style="background-color: #2f3336;"></div>
        </div>

        <BtnNormal btn_text="Sign up with a phone number or email address"></BtnNormal>
        <div class="text-xs text-td_dk_grey mt-2">
          By signing up, you agree to the 
          <span class="text-td_blue">Terms of Service</span> 
          and 
          <span class="text-td_blue">Privacy Policy</span>
          , including 
          <span class="text-td_blue">Cookie Use.</span>
        </div>

        <div class="mt-20">
          <h5 class="text-lg text-td_lt_grey font-ChripBold">Already have an account?</h5>
          <BtnOutline btn_text="Sign in" class="mt-3" />
        </div>


      </div>

    </div>

  </div>
</template>

<script>
import BtnWithIcon from './components/buttons/btnWithIcon.vue'
import BtnOutline from './components/buttons/btnOutline.vue'
import BtnNormal from './components/buttons/btn.vue'
import './index.css'

export default {
  name: 'App',
  components: {
    BtnWithIcon,
    BtnNormal,
    BtnOutline,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
