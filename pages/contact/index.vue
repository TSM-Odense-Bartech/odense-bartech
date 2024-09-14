<script setup lang="ts">
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import { EnvelopeIcon, ClockIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <!-- Header -->
    <AppHeader />

    <!-- Main Container -->
    <main class="flex-grow">
      <div class="w-full max-w-[1100px] mx-auto px-4 py-12">
        <!-- Main Heading -->
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center pb-10">
          Contact Us
        </h1>

        <!-- Contact Information and Form -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Open Hours -->
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center mb-4">
                <ClockIcon class="h-6 w-6 text-primary mr-2" />
                <h2 class="text-xl font-semibold text-gray-700">
                  Open Hours (GMT)
                </h2>
              </div>
              <ul class="text-sm text-gray-600 space-y-1">
                <li><strong>Monday - Friday:</strong> 7:00 AM - 4:00 PM</li>
                <li><strong>Saturday:</strong> 7:00 AM - 4:00 PM</li>
                <li><strong>Sunday:</strong> Closed</li>
              </ul>
            </div>

            <!-- Emails -->
            <div class="bg-white rounded-lg shadow p-6">
              <div class="flex items-center mb-4">
                <EnvelopeIcon class="h-6 w-6 text-primary mr-2" />
                <h2 class="text-xl font-semibold text-gray-700">Email Us</h2>
              </div>
              <ul class="text-sm text-gray-600 space-y-4">
                <li>
                  <div class="flex items-center">
                    <img
                      src="/Theodor.png"
                      alt="Theodor"
                      class="h-8 w-8 rounded-full mr-3"
                    />
                    <div>
                      <p class="font-medium text-gray-800 text-sm">
                        Theodor Mikkelsen (Founder)
                      </p>
                      <a
                        href="mailto:tsm@odensebartech.com"
                        class="text-primary hover:underline text-sm"
                        >tsm@odensebartech.com</a
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex items-center">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Emil"
                      class="h-8 w-8 rounded-full mr-3"
                    />
                    <div>
                      <p class="font-medium text-gray-800 text-sm">
                        Emil O'Kane (Co-founder)
                      </p>
                      <a
                        href="mailto:emil@example.com"
                        class="text-primary hover:underline text-sm"
                        >eok@odensebartech.com</a
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-xl font-semibold text-gray-700 mb-4">
              Send Us a Message
            </h2>
            <form class="space-y-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="h-[32px] border-solid border-2 border-gray-200 outline-none mt-1 block w-full rounded-md shadow-none focus:border-primary focus:ring-primary text-sm px-3"
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  class="h-[32px] border-solid border-2 border-gray-200 outline-none mt-1 block w-full rounded-md focus:border-primary focus:ring-primary text-sm px-3"
                />
              </div>
              <div>
                <label
                  for="message"
                  class="block text-sm font-medium text-gray-700"
                  >Message</label
                >
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  class="outline-none border-solid border-2 border-gray-200 mt-1 block w-full rounded-md focus:border-primary focus:ring-primary text-sm px-3 py-2"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark transition duration-300 text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* Additional custom styles if needed */
</style>
