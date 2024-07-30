<script setup lang="ts">
const today = new Date();
</script>

<template>
  <footer class="bg-gray-800 text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between items-center">
        <div class="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
          <h3 class="text-xl font-bold">Odense Bartech</h3>
          <p class="text-sm text-gray-400">Precision in Every Pour</p>
        </div>
        <div class="w-full md:w-auto text-center md:text-right space-x-6">
          <NuxtLink
            to="/om"
            class="text-textprimary hover:text-primary transition-all duration-300 ease-in-out relative group"
            >Om</NuxtLink
          >
          <NuxtLink
            to="/kontakt"
            class="text-textprimary hover:text-primary transition-all duration-300 ease-in-out relative group"
            >Kontakt</NuxtLink
          >
        </div>
      </div>
      <div class="mt-4 text-center text-sm text-gray-400">
        © {{ new Date().getFullYear() }} Odense Bartech. Alle retigheder
        forbeholdes.
      </div>
    </div>
  </footer>
</template>
