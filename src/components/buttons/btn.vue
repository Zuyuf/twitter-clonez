<template>
  <div
    class="flex justify-center w-full py-2 px-5
      rounded-full cursor-pointer
      bg-td_blue hover:bg-td_blue2"
    :class="btn_class"
  >
      <p class="text-xbase truncate font-ChripBold pl-3 text-td_white" :class="btn_text_class">{{ btn_text }}</p>
   </div>
</template>

<script>
export default {
  name: 'BtnNormal',
  props: ['btn_text', 'btn_class', 'btn_text_class'],
};
</script>
