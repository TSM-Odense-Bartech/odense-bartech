<script setup lang="ts">
import { ref } from "vue";

const isFormSubmitted = ref(false);

const handleSubmit = () => {
  // TODO hånter form submission
  isFormSubmitted.value = true;
  console.log("Form submitted!");
  setTimeout(() => {
    isFormSubmitted.value = false;
  }, 5000);
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto">
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label for="name" class="block mb-2 text-textprimary">Navn</label>
          <input
            id="name"
            placeholder="Indtast dit navn"
            required
            class="w-full px-4 py-2 border border-textsecondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-textprimary">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Indtast din email"
            required
            class="w-full px-4 py-2 border border-textsecondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
      <div class="mb-6">
        <label for="message" class="block mb-2 text-textprimary">Besked</label>
        <textarea
          id="message"
          placeholder="Skriv din besked"
          required
          class="w-full px-4 py-2 border border-textsecondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-32"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-primary text-tertiary px-6 py-3 rounded-md hover:bg-secondary transition-colors duration-300 ease-in-out"
      >
        Send
      </button>
    </form>
    <div
      v-if="isFormSubmitted"
      class="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center"
    >
      Tak for din besked! Vi vender tilbage til dig hurtigst muligt.
    </div>
  </div>
</template>
