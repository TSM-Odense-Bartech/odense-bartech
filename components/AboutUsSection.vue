<template>
  <div
    class="relative isolate overflow-hidden bg-white py-24 sm:py-16 px-8 lg:px-16"
  >
    <!-- Centered Content Section -->
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Meet the Odense Bartech MK1
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-700">
        Introducing the Odense Bartech MK1, the innovative cocktail machine
        designed to revolutionize the bartending experience. With precision
        engineering and smart technology, the MK1 ensures every pour is perfect,
        enhancing efficiency and quality in every cocktail served.
      </p>

      <div class="mx-auto mt-10 max-w-2xl lg:max-w-none">
        <div
          class="flex flex-wrap justify-center gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10"
        >
          <a v-for="link in links" :key="link.name" :href="link.href">
            {{ link.name }} <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <dl
          class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            v-for="stat in stats"
            :key="stat.name"
            class="flex flex-col-reverse text-center"
          >
            <dt class="text-base leading-7 text-gray-700">{{ stat.name }}</dt>
            <dd
              class="text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  { name: "Learn more about MK1", href: "#" },
  { name: "Request a demo", href: "#" },
  { name: "See MK1 in action", href: "#" },
  { name: "Get a quote", href: "#" },
];
const stats = [
  { name: "Cocktails per hour", value: "300+" },
  { name: "Precision in every pour", value: "99.9%" },
  { name: "Years of research", value: "5" },
  { name: "Satisfied bars", value: "200+" },
];
</script>
