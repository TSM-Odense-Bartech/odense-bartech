<script setup lang="ts">
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { MailIcon, ClockIcon } from "@heroicons/vue/outline";
</script>

<template>
  <div>
    <!-- Header -->
    <AppHeader />

    <!-- Main Container -->
    <div class="w-full max-w-[1100px] mx-auto px-6 py-12">
      <!-- Main Heading -->
      <h1 class="text-4xl font-extrabold text-gray-900 mb-12 text-center">
        Get in Touch
      </h1>

      <!-- Contact Information and Form -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-12">
          <!-- Open Hours -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="flex items-center mb-6">
              <ClockIcon class="h-8 w-8 text-primary mr-4" />
              <h2 class="text-2xl font-semibold text-gray-800">Open Hours</h2>
            </div>
            <ul class="text-base text-gray-600 space-y-2">
              <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
              <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>

          <!-- Emails -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="flex items-center mb-6">
              <MailIcon class="h-8 w-8 text-primary mr-4" />
              <h2 class="text-2xl font-semibold text-gray-800">Email Us</h2>
            </div>
            <ul class="text-base text-gray-600 space-y-6">
              <li>
                <div class="flex items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Theodor"
                    class="h-10 w-10 rounded-full mr-4"
                  />
                  <div>
                    <p class="font-medium text-gray-800">Theodor (Founder)</p>
                    <a
                      href="mailto:theodor@example.com"
                      class="text-primary hover:underline"
                      >theodor@example.com</a
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Emil"
                    class="h-10 w-10 rounded-full mr-4"
                  />
                  <div>
                    <p class="font-medium text-gray-800">Emil (Co-founder)</p>
                    <a
                      href="mailto:emil@example.com"
                      class="text-primary hover:underline"
                      >emil@example.com</a
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-base font-medium text-gray-700"
                >Name</label
              >
              <input
                type="text"
                id="name"
                name="name"
                required
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-base font-medium text-gray-700"
                >Email</label
              >
              <input
                type="email"
                id="email"
                name="email"
                required
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label
                for="message"
                class="block text-base font-medium text-gray-700"
                >Message</label
              >
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-3 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition duration-300"
            >
              Submit
            </button>
          </form>
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
