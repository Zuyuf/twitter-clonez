<template>
  <div>
    <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
    <VeeField
      :id="_id"
      :name="input_label"
      :placeholder="input_placeholder"
      type="text"
      class="w-full bg-transparent
        p-3 rounded outline-none
        border-2 border-td_dk_grey2 focus:border-td_blue
        placeholder:text-td_lt_grey placeholder:font-ChripRegular focus:placeholder:text-td_blue
        text-base text-td_lt_grey font-ChripRegular"
    />
    <ErrorMessage :name="input_label" class="text-red-600" />
  </div>
</template>

<script>
export default {
  props: {
    _id: String,
    input_label: String,
    input_placeholder: String,
  },
};
</script>
