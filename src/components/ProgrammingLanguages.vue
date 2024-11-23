<template>
  <section class="bg-black text-white py-12 border-2 border-gray-600 cursor-pointer rounded-2xl">
    <div class="container mx-auto px-4 sm:px-6 md:px-8">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-400 mb-8">
        Programming Languages Proficiency
      </h2>
      <!-- Circular Progress Bars -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div 
          v-for="(language, index) in languages" 
          :key="index" 
          class="flex justify-center items-center flex-col group transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <!-- Circle Progress -->
          <div class="relative">
            <svg 
              class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 transform -rotate-90 transition-transform duration-300"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <!-- Background Circle -->
              <circle
                cx="18" cy="18" r="15.915" 
                fill="none" stroke="#2c2c2c" stroke-width="2"
              />
              <!-- Foreground Circle (Progress Circle) -->
              <circle
                :stroke="language.color"
                cx="18" cy="18" r="15.915"
                fill="none"
                stroke-width="2"
                stroke-dasharray="100"
                :stroke-dashoffset="100 - language.proficiency"
                class="transition-all duration-500 ease-in-out"
              />
            </svg>
            <!-- Percentage Label -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-3xl font-bold text-green-400">
              {{ language.proficiency }}%
            </div>
          </div>
          <!-- Language Name with Icon -->
          <p 
            class="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-green-400 flex items-center group-hover:text-green-500 transition duration-300"
          >
            <!-- Icon -->
            <i :class="language.icon" class="mr-2"></i>
            {{ language.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const languages = [
  {
    name: 'JavaScript',
    proficiency: 90,
    color: '#F7DF1E',
    icon: 'fab fa-js',
  },
  {
    name: 'Python',
    proficiency: 85,
    color: '#306998',
    icon: 'fab fa-python',
  },
  {
    name: 'Java',
    proficiency: 80,
    color: '#007396',
    icon: 'fab fa-java',
  },
  {
    name: 'HTML',
    proficiency: 95,
    color: '#E34F26',
    icon: 'fab fa-html5',
  },
  {
    name: 'Vue.js',
    proficiency: 95,
    color: '#41B883',
    icon: 'fab fa-vuejs',
  },
  {
    name: 'Tailwind CSS',
    proficiency: 90,
    color: '#38B2AC',
    icon: 'fab fa-css3-alt',
  },
  {
    name: 'C',
    proficiency: 25,
    color: '#00599C',
    icon: 'fas fa-code',
  },
  {
    name: 'PHP',
    proficiency: 65,
    color: '#4F5B93',
    icon: 'fab fa-php',
  },
];
</script>

<style scoped>
/* Styling for Circular Progress Bar */
svg {
  transform: rotate(-90deg);
}

circle {
  transition: stroke-dashoffset 0.5s ease, stroke 0.3s ease;
}

/* Responsive Hover Effects */
.group:hover svg circle {
  stroke-width: 3; /* Increase stroke width on hover */
  stroke-dashoffset: 100; /* Reset circle progress when hovered */
}

.group:hover .absolute {
  color: #FF6347; /* Change color of percentage on hover */
}

.group:hover i {
  transform: scale(1.2); /* Increase size of the icon on hover */
}

.group:hover p {
  transform: translateY(-5px); /* Slight lift effect for text on hover */
}

/* Icon Styling */
i {
  font-size: 1.5rem; /* You can adjust the size of the icons */
}

/* Touch Device Optimization */
@media (hover: none) {
  .group:hover svg circle {
    stroke-dashoffset: initial; /* Disable hover effects on touch devices */
  }
}
</style>
