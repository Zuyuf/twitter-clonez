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
        <h1 class="text-lg font-ChripBold text-td_lt_grey">Geralt of Rivia</h1>
        <h5 class="text-xs font-ChripRegular text-td_dk_grey -mt-1.5">2 Tweets</h5>
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
        <h1 class="text-xl text-white font-ChripBold">Geralt of Rivia</h1>
        <h5 class="-mt-1 text-base text-td_dk_grey font-ChripRegular">@GrealtRivia</h5>
        <div class="flex mt-1">
          <i class="far fa-calendar-alt text-sm text-td_dk_grey"></i>
          <p class="ml-2 text-base text-td_dk_grey font-ChripRegular">Joined November 2019</p>
        </div>
        <div class="flex text-base text-td_dk_grey font-ChripRegular">
          <p>
            <span class="text-white">14</span>
            Following
          </p>
          <p class="ml-4">
            <span class="text-white">8</span>
            Followers
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.hide_scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
