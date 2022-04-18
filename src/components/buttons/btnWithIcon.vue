<template>
  <div class="bg-td_white flex justify-center w-full py-2 px-10 rounded-full cursor-pointer hover:bg-td_lt_grey">
      <svg class="h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
         <slot name="svg"></slot>
      </svg>
      <p class="text-xbase text-td_black font-ChripBold pl-3">{{ btn_text }}</p>
   </div>
</template>

<script>
export default {
   name: 'BtnWithIcon',
   props: ['btn_text']
}
</script>