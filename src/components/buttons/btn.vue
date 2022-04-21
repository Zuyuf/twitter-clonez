<template>
  <button
    :type="btn_type"
    class="flex justify-center w-full py-2 px-5
      rounded-full cursor-pointer
      bg-td_blue hover:bg-td_dark_blue"
    :class="btn_class"
    @click.prevent="onClick"
  >
    <p class="text-xbase truncate font-ChripBold text-td_white" :class="btn_text_class">{{ btn_text }}</p>
  </button>
</template>

<script>
export default {
  name: 'BtnNormal',
  props: {
    btn_text: String,
    btn_class: String,
    btn_type: {
      type: String,
      default: 'button',
    },
    btn_text_class: String,
    onClick: Function,
  },
};
</script>
