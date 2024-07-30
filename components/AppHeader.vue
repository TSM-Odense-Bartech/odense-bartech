<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="sticky top-0 z-10 shadow-md backdrop-blur-md bg-tertiary/90">
    <nav class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">
          <NuxtLink
            to="/"
            class="text-primary hover:text-textprimary transition-all duration-300 ease-in-out"
            >Odense Bartech</NuxtLink
          >
        </h2>
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink
            v-for="item in ['om', 'kontakt']"
            :key="item"
            :to="`/${item}`"
            class="text-textprimary hover:text-primary transition-all duration-300 ease-in-out relative group"
          >
            <span class="relative z-10">
              {{
                item === "vores-arbejde"
                  ? "Vores Arbejde"
                  : item.charAt(0).toUpperCase() + item.slice(1)
              }}
            </span>
            <span
              class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-in-out group-hover:w-full"
            ></span>
          </NuxtLink>
        </div>
        <button
          @click="toggleMenu"
          class="md:hidden focus:outline-none text-textprimary hover:text-primary transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
    <div
      v-if="isMenuOpen"
      class="md:hidden shadow-lg bg-tertiary/95 absolute w-full left-0 top-full"
    >
      <nav class="container mx-auto px-4 py-2">
        <NuxtLink
          v-for="item in ['om', 'kontakt']"
          :key="item"
          :to="`/${item}`"
          class="block py-3 text-textprimary hover:text-primary transition-all duration-300 ease-in-out border-b border-textsecondary/20 last:border-b-0"
          @click="isMenuOpen = false"
        >
          {{
            item === "vores-arbejde"
              ? "Vores Arbejde"
              : item.charAt(0).toUpperCase() + item.slice(1)
          }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
