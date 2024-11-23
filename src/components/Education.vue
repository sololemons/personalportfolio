<template>
    <section class="bg-black text-white py-12 border-2 border-gray-600 mt-10">
      <div class="container mx-auto px-6 flex flex-col lg:flex-row">
        <!-- Event Titles on the Left -->
        <div class="lg:w-1/4 w-full space-y-4 mb-6 lg:mb-0">
          <h2 class="text-3xl font-bold text-green-400 mb-8">Education Events</h2>
          <!-- List of Events -->
          <div v-for="(event, index) in events" :key="index">
            <div 
              class="cursor-pointer text-xl font-semibold text-green-400 hover:text-green-500 transition duration-300"
              @click="selectEvent(index)"
            >
              {{ event.title }}
            </div>
          </div>
        </div>
  
        <!-- Event Details on the Right -->
        <div class="lg:w-3/4 w-full pl-0 lg:pl-8 border-s-0 lg:border-s-4 transition-all duration-500 ease-in-out">
          <div v-if="selectedEvent !== null" class="event-details">
            <h3 class="text-2xl font-semibold text-green-400">{{ events[selectedEvent].title }}</h3>
            <!-- Split details into lines -->
            <div class="text-gray-300 mt-4 space-y-2">
              <p v-for="(sentence, index) in splitDetails(events[selectedEvent].details)" :key="index">
                {{ sentence }}
              </p>
            </div>
            <p class="mt-4">For More Insight refer to my CV Below</p>
            <a 
              :href="events[selectedEvent].link" 
              target="_blank" 
              class="mt-4 inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-300"
              :download="events[selectedEvent].linkText"
            >
              Download <span class="font-extrabold text-center">CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script setup>
  // Importing the `ref` function from Vue
  import { ref } from 'vue';
  
  // Event data (Title, details, and download link)
  const events = [
    {
      title: 'High School',
      details: 'Completed high school with excellent performance and received the KCSE certificate. I Attended 🌇Baricho High School.',
      link: '/path/to/kcse-cert.pdf', // Replace with actual file link
      linkText: 'KCSE_Certificate.pdf',
    },
    {
      title: 'Campus Degree',
      details: 'Earned a degree 👨‍🎓 in Computer Science from Dedan Kimathi University of Technology. Engaged in multiple tech events and research projects.',
      link: '/path/to/dekut-degree.pdf', // Replace with actual file link
      linkText: 'DEKUT_Degree.pdf',
    },
    {
    title: 'Hackathon Merit Award',
      details:'Won a merit award in a hackathon for:.🥇Dekut Hack .🥈Safaricom Hackathon. 🥉Google I/O Fest',
      link: '/path/to/hackathon-cert.pdf', // Replace with actual file link
      linkText: 'Hackathon_Certificate.pdf',
    },
    {
      title: 'Scholarship',
      details: 'I Got an Opportunity to attend Software Development scholarship which was Sponsored by Safaricom S-HOOK Edition ',
      link: '/path/to/hackathon-cert.pdf', // Replace with actual file link
      linkText: 'Hackathon_Certificate.pdf',
    },
    {
      title: 'Tech Events',
      details: 'I Got an Opportunity to attend Tech Events in my 4 Years in Campus. I attended Events such as:. Devfest. Gooogle I/O. Origin Fest. Safaricom Hacks. Huawei Hackathons Many More Mindblowing Events',
      link: '/path/to/hackathon-cert.pdf', // Replace with actual file link
      linkText: 'Hackathon_Certificate.pdf',
    },
    // Add other events...
  ];
  
  // Using `ref` to create a reactive reference for the selected event
  const selectedEvent = ref(null);
  
  // Method to select an event and show its details
  const selectEvent = (index) => {
    selectedEvent.value = index;
  };
  
  // Method to split details into sentences
  const splitDetails = (details) => {
    return details.split('.').filter((sentence) => sentence.trim() !== '').map((sentence) => sentence.trim() + '.');
  };
  </script>
  
  <style scoped>
  /* Smooth transition between event details */
  .event-details {
    opacity: 0;
    transform: translateX(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .event-details {
    opacity: 1;
    transform: translateX(0);
  }
  /* Add scroll behavior for overflow */
.container {
    overflow-x: auto;
  }
  </style>
  