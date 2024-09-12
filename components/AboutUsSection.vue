<template>
  <section
    class="min-h-screen flex flex-col md:flex-row gap-y-12 md:gap-x-16 justify-center items-center py-20"
  >
    <!-- Who We Are -->
    <div
      class="md:w-1/2 max-w-lg px-6 text-center md:text-left animate-slideIn"
    >
      <h2 class="text-4xl font-bold text-secondary mb-6">
        Discover Who We Are
      </h2>
      <p class="text-lg text-gray-700 mb-8">
        We are a passionate team from Odense, Denmark, dedicated to innovating
        solutions in the beverage industry.
      </p>
      <BaseButton to="/about">Learn More</BaseButton>
    </div>

    <!-- The MK1 Product -->
    <div
      class="md:w-1/2 max-w-lg px-6 text-center md:text-left animate-slideIn"
    >
      <h2 class="text-4xl font-bold text-secondary mb-6">
        Introducing the MK1
      </h2>
      <p class="text-lg text-gray-700 mb-8">
        The MK1 is our flagship product designed to deliver swift and precise
        servings of non-carbonated alcoholic beverages.
      </p>
      <BaseButton to="/product">Read More</BaseButton>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
/* Define animations */
@keyframes slideIn {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slideIn {
  animation: slideIn 1.5s ease-out;
}
</style>
