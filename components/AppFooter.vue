<script setup lang="ts">
const today = new Date();
</script>

<template>
  <footer class="text-primary p-4 mt-8 bg-tertiary">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        &copy; {{ today.getFullYear() }} Odense Bartech. Alle retigheder er
        reserveret.
      </p>
    </div>
  </footer>
</template>
