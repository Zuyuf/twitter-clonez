<template>

  <!-- eslint-disable-next-line vue/require-v-for-key -->
  <div :key="twt.id" v-for="twt in tweets"
    class="w-full p-4 px-5 border-b border-td_seprator hover:bg-lighter flex flex-col">
    <div class="flex">
      <div class="flex-none mr-4">
        <img src="https://picsum.photos/100" class="h-11 w-11 rounded-full flex-none" alt="User Profile" />
      </div>
      <div class="w-full">
        <div class="flex items-center w-full font-ChripRegular">
          <p class="text-lg text-white"> {{ twt.user[0].name }} </p>
          <p class="text-base text-td_dk_grey ml-2"> @{{ twt.user[0].name.toLowerCase().replaceAll(' ', '_') }} </p>
          <p class="text-2xl text-td_dk_grey ml-2">.</p>
          <p class="text-base text-td_dk_grey ml-2"> {{ timeAgo(twt.created_at) }} </p>
          <i class="fas fa-ellipsis-h text-td_dk_grey ml-auto"></i>
        </div>
        <p class="text-base text-td_xlt_grey">
          {{ twt.body }}
        </p>
      </div>
    </div>

    <div class="flex items-center justify-around w-full mt-5 text-td_dk_grey">
      <div class="flex items-center text-sm text-dark">
        <i class="far fa-comment mr-1.5"></i>
        <!-- <p class="text-sm"> {{ follow.comments }} </p> -->
        <p class="text-sm"> 2 </p>
      </div>
      <div class="flex items-center text-sm text-dark">
        <i class="fas fa-retweet mr-1.5"></i>
        <!-- <p class="text-sm"> {{ follow.retweets }} </p> -->
        <p class="text-sm"> 5 </p>
      </div>
      <div class="flex items-center text-sm text-dark">
        <i class="fas fa-heart mr-1.5"></i>
        <!-- <p class="text-sm"> {{ follow.like }} </p> -->
        <p class="text-sm"> 21 </p>
      </div>
      <div class="flex items-center text-sm text-dark">
        <i class="fas fa-share-square mr-3"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import day from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

day.extend(relativeTime);

export default {
  name: 'TweetsBox',
  // props: {
  //   tweets: Array,
  // },
  data() {
    return {};
  },
  async created() {
    await this.fetchTweets();
  },
  methods: {
    ...mapActions(['fetchTweets']),
    timeAgo(date) {
      return day(date).fromNow();
    },
  },
  computed: {
    tweets() {
      return this.$store.state.tweets;
    },
  },
};

/*
[
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '20 min',
          // eslint-disable-next-line max-len
          tweet: 'Please consider working at The Boring Company! Our goal is
             to solve traffic, which plagues every major city on Earth.',
          comments: '1282',
          retweets: '550',
          like: '100k',
        },
        {
          src: '/imgs/kevin.jpg',
          name: 'OKX',
          handle: '@okx',
          time: '55 min',
          tweet: `📣 3rd round of
            @terra_money
            project Flash Deals INCOMING ⚡️

            Stake $ANC
            @anchor_protocol
            with up to 1️⃣0️⃣5️⃣% APY on #OKXEarn starting from today at 3:00 am (UTC)! 🔗 https://bit.ly/3L7CZGM

            💡 First come, first served

            Learn more ⤵️`,
          comments: '2,030',
          retweets: '50',
          like: '20.2k',
        },
        {
          src: '/imgs/terra.jpg',
          name: 'Terra',
          handle: '@teslaBoy',
          time: '1.4 hr',
          // eslint-disable-next-line max-len
          tweet: `1/ Attention Firefox users, the Terra Station Walle
          t browser extension is now supported on Firefox! 🎉 🦊
            To download the extension & start using it on
            @firefox
            , follow this short tutorial 👇

            https://docs.terra.money/docs/learn/terra-station/download/terra-station-firefox.html`,
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
      ]
*/
</script>
