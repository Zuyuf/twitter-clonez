<template>
  <div class="w-full mt-6 py-5 rounded-3xl bg-td_dk_grey4 font-ChripRegular">
    <p class="text-xl px-5 font-ChripBold mb-4">What's Happening</p>

    <!-- eslint-disable-next-line max-len -->
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <template v-for="follow_rec in showFollow" :key="follow_rec.id">
      <button class="w-full flex p-3 px-5 hover:bg-td_lt_grey hover:bg-opacity-5">
        <img :src="`${follow_rec.src}`" class="w-10 h-10 rounded-full border border-lighter" alt="" />
        <div class="hidden lg:block ml-4">
          <p class="text-sm font-ChripBold"> {{ follow_rec.name }} </p>
          <p class="text-sm text-left font-ChripRegular text-td_dk_grey"> {{ follow_rec.handle }} </p>
        </div>

        <button class="ml-auto py-1 px-3.5 rounded-full
            bg-white hover:bg-td_xlt_grey
            text-black text-sm font-ChripBold
            self-center">
          Follow
        </button>
      </button>
    </template>

    <button v-show="showMoreBtn" class="mt-4 px-6 w-full text-td_blue text-left">
      Show More
    </button>
  </div>
</template>

<script>
export default {
  name: 'TrendingComponent',
  props: {
    follow_recs: Array,
  },
  computed: {
    showFollow() {
      const len = this.follow_recs.length;
      return len > 3 ? this.follow_recs.slice(0, 3) : this.follow_recs;
    },
    showMoreBtn() {
      const len = this.follow_recs.length;
      return len > 3;
    },
  },
};
</script>
