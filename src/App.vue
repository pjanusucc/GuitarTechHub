<template>
  <header class="site-header">
    <div class="inner">
      <!-- Mobile-only: Home icon on the left -->
      <a href="#welcome" class="home-link mobile-only" @click.prevent="scrollTo('welcome')">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/>
        </svg>
        <span class="sr-only">Home</span>
      </a>

      <!-- Centered nav (desktop). Includes a Home icon as the first item -->
      <nav class="center-nav">
        <a href="#welcome" class="home-in-nav desktop-only" @click.prevent="scrollTo('welcome')" aria-label="Home">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/>
          </svg>
        </a>
        <a href="#services" @click.prevent="scrollTo('services')">Services</a>
        <a href="#contact"  @click.prevent="scrollTo('contact')">Contact Me</a>
        <a href="#about"    @click.prevent="scrollTo('about')">About Me</a>
        <a href="#gallery"  @click.prevent="scrollTo('gallery')">Gallery</a>
        <a href="#reviews"  @click.prevent="scrollTo('reviews')">Reviews</a>
      </nav>

      <!-- Right: hamburger on mobile -->
      <button class="menu-btn" @click="menuOpen = true" aria-label="Open menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
        </svg>
      </button>
    </div>
  </header>

  <!-- Mobile full-screen menu with transition -->
  <transition name="mm" appear>
    <div v-if="menuOpen" class="mobile-menu" @click.self="menuOpen=false">
      <div class="top">
        <a href="#welcome" class="home-link" @click.prevent="scrollToClose('welcome')">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/></svg>
          <span class="sr-only">Home</span>
        </a>
        <button class="menu-btn" @click="menuOpen=false" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41L10.59 13.4l-6.3 6.3 1.41 1.41 6.3-6.3 6.29 6.29 1.41-1.41-6.29-6.29 6.29-6.29z"/></svg>
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
    <small>© {{ new Date().getFullYear() }} GuitarTechHub</small>
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
