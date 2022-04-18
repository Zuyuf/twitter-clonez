<template>
  <div class="border border-td_dk_grey2 flex justify-center w-full py-2 px-5 rounded-full cursor-pointer hover:bg-td_blue hover:bg-opacity-20">
      <p class="text-xbase truncate text-td_blue font-ChripBold pl-3">{{ btn_text }}</p>
   </div>
</template>

<script>
export default {
   name: 'BtnOutline',
   props: ['btn_text']
}
</script>