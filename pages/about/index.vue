<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <div class="bg-gray-50 flex flex-col">
    <!-- Header -->
    <AppHeader />

    <!-- Main Container -->
    <div class="w-full max-w-[1100px] mx-auto px-4 py-8">
      <!-- Main Heading -->
      <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center pb-10">
        About Us
      </h1>

      <!-- Who Are We Section -->
      <div
        class="flex flex-col md:flex-row gap-12 items-start justify-between border-b-2 border-gray-200 pb-12"
      >
        <!-- Text Content -->
        <div class="md:w-2/3 space-y-6">
          <h2 class="text-2xl font-semibold text-secondary">Who Are We?</h2>
          <p class="text-base leading-relaxed text-gray-700">
            At Odense Bartech, we are innovators committed to redefining the
            bartending experience. Based in Odense, Denmark, our team is driven
            by a passion for solving the challenges of the beverage industry.
            Our innovative products are designed to empower bartenders, optimize
            service, and enhance customer experiences.
          </p>
          <p class="text-base leading-relaxed text-gray-700">
            We believe in creating products that not only perform but excel in
            every setting. With precision and reliability at the core, our
            solutions are setting new standards for bars around the world.
          </p>
        </div>
        <!-- Placeholder Image -->
        <div class="md:w-1/3 w-full">
          <div
            class="w-full h-64 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center"
          >
            <span class="text-gray-500">Image Placeholder</span>
          </div>
        </div>
      </div>

      <!-- Our Philosophy Section -->
      <div class="py-12">
        <h2 class="text-2xl font-semibold text-secondary mb-6">
          Our Philosophy
        </h2>
        <div class="flex flex-col md:flex-row gap-12 items-start">
          <p class="text-base leading-relaxed text-gray-700 md:w-1/2">
            We understand the fast-paced environment of bars and the importance
            of efficiency without sacrificing quality. Our mission is to develop
            solutions that help bartenders deliver exceptional service quickly.
            By automating precise pouring, our technology allows bartenders to
            focus on creating memorable experiences for their customers. At
            Odense Bartech, we believe in one thing; Precision in every pour.
          </p>
          <p class="text-base leading-relaxed text-gray-700 md:w-1/2">
            Through our advanced technology, we provide unmatched consistency in
            every pour. This means every cocktail served is perfect, every time.
            With Odense Bartech, you get a product that will revolutionize your
            bar operations and offer a swift return on investment, all while
            maintaining the craft and charm that define the best bars.
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->

    <AppFooter />
  </div>
</template>

<style>
/* Additional custom styles if needed */
</style>
