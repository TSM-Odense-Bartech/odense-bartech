<template>
  <div
    class="relative isolate overflow-hidden bg-white py-24 sm:py-32 px-8 lg:px-16"
  >
    <!-- The Team Section -->
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Meet Our Team
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-700">
        Based in Odense, Denmark, our small but dedicated team is passionate
        about revolutionizing the bartending industry. Together, we strive to
        innovate and elevate every pour.
      </p>

      <div class="mx-auto mt-10 max-w-2xl lg:max-w-none">
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-12"
        >
          <div class="flex flex-col items-center">
            <div
              class="h-32 w-32 rounded-full bg-gray-300 flex items-center justify-center"
            >
              <!-- Placeholder for profile picture -->
              <span class="text-2xl font-bold text-white">EO</span>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-gray-900">
              Emil O'Kane
            </h3>
            <p class="text-sm text-gray-700">Cofounder</p>
            <p class="mt-2 text-sm text-gray-500">
              Driving force behind innovation and operational excellence.
            </p>
          </div>

          <div class="flex flex-col items-center">
            <div
              class="h-32 w-32 rounded-full bg-gray-300 flex items-center justify-center"
            >
              <!-- Placeholder for profile picture -->
              <span class="text-2xl font-bold text-white">TM</span>
            </div>
            <h3 class="mt-4 text-xl font-semibold text-gray-900">
              Theodor Mikkelsen
            </h3>
            <p class="text-sm text-gray-700">Founder</p>
            <p class="mt-2 text-sm text-gray-500">
              Visionary founder with a passion for transforming the bartending
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    name: "Emil O'Kane",
    role: "Cofounder",
    initials: "EO",
    description: "Driving force behind innovation and operational excellence.",
  },
  {
    name: "Theodor Mikkelsen",
    role: "Founder",
    initials: "TM",
    description:
      "Visionary founder with a passion for transforming the bartending industry.",
  },
];
</script>
