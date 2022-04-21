<template>
  <!-- tweets -->
  <div class="w-full md:w-1/2 h-full border-r border-td_seprator text-white font-ChripRegular">
    <div class="sticky px-5 py-3 border-b border-td_seprator flex items-center justify-between">
      <h1 class="text-xl font-ChripExtendedHeavy">Home</h1>
      <i class="far fa-light fa-star text-xl text-td_dk_grey"></i>
    </div>

    <div class="overflow-y-hidden">
      <TweetForm />
      <Tweets />
    </div>

  </div>
</template>

<script>
import TweetForm from '@/components/Tweets/TweetForm.vue';
import Tweets from '@/components/Tweets/Tweets.vue';

export default {
  name: 'TweetsBox',
  data() {
    return {
      // tweets: [
      //   { content: 'It is so nice outside!' },
      // ],
      tweet: { content: '' },
    };
  },
  components: {
    TweetForm,
    Tweets,
  },
};
</script>
