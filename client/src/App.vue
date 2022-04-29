<template>
  <RouterView />
</template>

<script>
export default {
  name: 'App',
  created() {
    this.$store.dispatch('init_login');
  },
};
</script>
