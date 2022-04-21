<template>
  <div class="bg-td_black">
    <div class="bg-td_black flex w-[1400px] h-screen mx-auto">
      <Sidebar />
      <FeedsSection />

      <div class="text-white font-ChripRegular
        md:block hidden w-[28%] h-full
        py-2 px-6 relative">

        <SearchBar />
        <Trending :trending="trending" />
        <WhoToFollow :follow_recs="follow_recs" />

      </div>

    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebarComponent.vue';
import SearchBar from '@/components/SearchComponent.vue';
import FeedsSection from '@/components/Tweets/FeedsSection.vue';
import Trending from '@/components/Trending.vue';
import WhoToFollow from '@/components/WhoToFollow.vue';

export default {
  data() {
    return {
      trending: [
        {
          id: 1,
          top: 'Trending in TX',
          title: 'UK Prime Minsiter boris johnson arravies in INdia for two-day visit',
          bottom: 'Trending with: Rip Gigi',
          img: '/imgs/random1.jpg',
        },
        {
          id: 2,
          top: 'Music',
          title: '#peace',
          bottom: '135K Tweets',
        },
        {
          id: 3,
          top: 'Pop',
          title: 'UK Prime Minsiter boris johnson arravies in INdia for two-day visit',
          bottom: '40k tweets',
          img: '/imgs/random2.jpg',
        },
        {
          id: 4,
          top: 'Trending in US',
          title: '#Peace',
          bottom: '40k tweets',
        },
        {
          id: 5,
          top: 'Trending',
          title: 'When Beyonce',
          bottom: '25.4k tweets',
        },
      ],
      follow_recs: [
        {
          id: 1,
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
        },
        {
          id: 2,
          src: '/imgs/monk.jpg',
          name: 'Adrian Monk',
          handle: '@detective:)',
        },
        {
          id: 3,
          src: '/imgs/kevin.jpg',
          name: 'Kevin Hart',
          handle: '@miniRock',
        },
        {
          id: 5,
          src: '/imgs/elon.jpg',
          name: 'Elon Musk',
          handle: '@teslaBoy',
        },
      ],
    };
  },
  components: {
    Sidebar,
    FeedsSection,
    SearchBar,
    Trending,
    WhoToFollow,
  },
};
</script>
