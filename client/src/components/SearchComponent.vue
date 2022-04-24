<template>
  <div icon class="relative mt-2 outline-none">
    <!-- class="pl-12  w-full p-2 bg-lighter text-sm mb-4 bg-transparent" -->
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <input type="text" class="bg-td_dk_grey3
      text-td_lt_grey font-ChripRegular
        w-full rounded-full
        focus:border focus:border-td_blue
        outline-0
        px-3 py-2.5 pl-14" placeholder="Search Twitter" />
    <!-- class="fas fa-search text-sm text-td_lt_grey" -->
    <i class="fas fa-search
        absolute left-3 top-1.5 p-2 text-td_dk_grey" aria-hidden="true">
    </i>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
div[icon] input[type='text']:focus+i {
  color: rgb(29, 155, 240);
}
</style>
