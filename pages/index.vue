<script setup lang="ts"></script>

<template>
  <div class="container mx-auto px-4 py-8">
    <section
      class="min-h-[90vh] bg-gradient-to-b from-gray-50 to-white border-b-4 border-primary flex flex-col justify-center items-center text-center px-4"
    >
      <div class="max-w-3xl mx-auto pb-16">
        <h1
          class="text-secondary text-4xl font-extrabold text-gray-900 tracking-tight mb-4"
        >
          Odense Bartech
        </h1>
        <p class="text-secondary text-xl font-medium text-gray-600 mb-8">
          Precision in every pour
        </p>
        <NuxtLink
          to="/about"
          class="text-secondary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary"
        >
          Contact Us
        </NuxtLink>
      </div>
    </section>
    <section
      class="min-h-screen border-primary border-b-4 flex flex-col md:flex-row gap-y-12 md:gap-x-12 justify-center items-center py-16"
    >
      <div class="md:w-1/2 max-w-md">
        <h2 class="text-3xl text-secondary tracking-wider mb-4">
          Want to know who we are?
        </h2>
        <p class="mb-6 text-lg text-secondary">
          We are a team from Odense, Denmark, that are dedicated to solving
          problems in the beverage industry.
        </p>
        <NuxtLink
          to="/about"
          class="text-secondary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary"
        >
          About Us
        </NuxtLink>
      </div>
      <div class="md:w-1/2 max-w-md">
        <h2 class="text-3xl text-secondary tracking-wider mb-4">The MK1</h2>
        <p class="text-secondary mb-6 text-lg">
          MK1 is our first product in our product line. Its mission is to
          deliver a fast and reliable serving of non-carbonated alcoholic
          beverages.
        </p>
        <NuxtLink
          to="/about"
          class="text-secondary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary"
        >
          Read More
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
