<template>
  <nav class="top-0 left-0 w-full z-50 bg-transparent px-4 md:px-10 mb-[44px]">
    <div class="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
      <a href="/">
        <img src="/public/header-logo-b.svg" alt="Logo" class="h-6" />
      </a>
      <!-- Desktop Menu -->
      <ul class="hidden md:flex items-center space-x-6">
        <li>
          <a href="/" class="text-black hover:text-primary">Home</a>
        </li>
        <div class="w-px h-5 bg-black"></div>
        <li>
          <a href="/about" class="text-black hover:text-primary">About Us</a>
        </li>
        <div class="w-px h-5 bg-black"></div>
        <li>
          <a href="/contact" class="text-black hover:text-primary">Contact</a>
        </li>
      </ul>
      <!-- Navigation -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden focus:outline-none pl-10"
      >
        <svg
          v-if="!isOpen"
          class="h-6 w-6 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="flex flex-col gap-2 md:hidden bg-white border border-s border-2 border-slate-300 rounded-lg py-2 shadow-xl absolute w-[calc(100vw-40px)] top-[100px] left-[50%] translate-x-[-50%]"
    >
      <a href="/" class="block px-4 py-2 text-black hover:bg-slate-700">Home</a>
      <a href="/about" class="block px-4 py-2 text-black hover:bg-slate-700"
        >About Us</a
      >
      <a href="/contact" class="block px-4 py-2 text-black hover:bg-slate-700"
        >Contact</a
      >
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Releases", href: "/releases" },
  { name: "Contact", href: "/contact" },
];

const mobileMenuOpen = ref(false);
</script>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
