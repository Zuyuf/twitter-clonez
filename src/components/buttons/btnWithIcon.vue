<template>
  <div
      class="flex justify-center w-full py-2 px-10
         rounded-full cursor-pointer
         bg-td_white hover:bg-td_lt_grey"
      :class="btn_class"
   >
      <slot name="svg"></slot>
      <p class="text-xbase text-td_black font-ChripBold pl-3" :class="btn_text_class">{{ btn_text }}</p>
   </div>
</template>

<script>
export default {
  name: 'BtnWithIcon',
  props: ['btn_text', 'btn_class', 'btn_text_class'],
};
</script>
