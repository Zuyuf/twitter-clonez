<!-- eslint-disable max-len -->
<template>
  <!-- side nav -->
  <div class="lg:w-1/5 border-r border-td_seprator px-2 lg:px-3 py-2 flex flex-col justify-between">

    <div>
      <button class="mt-4 ml-6 h-14 w-14
        hover:bg-td_blue text-3xl rounded-full text-td_lt_grey
        flex justify-center items-center"
      >
        <TwitterSvg svg_class="fill-td_lt_grey w-8" />
      </button>

      <div class="mt-8 text-left">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="id = tab.id"
          :class="`focus:outline-none hover:text-td_blue py-2 px-6
            hover:bg-td_blue hover:bg-opacity-30 rounded-full mr-auto mb-3
            flex items-center
            ${ id === tab.id ? 'text-td_dark_blue' : 'text-td_xlt_grey'}`"
        >
          <div class="w-8 h-8 mr-4">
            <i :class="`${ tab.icon } text-2xl mr-6 ${ id === tab.id ? 'text-3xl' : ''}`"></i>
          </div>
          <p :class="`text-lg font-ChripRegular text-left hidden lg:block ${ id === tab.id ? 'font-ChripBold' : ''}`"> {{ tab.title }} </p>
        </button>
      </div>

      <BtnNormal btn_text="Tweet" btn_class="mt-8" btn_text_class="text-xl py-1" />
    </div>

    <!-- Dropdown -->
    <div class="lg:w-full relative">
        <button
          @click="dropdown = !dropdown"
          class="flex items-center w-full px-5 py-3
            bg-black hover:bg-td_dk_grey hover:bg-opacity-20 rounded-full focus:outline-none"
        >
          <img src="@/assets/imgs/geralt_profile1.jpg" class="w-11 h-11 rounded-full border border-white" alt="User Profile Image" />
          <div class="hidden lg:block ml-4">
            <p class="text-sm text-white font-ChripBold leading-tigh text-left"> Geralt of Rivia </p>
            <p class="text-sm text-td_dk_grey font-ChripRegular leading-tight text-left"> @geralt </p>
          </div>
          <i class="hidden text-white lg:block fas fa-ellipsis-h ml-auto text-lg"></i>
        </button>

        <div
          v-if="dropdown === true"
          class="bg-black absolute bottom-0 left-0
            w-64 rounded-lg shadow-md border-td_lt_grey
            mb-16 dropdown_boxshadow"
        >
          <button
            @click="dropdown = false"
            class="p-3 flex items-center w-full focus:outline-none
              hover:bg-td_dk_grey hover:bg-opacity-20"
          >
            <img src="@/assets/imgs/geralt_profile1.jpg" class="w-14 h-14 rounded-full border border-white" alt="User Profile Image" />
            <div class="ml-4">
              <p class="text-sm text-white font-ChripBold leading-tight text-left"> Geralt of Rivia </p>
              <p class="text-sm text-td_dk_grey font-ChripRegular leading-tight text-left"> @geralt </p>
            </div>
            <i class="text-sm text-td_blue fas fa-check pr-2 ml-auto test-blue"></i>
          </button>
          <button
            @click="dropdown = false"
            class="text-td_lt_grey font-ChripRegular w-full text-left
            hover:bg-td_dk_grey hover:bg-opacity-20 border-t border-td_seprator
            p-3 test-sm focus:outline-none"
          >
            Add an existing account
          </button>
          <button
            @click="dropdown = false"
            class="text-td_lt_grey font-ChripRegular w-full text-left
              hover:bg-td_dk_grey hover:bg-opacity-20 border-t border-td_seprator
              p-3 test-sm focus:outline-none"
          >
            Log out @geralt
          </button>
        </div>

      </div>

  </div>
</template>

<script>
import TwitterSvg from '@/components/svg/twitter_svg.vue';
import BtnNormal from '@/components/buttons/btn.vue';

export default {
  data() {
    return {
      tabs: [
        { icon: 'fas fa-home', title: 'Home', id: 'home' },
        { icon: 'fas fa-hashtag', title: 'Explore', id: 'explore' },
        { icon: 'far fa-bell', title: 'Notifications', id: 'notifications' },
        { icon: 'far fa-envelope', title: 'Messages', id: 'messages' },
        { icon: 'far fa-bookmark', title: 'Bookmarks', id: 'bookmarks' },
        { icon: 'fas fa-clipboard-list', title: 'Lists', id: 'lists' },
        { icon: 'far fa-user', title: 'Profile', id: 'profile' },
        { icon: 'fas fa-ellipsis-h', title: 'More', id: 'more' },
      ],
      id: 'home',
      dropdown: false,
    };
  },
  components: {
    TwitterSvg,
    BtnNormal,
  },
};
</script>

<style scoped>
.dropdown_boxshadow {
  box-shadow: rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px;
}
</style>
