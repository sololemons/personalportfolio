<template>
    <footer class="bg-black text-white py-6 mt-12">
      <div class="container mx-auto text-center px-4">
        <p class="text-sm sm:text-base md:text-lg">
          &copy; {{ currentYear }} Solomon Ndimu Ngandu. All rights reserved.
        </p>
      </div>
    </footer>
  </template>
  
  
  <script setup>
  const currentYear = new Date().getFullYear();
  </script>
  
  <style scoped>
  footer {
    background-color:black;
  }
  
  footer p {
    font-size: 0.875rem; /* Default smaller text */
    color: #ccc;
  }
  
  footer p:hover {
    color: #fff; /* Change color when hovering */
  }
  
  /* Mobile responsiveness */
  @media (max-width: 640px) {
    footer p {
      font-size: 0.75rem; /* Even smaller text on mobile */
    }
  }
  
  @media (min-width: 641px) {
    footer p {
      font-size: 1rem; /* Slightly bigger font for tablets and above */
    }
  }
  
  @media (min-width: 768px) {
    footer p {
      font-size: 1.125rem; /* Larger font for desktop */
    }
  }
  </style>
  