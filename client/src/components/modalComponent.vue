<template>
  <div class="fixed z-10 overflow-y-auto top-0 w-full left-0" :class="{ hidden: !showModal }">
    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-25" />
      </div>
      <!-- This to trick browser to center the modal -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <!-- Modal -->
      <div
        class="inline-block align-center bg-td_black
          rounded-lg text-left overflow-hidden shadow-xl transform transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
          p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="relative">
          <CloseSvg svg_class="fill-td_lt_grey w-6 h-6 absolute cursor-pointer" @click.prevent="onClick" />
          <TwitterSvg svg_class="fill-td_lt_grey w-8 mx-auto" />
        </div>

        <!-- Modal Body -->
        <div>
          <slot name="modal_body"></slot>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
import CloseSvg from '@/components/svg/close_svg.vue';
import TwitterSvg from '@/components/svg/twitter_svg.vue';

export default {
  props: {
    showModal: Boolean,
    // eslint-disable-next-line vue/require-prop-type-constructor
    default: false,
    onClick: {
      type: Function,
      required: true,
    },
  },
  components: {
    CloseSvg,
    TwitterSvg,
  },
};
</script>
