<template>
  <div class="w-full md:w-1/2 h-full
    border-r border-td_seprator
  text-white font-ChripRegular
    overflow-y-scroll hide_scrollbar">

    <div class="sticky top-0 w-full px-5 py-1.5
      border-b border-td_seprator
      flex items-center
      backdrop-blur-md">
      <i class="fas fa-arrow-left text-lg ml-2 text-td_lt_grey"></i>
      <div class="flex flex-col ml-10">
        <h1 class="text-lg font-ChripBold text-td_lt_grey">{{ user.name }}</h1>
        <h5 class="text-xs font-ChripRegular text-td_dk_grey -mt-1.5">{{ userStats.tweet_count }} Tweets</h5>
      </div>
    </div>

    <div class="">
      <div class="h-60 w-full bg-td_dk_grey3"></div>
      <div class="flex justify-between mx-6">
        <img src="@/assets/imgs/geralt_profile1.jpg" class="w-40 h-40 -mt-16 rounded-full border-[5px] border-black"
          alt="" />
        <button class="flex justify-center h-max w-max py-2 px-5 mt-6
            rounded-full cursor-pointer
            border border-td_dk_grey
            hover:bg-td_lt_grey hover:bg-opacity-20">
          <p class="text-sm font-ChripBold text-td_border-td_xlt_grey">
            Edit Profile
          </p>
        </button>
      </div>
      <div class="mt-3 px-5">
        <h1 class="text-xl text-white font-ChripBold">{{ user.name }}</h1>
        <h5 class="-mt-1 text-base text-td_dk_grey font-ChripRegular">{{ user.handler }}</h5>
        <div class="flex mt-1">
          <i class="far fa-calendar-alt text-sm text-td_dk_grey"></i>
          <p class="ml-2 text-base text-td_dk_grey font-ChripRegular">joined on {{ joinedAt(user.created_at) }}</p>
        </div>
        <div class="flex text-base text-td_dk_grey font-ChripRegular">
          <p>
            <span class="text-white">{{ userStats.user_follows_count }}</span>
            Following
          </p>
          <p class="ml-4">
            <span class="text-white">{{ userStats.user_followers_count }}</span>
            Followers
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import day from 'dayjs';
import { mapActions } from 'vuex';

export default {
  async created() {
    await this.fetchUserStats();
  },
  methods: {
    ...mapActions(['fetchUserStats']),
    joinedAt(date) {
      return day(date).format('MMMM YYYY');
    },
  },
  computed: {
    user() {
      const stateUser = this.$store.state.user;
      // eslint-disable-next-line no-underscore-dangle
      let _user = null;

      if (stateUser !== null) {
        _user = {
          ...stateUser,
          handler: `@${stateUser.name.toLowerCase().replaceAll(' ', '_')}`,
        };
      }
      return _user;
    },
    userStats() {
      return this.$store.state.userStats;
    },
  },
};
</script>

<style scoped>
.hide_scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
