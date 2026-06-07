<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

import heroImage from '../assets/girona.jpg'
import logoColor from '../assets/logo-gnahs-white.png'
import logoWhite from '../assets/logo-gnahs-full-white.png'

const SCROLL_THRESHOLD = 40
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > SCROLL_THRESHOLD
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section
    class="hero"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <a href="#" class="logo-link" aria-label="Go to homepage">
        <img
          class="logo-image"
          :src="isScrolled ? logoWhite : logoColor"
          alt="GNA Hotel Solutions"
        />
      </a>

      <nav class="nav" aria-label="Main navigation">
        <a href="#">Hotel</a>
        <a href="#">Ofertas</a>
        <a href="#" class="reserve">Reservar</a>
      </nav>
    </header>

    <h1>GNA HOTEL SOLUTIONS</h1>
  </section>
</template>