<template>

  <!-- eslint-disable-next-line vue/require-v-for-key -->
  <div v-for="follow in tweets" class="w-full p-4 px-5 border-b border-td_seprator hover:bg-lighter flex flex-col">
    <div class="flex">
      <div class="flex-none mr-4">
        <img :src="`${follow.src}`" class="h-11 w-11 rounded-full flex-none" alt="User Profile" />
      </div>
      <div class="w-full">
        <div class="flex items-center w-full font-ChripRegular">
          <p class="text-lg text-white"> {{ follow.name }} </p>
          <p class="text-base text-td_dk_grey ml-2"> {{ follow.handle }} </p>
          <p class="text-2xl text-td_dk_grey ml-2">.</p>
          <p class="text-base text-td_dk_grey ml-2"> {{ follow.time }} </p>
          <i class="fas fa-ellipsis-h text-td_dk_grey ml-auto"></i>
        </div>
        <p class="text-base text-td_xlt_grey">
          {{ follow.tweet }}
        </p>
      </div>
    </div>

    <div class="flex items-center justify-around w-full mt-5 text-td_dk_grey">
      <div class="flex items-center text-sm text-dark">
        <i class="far fa-comment mr-1.5"></i>
        <p class="text-sm"> {{ follow.comments }} </p>
      </div>
      <div class="flex items-center text-sm text-dark">
        <i class="fas fa-retweet mr-1.5"></i>
        <p class="text-sm"> {{ follow.retweets }} </p>
      </div>
      <div class="flex items-center text-sm text-dark">
        <i class="fas fa-heart mr-1.5"></i>
        <p class="text-sm"> {{ follow.like }} </p>
      </div>
      <div class="flex items-center text-sm text-dark">
        <i class="fas fa-share-square mr-3"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TweetsBox',
  // props: {
  //   tweets: Array,
  // },
  data() {
    return {
      tweets: [
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '20 min',
          tweet: 'Should I just quarantine on mars??',
          comments: '1282',
          retweets: '550',
          like: '100k',
        },
        {
          src: '/imgs/kevin.jpg',
          name: 'Kevin Hart',
          handle: '@miniRock',
          time: '55 min',
          tweet: 'Should me and the rock do another sub-par movie together????',
          comments: '2,030',
          retweets: '50',
          like: '20.2k',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Haha just made a flame thrower. Shld I sell them?',
          comments: '127k',
          retweets: '245.6k',
          like: '571.4k',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Just did something crazyyyyyyy',
          comments: '10.5k',
          retweets: '178k',
          like: '534.9k',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '20 min',
          tweet: 'Should I just quarantine on mars??',
          comments: '1282',
          retweets: '550',
          like: '100k',
        },
        {
          src: '/imgs/kevin.jpg',
          name: 'Kevin Hart',
          handle: '@miniRock',
          time: '55 min',
          tweet: 'Should me and the rock do another sub-par movie together????',
          comments: '2,030',
          retweets: '50',
          like: '20.2k',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Haha just made a flame thrower. Shld I sell them?',
          comments: '127k',
          retweets: '245.6k',
          like: '571.4k',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Just did something crazyyyyyyy',
          comments: '10.5k',
          retweets: '178k',
          like: '534.9k',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '20 min',
          tweet: 'Should I just quarantine on mars??',
          comments: '1282',
          retweets: '550',
          like: '100k',
        },
        {
          src: '/imgs/kevin.jpg',
          name: 'Kevin Hart',
          handle: '@miniRock',
          time: '55 min',
          tweet: 'Should me and the rock do another sub-par movie together????',
          comments: '2,030',
          retweets: '50',
          like: '20.2k',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Haha just made a flame thrower. Shld I sell them?',
          comments: '127k',
          retweets: '245.6k',
          like: '571.4k',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Just did something crazyyyyyyy',
          comments: '10.5k',
          retweets: '178k',
          like: '534.9k',
        },
      ],
    };
  },
  components: {
  },
};
</script>
