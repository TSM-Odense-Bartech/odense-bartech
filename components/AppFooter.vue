<template>
  <footer
    class="shadow-2xl bg-white pt-16 pb-8 px-8 lg:px-16 border-t border-gray-200 mt-[68px]"
  >
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Company Information -->
      <div>
        <h2 class="text-xl font-bold text-gray-900 mb-4">Odense Bartech</h2>
        <ul class="text-gray-700 space-y-2">
          <li>Odense Bartech</li>
          <li>Rosenørnsvej 16</li>
          <li>5230 Odense M, Denmark</li>
        </ul>
      </div>

      <!-- Products -->
      <div>
        <h2 class="text-xl font-bold text-gray-900 mb-4">Products</h2>
        <ul class="text-gray-700 space-y-2">
          <li><a href="/" class="hover:text-primary">MK1</a></li>
        </ul>
      </div>

      <!-- Explore -->
      <div>
        <h2 class="text-xl font-bold text-gray-900 mb-4">Explore</h2>
        <ul class="text-gray-700 space-y-2">
          <li><a href="/about" class="hover:text-primary">About Us</a></li>
          <li><a href="/contact" class="hover:text-primary">Contact Us</a></li>
          <li><a href="/releases" class="hover:text-primary">Releases</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h2 class="text-xl font-bold text-gray-900 mb-4">Support</h2>
        <ul class="text-gray-700 space-y-2">
          <li>
            <a href="#" class="hover:text-primary">Service and Support</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 border-t border-gray-200 pt-6 text-center">
      <p class="text-base text-gray-600">
        {{ new Date().getFullYear() }} Odense Bartech
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
