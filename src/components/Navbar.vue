<template>
  <nav class="bg-black p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <h1 class="font-extrabold text-white">Portfolio</h1>

      <!-- Hamburger Menu for Mobile -->
      <button 
        @click="toggleMenu" 
        class="block md:hidden text-white focus:outline-none"
        aria-label="Toggle navigation"
      >
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Navigation Links -->
      <ul 
        :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" 
        class="flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 md:top-auto left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 text-center md:flex"
      >
        <li>
          <a href="#about" class="hover:text-gray-400 font-semibold text-white">About</a>
        </li>
        <li>
          <a href="#projects" class="hover:text-gray-400 font-semibold text-white">Projects</a>
        </li>
        <li>
          <a href="#contacts" class="hover:text-gray-400 font-semibold text-white">Contact</a>
        </li>
        <li>
          <a href="#experience" class="hover:text-gray-400 font-semibold text-white">Experience</a>
        </li>
        <li>
          <a href="#education" class="hover:text-gray-400 font-semibold text-white">Education</a>
        </li>
        <li>
          <a href="#programming-languages" class="hover:text-gray-400 font-semibold text-white">Programming Languages</a>
        </li>
        <li>
          <a href="#interests" class="hover:text-gray-400 font-semibold text-white">Interests</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

// State to toggle the menu
const isMenuOpen = ref(false);

// Function to toggle the menu visibility
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
a {
  transition: color 0.3s ease;
}

a:hover {
  color: #4ade80; /* Change to green when hovered */
}
</style>
