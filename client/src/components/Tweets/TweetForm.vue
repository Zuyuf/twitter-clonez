<template>
<div class="px-5 py-3 border-b-2 border-td_seprator flex">
  <div class="flex-none">
    <img
      src="@/assets/imgs/geralt_profile1.jpg"
      class="flex-none w-12 h-12 rounded-full border border-white"
      alt="User Profile"
    />
  </div>
  <VeeForm
    v-on:submit.prevent = "addNewTweet"
    class="w-full px-4 relative"
  >
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <VeeField
      as="textarea"
      name="tweet_content"
      placeholder="What's happening?"
      rows="3"
      class="mt-3 p-1 pb-3 w-full
        bg-transparent focus:outline-none resize-none
        text-xl
        placeholder:font-ChripRegular placeholder:text-td_dk_grey"
    />

    <div class="flex justify-between items-center border-t border-td_seprator pt-4">
      <div class="flex items-center">
        <i class="text-xl text-td_blue mr-5 far fa-image"></i>
        <i class="text-xl text-td_blue mr-5 fas fa-film"></i>
        <i class="text-xl text-td_blue mr-5 far fa-chart-bar"></i>
        <i class="text-xl text-td_blue mr-5 far fa-smile"></i>
      </div>

      <!-- <button
        type="submit"
        class="h-10 px-4 text-white font-semibold bg-blue
          hover:bg-darkblue focus:outline-none rounded-full absolute bottom-0 right-0"
      >
        Tweet
      </button> -->
      <BtnNormal
        btn_type="submit"
        btn_text="Tweet"
        btn_class="w-max"
        btn_text_class=""
      />
    </div>
  </VeeForm>

  </div>
</template>

<script>
import BtnNormal from '@/components/buttons/btn.vue';

export default {
  name: 'TweetForm',
  components: {
    BtnNormal,
  },
};
</script>
