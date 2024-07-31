<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div class="bg-tertiary text-textprimary">
    <section
      class="relative max-w-screen-xl mx-auto min-h-screen flex flex-col justify-center items-center px-4 py-16 overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <div
          class="absolute top-10 left-10 w-20 h-20 bg-primary opacity-20 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute bottom-10 right-10 w-32 h-32 bg-secondary opacity-10 rounded-full animate-pulse"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute top-1/4 right-1/4 w-16 h-16 bg-primary opacity-15 rounded-full animate-pulse"
          style="animation-delay: 0.5s"
        ></div>
      </div>

      <div class="relative z-10 text-center">
        <h1
          class="text-5xl md:text-7xl font-bold text-primary mb-4 transition-all duration-1000 ease-out"
          :class="{
            'opacity-100 translate-y-0': isVisible,
            'opacity-0 -translate-y-10': !isVisible,
          }"
        >
          Odense Bartech
        </h1>
        <p
          class="text-2xl md:text-3xl mb-8 transition-all duration-1000 ease-out delay-300"
          :class="{
            'opacity-100 translate-y-0': isVisible,
            'opacity-0 translate-y-10': !isVisible,
          }"
        >
          Precision in every Pour
        </p>
        <NuxtLink
          to="/kontakt"
          class="bg-primary text-tertiary px-8 py-3 rounded-md hover:bg-secondary transition-all duration-300 ease-in-out text-lg inline-block relative overflow-hidden group"
        >
          <span class="relative z-10">Kom i gang her!</span>
          <span
            class="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"
          ></span>
        </NuxtLink>
      </div>

      <div
        class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-tertiary to-transparent"
      ></div>
      <div
        class="absolute top-1/2 left-0 w-40 h-40 bg-primary opacity-5 rounded-full filter blur-3xl animate-blob"
      ></div>
      <div
        class="absolute top-1/2 right-0 w-40 h-40 bg-secondary opacity-5 rounded-full filter blur-3xl animate-blob"
        style="animation-delay: 2s"
      ></div>
    </section>

    <section class="max-w-screen-xl mx-auto py-16 px-4">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Revolutionerer teknologien i baren
          </h2>
          <p class="text-lg">
            Odense Bartech producerer teknologiske løsninger til barer. Vores
            innovative systemer er designet til at optimere effektiviteten og
            præcisionen i din bar.
          </p>
        </div>
        <div class="md:w-1/2">
          <img src="#" alt="Bar technology" class="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>

    <section class="bg-primary text-tertiary py-16 px-4">
      <div class="max-w-screen-xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
          Hvorfor vælge os?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-tertiary text-textprimary p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4">Præcision</h3>
            <p>
              Bag Odense Bartech er der et hold medarbejdere, der alle stræber
              efter at udføre deres opgave til præcision. Det eneste vi ønsker
              er at gøre din bar så effektiv som muligt.
            </p>
          </div>
          <div class="bg-tertiary text-textprimary p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4">Nem installation</h3>
            <p>
              Det skal være nemt og bekvemt for dig at sætte vores system op. Vi
              sørger for setupet og får dig kørende på ingen tid.
            </p>
          </div>
          <div class="bg-tertiary text-textprimary p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-4">Fleksible priser</h3>
            <p>Vi tilbyder to forskellige prisbaserede metoder:</p>
            <ul class="mt-2">
              <li class="flex justify-between">
                <span>Leje af systemet</span>
                <span class="font-bold">2.000 kr/md</span>
              </li>
              <li class="flex justify-between">
                <span>Køb af systemet</span>
                <span class="font-bold">12.000 kr</span>
              </li>
            </ul>
            <p class="mt-2 text-sm">
              Alle priser er eksklusive moms (25% pålægges ved privat køb)
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-primary text-tertiary py-16 px-4">
      <div class="max-w-screen-xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Klar til at optimere din bar?
        </h2>
        <p class="text-xl mb-8">
          Lad os hjælpe dig med at tage din bar til næste niveau
        </p>
        <NuxtLink
          to="/kontakt"
          class="bg-tertiary text-primary px-8 py-3 rounded-md hover:bg-secondary hover:text-tertiary transition-colors duration-300 ease-in-out text-lg inline-block"
        >
          Start her!
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  75% {
    transform: translate(30px, 30px) scale(1.05);
  }
}

.animate-blob {
  animation: blob 15s infinite;
}
</style>
