<template>
  <div class="bg-td_blue flex justify-center w-full py-2 px-5 rounded-full cursor-pointer hover:bg-td_blue2">
      <p class="text-xbase truncate text-td_white font-ChripBold pl-3">{{ btn_text }}</p>
   </div>
</template>

<script>
export default {
   name: 'BtnNormal',
   props: ['btn_text']
}
</script>