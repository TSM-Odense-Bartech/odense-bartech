<!-- /pages/404.vue -->

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 lg:px-8"
  >
    <!-- Display the 404 error code -->
    <h1 class="text-6xl font-bold text-primary mb-4">404</h1>
    <!-- Show the 404 error message -->
    <h2 class="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h2>
    <p class="text-gray-600 mb-8 text-center">
      Sorry, the page you are looking for does not exist or has been moved.
      <br />
      Might we offer a drink as an apology?
    </p>
    <!-- Button to Go to Home Page -->
    <nuxt-link
      to="/"
      class="rounded-md bg-primary px-6 py-3 text-white text-sm font-semibold hover:bg-primary-dark transition duration-300"
    >
      Go to Home Page
    </nuxt-link>
  </div>
</template>

<script setup>
// No specific script needed for the static 404 page.
</script>
