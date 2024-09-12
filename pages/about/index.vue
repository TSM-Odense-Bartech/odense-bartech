import AppHeader from "@/components/AppHeader";

<script setup lang="ts"></script>

<template>
  <AppHeader />
  <div class="container mx-auto px-4 py-8">
    <!-- Main Heading -->
    <h1
      class="border-primary border-b-2 inline-block text-2xl font-bold text-secondary mb-6"
    >
      About Us
    </h1>

    <!-- Who Are We Section -->
    <div
      class="flex flex-col md:flex-row gap-6 items-start justify-between border-primary border-b-4 py-8"
    >
      <div class="md:w-1/2 space-y-4">
        <h2 class="text-xl font-semibold text-secondary">Who Are We?</h2>
        <p class="text-secondary text-base leading-relaxed">
          At Odense Bartech, we are innovators committed to redefining the
          bartending experience. Based in Odense, Denmark, our team is driven by
          a passion for solving the challenges of the beverage industry. Our
          innovative products are designed to empower bartenders, optimize
          service, and enhance customer experiences.
        </p>
        <p class="text-secondary text-base leading-relaxed">
          We believe in creating products that not only perform but excel in
          every setting. With precision and reliability at the core, our
          solutions are setting new standards for bars around the world.
        </p>
      </div>
      <img
        src=""
        alt="Founders of Odense Bartech"
        class="md:w-1/3 w-full rounded-lg shadow-lg object-cover"
      />
    </div>

    <!-- Our Philosophy Section -->
    <div class="py-8">
      <h2 class="text-xl font-semibold text-secondary mb-4">Our Philosophy</h2>
      <div class="flex flex-col md:flex-row gap-6 items-start">
        <p class="text-secondary text-base leading-relaxed md:w-1/2">
          We understand the fast-paced environment of bars and the importance of
          efficiency without sacrificing quality. Our mission is to develop
          solutions that help bartenders deliver exceptional service quickly. By
          automating precise pouring, our technology allows bartenders to focus
          on creating memorable experiences for their customers.
        </p>
        <p class="text-secondary text-base leading-relaxed md:w-1/2">
          Through our advanced technology, we provide unmatched consistency in
          every pour. This means every cocktail served is perfect, every time.
          With Odense Bartech, you get a product that will revolutionize your
          bar operations and offer a swift return on investment, all while
          maintaining the craft and charm that define the best bars.
        </p>
      </div>
    </div>
  </div>
</template>
