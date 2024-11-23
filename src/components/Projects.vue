<template>
    <section class="bg-black text-white py-12">
      <div class="container mx-auto px-4 sm:px-6">
        <!-- Section Title -->
        <h2 class="text-3xl font-bold text-center text-green-400 mb-8">Projects</h2>
        <!-- Cards Container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="bg-gray-800 rounded-lg overflow-hidden shadow-md group transition-transform transform hover:-translate-y-2 hover:shadow-lg cursor-pointer"
          >
            <!-- Project Image -->
            <a :href="project.link" target="_blank" class="block">
              <div class="h-48 md:h-56 overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <!-- Project Details -->
              <div class="p-4">
                <h3
                  class="text-xl font-semibold text-green-400 group-hover:text-green-500 transition duration-300"
                >
                  {{ project.title }}
                </h3>
                <p class="text-gray-300 mt-2 text-sm">
                  {{ project.description }}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with Vue.js and Tailwind CSS.",
      image:
        "https://marketplace.canva.com/EAFf9pTh3kg/1/0/1131w/canva-black-and-white-simple-portfolio-cover-page-BRYRBdWQKVU.jpg",
      link: "https://github.com/sololemons/Personal-Portfolio--PEER-GROUP-16.git",
    },
    {
      title: "E-Commerce Platform",
      description: "An online shopping platform featuring secure payment integration.",
      image:
        "https://media.istockphoto.com/id/1449490038/photo/online-shopping-and-e-commerce-technology-concept-shopper-using-computer-laptop-to-input.webp?a=1&b=1&s=612x612&w=0&k=20&c=UV8-hsrRpcoh3lhM-bqJixmZW6Fskg88aBjp-b151Mc=",
      link: "https://github.com/sololemons/updatedEccFrontend.git",
    },
    {
      title: "Immunisation Website",
      description: "A productivity app to manage immunisation Dates",
      image:
        "https://plus.unsplash.com/premium_photo-1668487826892-bf471b01e5ed?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://github.com/sololemons/immunisationFrontend.git",
    },
    {
      title: "School Management System Website",
      description: "A productivity app to manage School activities",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNjaG9vbCUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D",
      link: "https://github.com/sololemons/schoolmanagementsystem.git",
    },
    {
      title: "Laundry Website",
      description: "A productivity app to manage Laundry Activities",
      image:
        "https://images.unsplash.com/photo-1604335398941-8d7108a9e8e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExhdW5kcnl8ZW58MHx8MHx8fDA%3D",
      link: "https://github.com/sololemons/SMLSUpdated.git",
    },
    {
      title: "Immunisation healthcare USSD",
      description: "A productivity app to manage Immunisation Activities through USSD",
      image:
        "https://media.istockphoto.com/id/2024514092/photo/vaccine-production-facility-medication-manufacturing-process-glass-vials-with-orange-caps-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=3ZyxAzY3YE8NfECc8o6KvZmHfo2K_TF0MeCVza3yW4I=",
      link: "https://github.com/sololemons/chanjohealthcareussd.git",
    },
  ];
  </script>
  
  <style scoped>
  /* Custom Modern Styling */
  .group:hover img {
    filter: brightness(1.1) contrast(1.2);
  }
  </style>
  