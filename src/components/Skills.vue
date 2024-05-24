<script setup lang="ts">
import { ref } from 'vue'
import ISkill from '@/models/ISkill.ts'
import SkillCard from '@/components/skills/SkillCard.vue'

import {
  ServerIcon,
  BotIcon,
  SatelliteDishIcon,
  LinkIcon,
  SmartphoneIcon
} from 'lucide-vue-next'

const skills = ref<ISkill[]>([{
  title: "Full-Stack Web Development",
  description: "With a robust command of both front-end and back-end technologies, I specialize in building dynamic, responsive, and feature-rich web applications. Leveraging frameworks and libraries like Vue.js, Nuxt.js, and Node.js, alongside server-side languages such as PHP, C#, and Ruby on Rails, I ensure seamless user experiences and efficient server interactions. My proficiency extends to working with databases like MySQL and Microsoft SQL Server, ensuring data integrity and optimized performance.",
  icon: ServerIcon
},
{
  title: "Machine Learning and AI Integration",
  description: "Proficient in integrating machine learning models and AI into web and mobile applications to enhance functionality and user interaction. With a solid understanding of Python and frameworks like TensorFlow, I can develop intelligent applications that learn and adapt. These applications range from predictive analytics to natural language processing, providing advanced capabilities to meet complex business requirements.",
  icon: BotIcon
},
{
  title: "Real-Time Applications and Live Streaming",
  description: "Expert in developing real-time applications that demand high performance and low latency. My experience includes creating live streaming solutions and interactive web chat systems using advanced JavaScript frameworks and WebRTC technology. I ensure that applications handle high traffic smoothly and provide an engaging user experience. This includes proficiency with tools and platforms such as Microsoft Azure for scalable cloud services and deployment.",
  icon: SatelliteDishIcon
},
{
  title: "Blockchain and Distributed Systems",
  description: "Skilled in implementing blockchain technology to develop secure and transparent applications. My expertise covers creating decentralized applications (DApps) using smart contracts, understanding blockchain principles, and integrating blockchain solutions with existing systems. I also have experience with blockchain frameworks and can apply these to build innovative, next-gen applications that leverage the power of distributed ledgers.",
  icon: LinkIcon
},
{
  title: "Mobile Application Development",
  description: "Experienced in developing robust and user-friendly mobile applications for Android platforms. Utilizing Java, Kotlin, and modern frameworks, I ensure high performance, intuitive interfaces, and seamless integration with web services and databases. I prioritize responsive design and usability, providing end-users with an exceptional mobile experience.",
  icon: SmartphoneIcon
}]);
</script>

<template>
    <div id="skills"class="flex flex-col my-4">
        <p class="text-4xl mb-4 uppercase">
          My<br>Skills
        </p>
        <div class="mt-6 space-y-4">
          <SkillCard v-for="(skill, i) in skills"
            :index="i+1"
            :skill="skill"
          />
        </div>
    </div>
</template>
