<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div>
          <h1 class="text-2xl font-bold text-secondary">Odense Bartech</h1>
        </div>
        <div class="hidden md:block">
          <ul class="flex space-x-6">
            <li v-for="item in navItems" :key="item.name">
              <NuxtLink
                :to="item.path"
                class="text-secondary hover:text-primary transition-colors duration-200"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <button
          @click="toggleMenu"
          class="md:hidden text-secondary focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
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
    </div>
    <div v-show="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="block px-3 py-2 text-base font-medium text-secondary hover:text-primary transition-colors duration-200"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
