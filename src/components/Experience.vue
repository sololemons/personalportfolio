<template>
    <section class="py-12 bg-black text-white border-2 border-gray-600">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-10 text-green-400">My Experience</h2>
        <div class="space-y-8">
          <div 
            v-for="(exp, index) in experiences" 
            :key="index" 
            class="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <!-- Animated Year -->
            <div 
              class="text-4xl font-bold text-green-400 relative group"
              :style="{ animationDelay: `${index * 0.2}s` }"
            >
              <span 
                class="block animate-bounce group-hover:animate-pulse"
              >
                {{ exp.year }}
              </span>
            </div>
  
            <!-- Experience Details -->
            <div class="bg-gray-800 rounded-lg p-6 shadow-md w-full">
              <h3 class="text-2xl font-semibold mb-2">{{ exp.company }}</h3>
              <p class="text-gray-300">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script setup>
  // Array of experiences
  const experiences = [
    {
      year: "2021",
      company: "TechCorp Solutions",
      description:
        "Worked as a Backend Developer building enterprise-level APIs with Java Spring Boot.",
    },
    {
      year: "2022",
      company: "Innovatech Systems",
      description:
        "Led a team of developers to create a scalable CRM platform, focusing on microservices.",
    },
    {
      year: "2023",
      company: "CodeSphere International",
      description:
        "Enhanced cloud-native applications using Kubernetes and Docker for DevOps integration.",
    },
    {
      year: "2024",
      company: "OpenAI Innovators",
      description:
        "Contributed to building AI-driven APIs and enhancing machine learning workflows.",
    },
  ];
  </script>
  
  <style scoped>
  /* Animation for years */
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  /* Animation for pulse effect */
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  /* Applied animation classes */
  .animate-bounce {
    animation: bounce 1s infinite;
  }
  
  .group-hover\:animate-pulse:hover {
    animation: pulse 0.8s infinite;
  }
  </style>
  