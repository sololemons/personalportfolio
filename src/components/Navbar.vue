<template>
    <nav class="bg-black p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <h1 class="font-extrabold px-8 text-white">Portfolio</h1>
      <div class="container mx-auto flex justify-center items-center pt-8">
        <ul class="flex space-x-8">
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
  </script>
  
  <style scoped>
  a {
    transition: color 0.3s ease;
  }
  a:hover {
    color: #4ade80; /* Change to green when hovered */
  }

  </style>
  