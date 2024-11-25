<template>
    <section class="bg-black py-16 text-white border-2 border-gray-600 mt-6">
      <div class="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-start gap-8">
        <!-- Contact Form -->
        <div class="lg:w-2/3">
          <h2 class="text-3xl lg:text-4xl font-bold text-center text-green-400 mb-10">
            Contact Me
          </h2>
          <div class="bg-gray-800 rounded-lg shadow-md p-8 relative">
            <!-- Animated Heading -->
            <div
              class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg text-sm lg:text-base"
              style="animation: slide-down 0.8s ease"
            >
              Let's Connect!
            </div>
  
            <!-- Contact Form -->
            <form
              action="https://formspree.io/f/mdkolonb"
              method="POST"
              class="space-y-6"
            >
              <!-- First Name -->
              <div>
                <label for="firstName" class="block text-lg font-semibold mb-2">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  required
                />
              </div>
              <!-- Last Name -->
              <div>
                <label for="lastName" class="block text-lg font-semibold mb-2">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  required
                />
              </div>
              <!-- Email -->
              <div>
                <label for="email" class="block text-lg font-semibold mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  required
                />
              </div>
              <!-- Message -->
              <div>
                <label for="message" class="block text-lg font-semibold mb-2">
                  What you would want from me
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows="4"
                  class="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                  required
                ></textarea>
              </div>
              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-md transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
  
        <!-- Social Media Section -->
        <div
          class="lg:w-1/3 flex flex-col items-center lg:items-start space-y-6 py-10"
        >
          <h3 class="text-2xl lg:text-3xl font-bold text-green-400">Reach Out</h3>
          <p class="text-gray-300 text-center lg:text-left">
            Feel free to connect with me on any of these platforms:
          </p>
          <!-- Social Media Links -->
          <div class="flex flex-col items-center lg:items-start space-y-4">
            <a
              href="https://www.linkedin.com/in/solomon-ndimu-120a7b257/"
              target="_blank"
              class="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition"
            >
              <img
                :src="linkedinIcon"
                alt="LinkedIn"
                class="w-6 h-6 lg:w-8 lg:h-8"
              />
              <span>LinkedIn</span>
            </a>
       
            <a
              href="https://x.com/ndimuuu_"
              target="_blank"
              class="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition"
            >
              <img
                :src="twitterIcon"
                alt="Twitter"
                class="w-6 h-6 lg:w-8 lg:h-8"
              />
              <span>Twitter</span>
            </a>
            <a
              href="https://wa.me/+254706725681"
              target="_blank"
              class="flex items-center space-x-4 text-gray-300 hover:text-green-400 transition"
            >
              <img
                :src="whatsappIcon"
                alt="WhatsApp"
                class="w-6 h-6 lg:w-8 lg:h-8"
              />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>

  
  //INITIALIZE AFTER IMPRORTING ICONS

  const twitterIcon = new URL("@/assets/images/XTwitter.png", import.meta.url).href;
  const whatsappIcon = new URL("@/assets/images/whatsapp.png", import.meta.url).href;
  const linkedinIcon = new URL("@/assets/images/linkedinn.png", import.meta.url).href;
  </script>
  
  <style scoped>
  /* Slide Down Animation */
  @keyframes slide-down {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  