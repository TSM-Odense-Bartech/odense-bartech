<script setup lang="ts">
import AppKontakt from "~/components/AppKontakt.vue";
</script>

<template>
  <div class="max-w-screen-xl mx-auto py-16 px-4">
    <h1 class="text-4xl md:text-5xl font-bold text-primary mb-6 text-center">
      Kontakt Os
    </h1>

    <AppKontakt />

    <div class="text-center">
      <p class="mb-4">
        Eventuelt kan du tage kontakt til os på nedenstående
        kontaktinformationer.
      </p>
      <p class="mb-2">
        Du kan kontakte os på telefon:
        <a href="tel:+4522334455" class="text-primary hover:underline"
          >22 33 44 55</a
        >
      </p>
      <p>
        Eller du kan skrive til os på mail:
        <a
          href="mailto:ask@odensebartech.com"
          class="text-primary hover:underline"
          >ask@odensebartech.com</a
        >
      </p>
    </div>
  </div>
</template>
