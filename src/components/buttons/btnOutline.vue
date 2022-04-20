<template>
  <div
    class="flex justify-center w-full py-2 px-5
      rounded-full cursor-pointer
      border border-td_dk_grey2
      hover:bg-td_blue hover:bg-opacity-20"
    :class="btn_class"
  >
    <p class="text-xbase font-ChripBold pl-3 truncate text-td_blue" :class="btn_text_class">
      {{ btn_text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'BtnOutline',
  props: ['btn_text', 'btn_class', 'btn_text_class'],
};
</script>
