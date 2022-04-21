<template>
  <div class="w-full mt-6 py-5 rounded-3xl bg-td_dk_grey4 font-ChripRegular">
    <p class="text-xl px-5 font-ChripBold mb-4">What's Happening</p>

    <!-- eslint-disable-next-line max-len -->
    <!-- eslint-disable-next-line vue/require-v-for-key -->
    <template v-for="trend in showTrending" :key="trend.id">
      <button v-if="trend.img && trend.img.length > 1" class="w-full flex justify-between
          p-1 px-5 h-28
        hover:bg-td_lt_grey hover:bg-opacity-5">
        <div class="">
          <p class="mt-2 text-xs text-left leading-tight text-td_dk_grey"> {{ trend.top }} </p>
          <p class="mt-1 font-ChripBold text-sm text-left leading-tight text-white"> {{ trend.title }} </p>
          <p v-show="trend.bottom && trend.bottom.length > 1"
            class="mt-1 text-left text-sm leading-tight text-td_dk_grey"> {{ trend.bottom }} </p>
        </div>
        <div class="h-24 w-24 flex-none p-2 relative">
          <img v-if="trend.img && trend.img.length > 1" :src="trend.img" class="w-full h-full rounded-xl object-cover"
            alt="" />
          <i v-else class="fas fa-ellipsis-h text-sm text-td_dk_grey
            absolute right-4"></i>
        </div>
      </button>
      <button v-else class="w-full flex justify-between
        p-1 px-5 h-fit
        hover:bg-td_lt_grey hover:bg-opacity-5">
        <div class="">
          <p class="mt-2 text-xs text-left leading-tight text-td_dk_grey"> {{ trend.top }} </p>
          <p class="mt-1 font-ChripBold text-sm text-left leading-tight text-white"> {{ trend.title }} </p>
          <p v-show="trend.bottom && trend.bottom.length > 1"
            class="mt-1 text-left text-sm leading-tight text-td_dk_grey"> {{ trend.bottom }} </p>
        </div>
        <i class="fas fa-ellipsis-h text-sm text-td_dk_grey p-3"></i>
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
    trending: Array,
  },
  computed: {
    showTrending() {
      const len = this.trending.length;
      return len > 4 ? this.trending.slice(0, 4) : this.trending;
    },
    showMoreBtn() {
      const len = this.trending.length;
      return len > 4;
    },
  },
};
</script>
