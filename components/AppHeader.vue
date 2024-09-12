<template>
  <nav class="bg-white shadow-md border-b-4 border-primary">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center space-x-2">
        <NuxtLink to="/">
          <img
            src="/header-logo.svg"
            alt="Odense Bartech Logo"
            style="height: 20px"
          />
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex space-x-8 items-center">
        <ul class="flex space-x-6">
          <li v-for="item in navItems" :key="item.name">
            <NuxtLink
              :to="item.path"
              class="text-lg text-secondary hover:text-primary transition-colors duration-300"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Mobile Menu Button -->
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
          class="h-8 w-8"
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

    <!-- Mobile Navigation Menu -->
    <div
      v-show="isMenuOpen"
      class="md:hidden bg-white shadow-lg transition-transform duration-300 ease-out transform"
    >
      <div class="container mx-auto px-6 py-4 space-y-2">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="block py-2 text-base font-medium text-secondary hover:text-primary transition-colors duration-300"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

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
