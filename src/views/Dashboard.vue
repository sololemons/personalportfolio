<template>
  <div class="bg-black min-h-screen text-white">
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main class="p-4 md:p-8">
      <!-- Profile Section -->
      <section class="flex justify-center mt-28">
        <div class="flex flex-col md:flex-row px-4 md:px-14 pt-8 items-center">
          <div
            class="bg-black px-4 rounded-lg w-full md:w-[700px] h-auto md:h-[530px] pt-8 border-gray-800 border-2 flex flex-col justify-between"
          >
            <!-- Welcome Animation -->
            <div
              class="text-center text-green-500 font-extrabold text-xl md:text-3xl mt-4 fadeInOut"
            >
              Welcome to my portfolio
            </div>

            <!-- Profile Section -->
            <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 pt-10">
              <div class="w-40 h-40 md:w-80 md:h-80 rounded-full bg-slate-100 overflow-hidden border-4 border-green-600">
                <img
                  src="@/assets/images/Solomon.jpg"
                  alt="Profile Picture"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="text-center md:text-left">
                <h1 class="text-white text-2xl md:text-3xl font-extrabold italic">
                  Solomon Ndimu Ngandu
                </h1>
              </div>
            </div>

            <!-- Download Button -->
            <div class="flex justify-center md:justify-start px-4 md:px-10 pb-6 mt-6">
              <a
                :href="cvLink"
                download="Solomon_CV.pdf"
                class="bg-green-600 text-white px-6 py-3 rounded-md text-sm md:text-lg font-semibold hover:bg-green-700 transition duration-300 flex items-center space-x-2 focus:outline-none focus:ring-4 focus:ring-green-500"
              >
                <!-- Icon Before Text -->
                <img
                  src="@/assets/images/downloadbutton.png"
                  alt="Download Icon"
                  class="w-5 h-5 md:w-6 md:h-6"
                />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="scroll-mt-16">
        <About />
      </section>

      <!-- Projects Section -->
      <section id="projects" class="scroll-mt-16">
        <Projects />
      </section>

      <!-- Programming Languages Section -->
      <section id="programming-languages" class="scroll-mt-16">
        <ProgrammingLanguages />
      </section>

      <!-- Education Section -->
      <section id="education" class="scroll-mt-16">
        <Education />
      </section>

      <!-- Interests Section -->
      <section id="interests" class="scroll-mt-16">
        <Interests />
      </section>

      <!-- Experience Section -->
      <section id="experience" class="scroll-mt-16">
        <Experience />
      </section>

      <!-- Contacts Section -->
      <section id="contacts" class="scroll-mt-16">
        <Contacts />
      </section>
      <section class="scroll-mt-16">
        <Footer/>
      </section>
    </main>
  </div>
</template>

<script setup> 
import About from '@/components/About.vue';
import Projects from '@/components/Projects.vue';
import Navbar from '@/components/Navbar.vue';
import ProgrammingLanguages from '@/components/ProgrammingLanguages.vue';
import Education from '@/components/Education.vue';
import Interests from '@/components/Interests.vue';
import Experience from '@/components/Experience.vue';
import Contacts from '@/components/Contacts.vue';
import Footer from '@/components/Footer.vue';

import cvPath from '@/assets/files/Ngandu RESUME.pdf';
const cvLink = cvPath;
</script>

<style scoped>
/* Define keyframes for fade-in and fade-out */
@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

/* Adjust scroll alignment for fixed navbar */
.scroll-mt-16 {
  scroll-margin-top: 64px;
}

html {
  scroll-behavior: smooth; 
}


.fadeInOut {
  animation: fadeInOut 3s infinite;
}

a:focus {
  outline: 2px solid #4ade80; 
  outline-offset: 2px;
}
</style>
