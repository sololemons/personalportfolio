<template>
  <section class="bg-black py-12">
    <div class="container mx-auto px-4 sm:px-6">
      <h2 class="text-3xl md:text-4xl font-bold text-green-500 mb-8 text-center">My Interests</h2>
      <!-- Cards Grid -->
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Card -->
        <div
          v-for="(interest, index) in interests"
          :key="index"
          class="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
        >
          <!-- Image -->
          <img :src="interest.image" alt="interest" class="w-full h-48 object-cover" />
          <!-- Content -->
          <div class="p-4 md:p-6">
            <h3 class="text-lg md:text-xl font-semibold text-gray-800">{{ interest.title }}</h3>
            <p class="text-gray-600 mt-2 md:mt-4">{{ interest.description }}</p>
            <!-- Learn More Button -->
            <a
              :href="interest.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mt-4 py-3 px-6 text-white font-semibold rounded-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-md hover:shadow-lg transform transition hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const interests = [
  {
    title: "FrontEnd Web Development",
    description:
      "Creating stunning and functional websites using modern technologies like Vue.js, Tailwind CSS, and JavaScript.",
    image:
      "https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    link: "https://medium.com/@solohlemons75/frontend-web-development-crafting-stunning-and-functional-websites-with-modern-tools-fc39e8801432",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Exploring AI concepts and building intelligent applications that can solve complex problems.",
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    link: "https://medium.com/@solohlemons75/artificial-intelligence-building-intelligent-applications-to-solve-complex-problems-8b2012ced827",
  },
  {
    title: "Mobile App Development",
    description:
      "Building mobile applications with user-friendly designs for Android and iOS platforms.",
    image:
      "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://medium.com/@solohlemons75/mobile-app-development-crafting-user-friendly-apps-for-android-and-ios-c0a6fc040335",
  },
  {
    title: "BackEnd Web Development",
    description:
      "Creating Backend APIs using modern technologies like SpringBoot and also implementing security to websites using JWT Authentication.",
    image:
      "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://medium.com/@solohlemons75/backend-web-development-building-apis-and-implementing-security-with-spring-boot-and-jwt-e2bc15ddcd27",
  },
];
</script>

<style scoped>
/* Smooth scaling effect */
.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

/*  Button Styles */
a {
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

a:hover {
  transform: translateY(-4px);
}
</style>
