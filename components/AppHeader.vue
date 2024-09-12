<template>
  <div class="bg-white relative isolate px-6 pt-14 lg:px-8 overflow-hidden">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav
        class="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Odense Bartech</span>
            <!-- Your Company Logo -->
            <img
              class="h-[20px] w-auto"
              src="/header-logo-b.svg"
              alt="Odense Bartech Logo"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6 text-black" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-black"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>
      <Dialog
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Odense Bartech</span>
              <img
                class="h-8 w-auto"
                src="/header-logo.svg"
                alt="Odense Bartech Logo"
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50"
                >
                  {{ item.name }}
                </a>
              </div>
              <div class="py-6"></div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
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
