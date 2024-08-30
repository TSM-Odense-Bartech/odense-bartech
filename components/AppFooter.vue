<script setup>
const footerItems = [
  {
    title: "Odense Bartech",
    items: [
      "Odense Bartech ApS",
      "Cvr: 12345678",
      "Edisonsvej 30, st. 3,",
      "5000 Odense C",
      "Denmark",
    ],
  },
  {
    title: "Products",
    items: [{ name: "MK1", path: "/" }],
  },
  {
    title: "Explore",
    items: [
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Releases", path: "/releases" },
    ],
  },
  {
    title: "Support",
    items: ["Service and support"],
  },
];
</script>

<template>
  <footer class="">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="md:flex sm:flex-row md:justify-between">
        <div class="mb-8 md:mb-0">
          <h2 class="text-2xl font-bold text-secondary">Odense Bartech</h2>
        </div>
        <div class="md:flex sm:flex-row gap-6">
          <div v-for="(column, index) in footerItems.slice(1)" :key="index">
            <h3
              class="text-sm font-semibold text-secondary uppercase tracking-wider mb-4"
            >
              {{ column.title }}
            </h3>
            <ul class="space-y-2">
              <li v-for="(item, itemIndex) in column.items" :key="itemIndex">
                <span
                  v-if="typeof item === 'string'"
                  class="text-secondary hover:text-primary transition-colors duration-200"
                >
                  {{ item }}
                </span>
                <a
                  v-else
                  :href="item.path"
                  class="text-secondary hover:text-primary transition-colors duration-200"
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-8 border-t border-secondary">
        <p class="text-base text-secondary text-center">
          © {{ new Date().getFullYear() }} Odense Bartech. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
