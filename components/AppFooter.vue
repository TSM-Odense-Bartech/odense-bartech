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
  <footer class="bg-gray-50 border-t-4 border-primary py-12">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Company Info -->
      <div>
        <h2 class="text-2xl font-bold text-secondary mb-4">Odense Bartech</h2>
        <ul class="space-y-2 text-secondary">
          <li v-for="(item, index) in footerItems[0].items" :key="index">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Dynamic Footer Columns -->
      <div v-for="(column, index) in footerItems.slice(1)" :key="index">
        <h3
          class="text-lg font-semibold text-secondary uppercase tracking-wider mb-4"
        >
          {{ column.title }}
        </h3>
        <ul class="space-y-2">
          <li
            v-for="(item, itemIndex) in column.items"
            :key="itemIndex"
            class="text-secondary"
          >
            <span
              v-if="typeof item === 'string'"
              class="hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {{ item }}
            </span>
            <a
              v-else
              :href="item.path"
              class="hover:text-primary transition-colors duration-300"
            >
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="mt-10 pt-6 border-t-2 border-primary">
      <p class="text-sm text-secondary text-center">
        © {{ new Date().getFullYear() }} Odense Bartech. All rights reserved.
      </p>
    </div>
  </footer>
</template>
