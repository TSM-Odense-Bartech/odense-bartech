<template>
  <div>
    <!-- Navigation -->
    <nav class="absolute top-0 left-0 w-full z-50 bg-transparent px-10">
      <div
        class="max-w-6xl mx-auto flex items-center justify-between h-16 px-4"
      >
        <img src="/public/header-logo.svg" alt="Logo" class="h-6" />
        <!-- Desktop Menu -->
        <ul class="hidden md:flex items-center space-x-6">
          <li>
            <a href="#" class="text-white hover:text-primary">MK1 Release</a>
          </li>
          <div class="w-px h-5 bg-white"></div>
          <li>
            <a href="#" class="text-white hover:text-primary">About Us</a>
          </li>
          <div class="w-px h-5 bg-white"></div>
          <li>
            <a href="#" class="text-white hover:text-primart">Contact</a>
          </li>
        </ul>
        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden focus:outline-none pl-10"
        >
          <svg
            v-if="!isOpen"
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden bg-black">
        <a href="#" class="block px-4 py-2 text-white hover:bg-gray-700"
          >MK1 Release</a
        >
        <a href="#" class="block px-4 py-2 text-white hover:bg-gray-700"
          >About Us</a
        >
        <a href="#" class="block px-4 py-2 text-white hover:bg-gray-700"
          >Contact</a
        >
      </div>
    </nav>

    <!-- Main Content -->
    <main
      class="w-full h-screen bg-cover bg-no-repeat flex items-center justify-center"
      style="
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4),
            rgba(0, 0, 0, 0.2)
          ),
          url('/main.jpg');
      "
    >
      <div class="flex flex-col items-center gap-4">
        <h1 class="text-white font-bold text-5xl md:text-6xl">
          Odense Bartech
        </h1>
        <h2 class="text-white font-normal text-2xl md:text-3xl">
          Precision in every Pour
        </h2>
        <div class="flex gap-4 mt-4">
          <button
            class="px-4 py-2 bg-primary text-white rounded-md font-medium focus:outline-none hover:bg-primary"
          >
            Get a Quote
          </button>
          <button
            class="px-4 py-2 bg-transparent text-white rounded-md font-medium flex items-center gap-2 focus:outline-none hover:text-primary"
          >
            Explore Us
            <img src="/public/image.png" alt="Explore" class="h-4" />
          </button>
        </div>
      </div>
    </main>

    <!-- Content Container -->
    <div
      class="max-w-6xl mx-auto px-10 py-20 flex flex-col items-center gap-10"
    >
      <!-- Banner -->
      <div
        class="w-[100vw] bg-primary flex flex-col items-center justify-center gap-2 py-10"
      >
        <h4 class="text-white text-2xl font-bold">MK1 Releases in</h4>
        <h3 class="text-white text-5xl font-bold">March 2025</h3>
      </div>

      <!-- Separator -->
      <div class="w-full h-8"></div>

      <!-- Section -->
      <section class="flex flex-col items-center gap-10">
        <div class="flex flex-col items-center gap-4">
          <h2 class="text-3xl md:text-4xl text-center">Bartending Made Easy</h2>
          <h3 class="text-xl md:text-2xl text-center">
            Shorter waits - Larger profits
          </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-10">
          <p class="text-base leading-relaxed flex-1">
            Imagine a bar where every drink is served perfectly, with minimal
            wait times and zero wastage. The Odense Bartech MK1 makes this
            vision a reality. Designed to integrate seamlessly into any bar
            environment, our cocktail machine automates the drink-making
            process, allowing your staff to focus on customer service and
            experience. Say goodbye to long queues and inconsistencies, and
            welcome a new era of bartending.
            <br /><br />
            With Odense Bartech MK1, your bar becomes a hub of efficiency and
            delight. Shorter wait times mean happier customers and increased
            turnover, while the precision of our machine ensures each drink
            meets your exact standards. Maximize your profits while maintaining
            the highest level of service – that’s bartending made easy.
          </p>
          <p class="text-base leading-relaxed flex-1">
            Odense Bartech MK1 is not just a tool; it’s a partner in your
            business success. By reducing the time it takes to craft a perfect
            cocktail, you free up your bartenders to interact with guests,
            enhance the atmosphere, and create memorable experiences. Whether
            it’s a busy weekend night or a special event, the MK1 is designed to
            handle the demand, ensuring smooth operations and satisfied patrons.
            <br /><br />
            The result? Higher customer retention, more repeat business, and an
            overall boost to your bottom line. Our technology empowers you to
            achieve operational excellence without compromising on quality or
            creativity. Welcome to the future of bartending – faster, smarter,
            and more profitable.
          </p>
        </div>
      </section>

      <!-- Divider -->
      <div class="w-full h-1 bg-primary"></div>

      <!-- Stats Section -->
      <section class="flex flex-col items-center gap-10">
        <div>
          <h3 class="text-2xl md:text-3xl text-center">
            Your Bar's Precision Partner
          </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-10">
          <div
            class="flex flex-col items-center justify-center h-40 w-full md:w-72 gap-2"
          >
            <h3 class="text-xl">Profits Increase By</h3>
            <h2 class="text-5xl">50%</h2>
          </div>
          <div
            class="flex flex-col items-center justify-center h-40 w-full md:w-72 gap-2"
          >
            <h3 class="text-xl">Reduction In Waste</h3>
            <h2 class="text-5xl">40%</h2>
          </div>
          <div
            class="flex flex-col items-center justify-center h-40 w-full md:w-72 gap-2"
          >
            <h3 class="text-xl">Faster Transactions</h3>
            <h2 class="text-5xl">35%</h2>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
/* Additional custom styles if needed */
</style>
