<template>
      <!-- tweets Container -->
      <!-- <div class="flex flex-col-reverse">
        <div v-for="tweet in tweets" class="w-full p-4 border-b border-td_seprator flex">
          <div class="flex-none mr-4">
            <img src="@/imgs/geralt_profile1.jpg" class="h-12 w-12 rounded-full flex-none" alt="User Profile"/>
          </div>
          <div class="w-full">
            <div class="flex items-center w-full">
              <p class="font-semibold"> Steph Dietz </p>
              <p class="text-sm text-dark ml-2"> @SaaSyEth </p>
              <p class="text-sm text-dark ml-2"> 1 sec </p>
              <i class="fas fa-angle-down text-dark ml-auto"></i>
            </div>
            <p class="py-2">
              {{ tweet.content }}
            </p>
            <div class="flex items-center justify-between w-full">
              <div class="flex items-center text-sm text-dark">
                <i class="far fa-comment mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-retweet mr-3"></i>
                <p> 0 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-heart mr-3"></i>
                <p> 1 </p>
              </div>
              <div class="flex items-center text-sm text-dark">
                <i class="fas fa-share-square mr-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div> -->

    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <div v-for="follow in tweets" class="w-full p-4 border-b border-td_seprator hover:bg-lighter flex">
      <div class="flex-none mr-4">
        <img :src="`${follow.src}`" class="h-12 w-12 rounded-full flex-none" alt="User Profile"/>
      </div>
      <div class="w-full">
        <div class="flex items-center w-full">
          <p class="font-semibold"> {{ follow.name }} </p>
          <p class="text-sm text-dark ml-2"> {{ follow.handle }} </p>
          <p class="text-sm text-dark ml-2"> {{ follow.time }} </p>
          <i class="fas fa-angle-down text-dark ml-auto"></i>
        </div>
        <p class="py-2">
          {{ follow.tweet }}
        </p>
        <div class="flex items-center justify-between w-full">
          <div class="flex items-center text-sm text-dark">
            <i class="far fa-comment mr-3"></i>
            <p> {{ follow.comments }} </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-retweet mr-3"></i>
            <p> {{ follow.retweets }} </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-heart mr-3"></i>
            <p> {{ follow.like }} </p>
          </div>
          <div class="flex items-center text-sm text-dark">
            <i class="fas fa-share-square mr-3"></i>
          </div>
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
          comments: '1,000',
          retweets: '550',
          like: '1,000,003',
        },
        {
          src: '/imgs/kevin.jpg',
          name: 'Kevin Hart',
          handle: '@miniRock',
          time: '55 min',
          tweet: 'Should me and the rock do another sub-par movie together????',
          comments: '2,030',
          retweets: '50',
          like: '20,003',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Haha just made a flame thrower. Shld I sell them?',
          comments: '100,000',
          retweets: '1,000,002',
          like: '5,000,003',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Just did something crazyyyyyyy',
          comments: '100,500',
          retweets: '1,000,032',
          like: '5,000,103',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '20 min',
          tweet: 'Should I just quarantine on mars??',
          comments: '1,000',
          retweets: '550',
          like: '1,000,003',
        },
        {
          src: '/imgs/kevin.jpg',
          name: 'Kevin Hart',
          handle: '@miniRock',
          time: '55 min',
          tweet: 'Should me and the rock do another sub-par movie together????',
          comments: '2,030',
          retweets: '50',
          like: '20,003',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Haha just made a flame thrower. Shld I sell them?',
          comments: '100,000',
          retweets: '1,000,002',
          like: '5,000,003',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Just did something crazyyyyyyy',
          comments: '100,500',
          retweets: '1,000,032',
          like: '5,000,103',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '20 min',
          tweet: 'Should I just quarantine on mars??',
          comments: '1,000',
          retweets: '550',
          like: '1,000,003',
        },
        {
          src: '/imgs/kevin.jpg',
          name: 'Kevin Hart',
          handle: '@miniRock',
          time: '55 min',
          tweet: 'Should me and the rock do another sub-par movie together????',
          comments: '2,030',
          retweets: '50',
          like: '20,003',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Haha just made a flame thrower. Shld I sell them?',
          comments: '100,000',
          retweets: '1,000,002',
          like: '5,000,003',
        },
        {
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
          time: '1.4 hr',
          tweet: 'Just did something crazyyyyyyy',
          comments: '100,500',
          retweets: '1,000,032',
          like: '5,000,103',
        },
      ],
    };
  },
  components: {
  },
};
</script>
