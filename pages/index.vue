<script lang="ts" setup>
import { ref } from "vue";

const features = ref([
  {
    title: "Precision Pour Systems",
    description:
      "Ensure perfect measurements every time, enhancing efficiency and consistency.",
  },
  {
    title: "Smart Inventory Management",
    description:
      "Optimize stock levels and reduce costs with our intelligent tracking solutions.",
  },
  {
    title: "Custom Bar Layouts",
    description:
      "Maximize efficiency and improve workflow with tailored bar designs.",
  },
  {
    title: "Comprehensive Training",
    description:
      "Expert-led programs ensure you get the most out of our technology.",
  },
]);
</script>

<template>
  <div class="min-h-screen bg-tertiary text-textprimary">
    <!-- Hero Section -->
    <header class="bg-secondary py-24 sm:py-32">
      <div class="container mx-auto px-4 text-center">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary"
        >
          Odense Bartech
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl mb-10 text-tertiary">
          Precision in Every Pour
        </p>
        <a
          href="#contact"
          class="bg-primary text-secondary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 text-lg"
          >Get Started</a
        >
      </div>
    </header>

    <main>
      <!-- About Section -->
      <section class="py-20 sm:py-24">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Revolutionizing Bar Technology
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold mb-4 text-primary">
                Our Expertise
              </h3>
              <p class="text-textsecondary leading-relaxed">
                At Odense Bartech, we blend cutting-edge technology with
                traditional craftsmanship to deliver unparalleled solutions for
                the modern bar industry. Our innovative systems ensure
                precision, efficiency, and consistency in every aspect of bar
                operations, setting new standards in the field.
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-semibold mb-4 text-primary">
                Why Choose Us
              </h3>
              <p class="text-textsecondary leading-relaxed">
                With years of experience and a passion for excellence, we offer
                tailor-made solutions that address the unique challenges of your
                bar. Our commitment to quality, innovation, and customer
                satisfaction sets us apart, ensuring that your bar operates at
                peak efficiency and delivers exceptional experiences to your
                patrons.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="bg-secondary py-20 sm:py-24">
        <div class="container mx-auto px-4">
          <h2
            class="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            Our Services
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="bg-tertiary p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl"
            >
              <h3 class="text-xl font-semibold mb-4 text-primary">
                {{ feature.title }}
              </h3>
              <p class="text-textsecondary">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="py-20 sm:py-24 bg-primary">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-secondary">
            Ready to Transform Your Bar?
          </h2>
          <p class="text-xl text-secondary mb-10 max-w-2xl mx-auto">
            Experience the future of bar technology. Let us help you elevate
            your bar's performance and customer satisfaction.
          </p>
          <a
            href="/kontakt"
            class="bg-secondary text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition duration-300 text-lg inline-block"
            >Get in Touch</a
          >
        </div>
      </section>
    </main>
  </div>
</template>
