<script setup lang="ts">
import { ref } from "vue";

const features = ref([
  {
    title: "Precision Pour Systems",
    description:
      "Ensure perfect measurements every time, enhancing efficiency and consistency.",
    icon: "🍹",
  },
  {
    title: "Smart Inventory Management",
    description:
      "Optimize stock levels and reduce costs with our intelligent tracking solutions.",
    icon: "📊",
  },
  {
    title: "Custom Bar Layouts",
    description:
      "Maximize efficiency and improve workflow with tailored bar designs.",
    icon: "🏗️",
  },
  {
    title: "Comprehensive Training",
    description:
      "Expert-led programs ensure you get the most out of our technology.",
    icon: "🎓",
  },
]);

const testimonials = ref([
  {
    name: "John Doe",
    position: "Bar Owner",
    content:
      "Odense Bartech transformed our operations. The precision pour system alone increased our profits by 15%!",
  },
  {
    name: "Jane Smith",
    position: "Head Bartender",
    content:
      "The custom bar layout has made our busy nights so much smoother. I can't imagine working without it now.",
  },
]);
</script>

<template>
  <div class="min-h-screen bg-tertiary text-textprimary">
    <header class="bg-gradient-to-r from-primary to-secondary py-24 sm:py-32">
      <div class="container mx-auto px-4 text-center">
        <h1
          class="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-tertiary"
        >
          Odense Bartech
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl mb-10 text-tertiary">
          Precision in Every Pour
        </p>
        <NuxtLink
          to="#contact"
          class="bg-tertiary text-secondary font-bold py-3 px-8 rounded-full hover:bg-textsecondary transition duration-300 text-lg inline-flex items-center"
        >
          Kom igang her
        </NuxtLink>
      </div>
    </header>

    <main>
      <section class="py-20 sm:py-24">
        <div class="container mx-auto px-4">
          <h2
            class="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            Revolutionizing Bar Technology
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              class="bg-tertiary p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 class="text-2xl font-semibold mb-4 text-primary">
                Our Expertise
              </h3>
              <p class="text-textprimary leading-relaxed">
                At Odense Bartech, we blend cutting-edge technology with
                traditional craftsmanship to deliver unparalleled solutions for
                the modern bar industry. Our innovative systems ensure
                precision, efficiency, and consistency in every aspect of bar
                operations, setting new standards in the field.
              </p>
            </div>
            <div
              class="bg-tertiary p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 class="text-2xl font-semibold mb-4 text-primary">
                Why Choose Us
              </h3>
              <p class="text-textprimary leading-relaxed">
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

      <section class="bg-textsecondary py-20 sm:py-24">
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
              class="bg-tertiary p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
            >
              <div class="text-4xl mb-4">{{ feature.icon }}</div>
              <h3 class="text-xl font-semibold mb-4 text-primary">
                {{ feature.title }}
              </h3>
              <p class="text-textprimary">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 sm:py-24">
        <div class="container mx-auto px-4">
          <h2
            class="text-3xl sm:text-4xl font-bold mb-12 text-center text-primary"
          >
            What Our Clients Say
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              v-for="testimonial in testimonials"
              :key="testimonial.name"
              class="bg-tertiary p-6 rounded-lg shadow-lg"
            >
              <p class="text-textprimary italic mb-4">
                "{{ testimonial.content }}"
              </p>
              <div class="font-semibold text-primary">
                {{ testimonial.name }}
              </div>
              <div class="text-sm text-textsecondary">
                {{ testimonial.position }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="py-20 sm:py-24 bg-gradient-to-r from-primary to-secondary"
      >
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-tertiary">
            Ready to Transform Your Bar?
          </h2>
          <p class="text-xl text-tertiary mb-10 max-w-2xl mx-auto">
            Experience the future of bar technology. Let us help you elevate
            your bar's performance and customer satisfaction.
          </p>
          <NuxtLink
            to="/kontakt"
            class="bg-tertiary text-secondary font-bold py-3 px-8 rounded-full hover:bg-textsecondary transition duration-300 text-lg inline-flex items-center"
          >
            Kontakt os her
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>
