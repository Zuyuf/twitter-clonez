<template>
  <div class="bg-td_black">
    <div class="bg-td_black flex w-4/6 h-screen mx-auto">
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebarComponent.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>
