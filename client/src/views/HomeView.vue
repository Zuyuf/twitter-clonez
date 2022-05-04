<template>
  <div class="bg-td_black">
    <div class="bg-td_black flex w-[1280px] h-screen mx-auto">
      <Sidebar />
      <FeedsSection />

      <div class="text-white font-ChripRegular
        md:block hidden w-[35%] h-full
        py-2 px-6 relative">

        <SearchBar />
        <Trending :trending="trending" />
        <WhoToFollow v-if="usersICanFollow.length > 0" :usersICanFollow="usersICanFollow" />

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

import { mapActions } from 'vuex';

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
    };
  },
  async created() {
    await this.fetchUsersICanFollow();
  },
  methods: {
    ...mapActions(['fetchUsersICanFollow']),
  },
  computed: {
    usersICanFollow() {
      return this.$store.state.usersICanFollow;
    },
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
