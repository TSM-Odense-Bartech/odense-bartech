<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-primary hover:bg-primary-dark transition duration-300 shadow-lg"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: String,
});
</script>
