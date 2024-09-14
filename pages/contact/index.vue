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
      <div class="w-full max-w-4xl mx-auto px-6 py-8">
        <!-- Main Heading -->
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center pb-10">
          Get in Touch
        </h1>

        <!-- Contact Information -->
        <div class="space-y-12">
          <!-- Open Hours -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <div class="flex items-center mb-6">
              <ClockIcon class="h-8 w-8 text-primary mr-3" />
              <h2 class="text-2xl font-semibold text-gray-700">
                Open Hours (GMT)
              </h2>
            </div>
            <ul class="text-base text-gray-600 space-y-2">
              <li><strong>Monday - Friday:</strong> 7:00 AM - 4:00 PM</li>
              <li><strong>Saturday:</strong> 7:00 AM - 4:00 PM</li>
              <li><strong>Sunday:</strong> Closed</li>
            </ul>
          </div>

          <!-- Emails -->
          <div class="bg-white rounded-lg shadow-md p-8">
            <div class="flex items-center mb-6">
              <EnvelopeIcon class="h-8 w-8 text-primary mr-3" />
              <h2 class="text-2xl font-semibold text-gray-700">Email Us</h2>
            </div>
            <ul class="space-y-6">
              <li>
                <div class="flex items-center">
                  <img
                    src="/Theodor.png"
                    alt="Theodor"
                    class="h-24 w-24 rounded-full mr-4"
                  />
                  <div class="flex flex-col">
                    <p class="font-medium text-gray-800 text-lg mb-2">
                      Theodor Mikkelsen (Founder)
                    </p>
                    <a
                      href="mailto:tsm@odensebartech.com"
                      class="text-primary hover:underline text-base"
                      >tsm@odensebartech.com</a
                    >
                    <a
                      href="tel:+4530504486"
                      class="text-primary hover:underline text-base"
                      >+45 3050 4486</a
                    >
                  </div>
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <img
                    src="https://via.placeholder.com/48"
                    alt="Emil"
                    class="h-24 w-24 rounded-full mr-4"
                  />
                  <div class="flex flex-col">
                    <p class="font-medium text-gray-800 text-lg mb-2">
                      Emil O'Kane (Co-founder)
                    </p>
                    <a
                      href="mailto:tsm@odensebartech.com"
                      class="text-primary hover:underline text-base"
                      >eok@odensebartech.com</a
                    >
                    <a
                      href="tel:+4561732128"
                      class="text-primary hover:underline text-base"
                      >+45 6173 2128</a
                    >
                  </div>
                </div>
              </li>
            </ul>
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
