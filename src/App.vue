<template>
  <header class="site-header">
    <div class="inner">
      <a href="#welcome" class="brand" @click.prevent="scrollTo('welcome')" aria-label="GuitarTechHub home">
        <span class="brand__mark">GTH</span>
        <span class="brand__text">GuitarTechHub</span>
      </a>

      <nav class="center-nav">
        <a href="#services" @click.prevent="scrollTo('services')">Services</a>
        <a href="#contact"  @click.prevent="scrollTo('contact')">Contact Me</a>
        <a href="#about"    @click.prevent="scrollTo('about')">About Me</a>
        <a href="#gallery"  @click.prevent="scrollTo('gallery')">Gallery</a>
        <a href="#reviews"  @click.prevent="scrollTo('reviews')">Reviews</a>
      </nav>

      <button class="menu-btn" @click="menuOpen = true" aria-label="Open menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
        </svg>
      </button>
    </div>
  </header>

  <transition name="mm" appear>
    <div v-if="menuOpen" class="mobile-menu" @click.self="menuOpen=false">
      <div class="top">
        <a href="#welcome" class="brand" @click.prevent="scrollToClose('welcome')" aria-label="GuitarTechHub home">
          <span class="brand__mark">GTH</span>
          <span class="brand__text">GuitarTechHub</span>
        </a>

        <button class="menu-btn" @click="menuOpen=false" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41L10.59 13.4l-6.3 6.3 1.41 1.41 6.3-6.3 6.29 6.29 1.41-1.41-6.29-6.29 6.29-6.29z"/>
          </svg>
        </button>
      </div>

      <nav class="list">
        <a style="--d:0ms"  href="#services" @click.prevent="scrollToClose('services')">Services</a>
        <a style="--d:60ms" href="#contact"  @click.prevent="scrollToClose('contact')">Contact Me</a>
        <a style="--d:120ms" href="#about"    @click.prevent="scrollToClose('about')">About Me</a>
        <a style="--d:180ms" href="#gallery"  @click.prevent="scrollToClose('gallery')">Gallery</a>
        <a style="--d:240ms" href="#reviews"  @click.prevent="scrollToClose('reviews')">Reviews</a>
      </nav>
    </div>
  </transition>

  <main>
    <RouterView />
  </main>

  <footer class="footer">
    <small>© {{ new Date().getFullYear() }} GuitarTechHub. Guitar setup, repair and maintenance in Cork City.</small>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToClose(id) {
  menuOpen.value = false
  requestAnimationFrame(() => scrollTo(id))
}
</script>