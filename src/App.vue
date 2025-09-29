<template>
  <header class="site-header">
    <div class="inner">
      <!-- Left: Home icon -->
      <a href="#welcome" class="home-link" @click.prevent="scrollTo('welcome')">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3l9-8z"/>
        </svg>
        <span class="sr-only">Home</span>
      </a>

      <!-- Center: inline nav on desktop -->
      <nav class="center-nav">
        <a href="#services" @click.prevent="scrollTo('services')">Services</a>
        <a href="#contact"  @click.prevent="scrollTo('contact')">Contact Me</a>
        <a href="#about"    @click.prevent="scrollTo('about')">About Me</a>
        <a href="#gallery"  @click.prevent="scrollTo('gallery')">Gallery</a>
      </nav>

      <!-- Right: hamburger on mobile -->
      <button class="menu-btn" @click="menuOpen = true" aria-label="Open menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
      </button>
    </div>
  </header>

  <!-- Mobile full-screen menu -->
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
      <a href="#welcome"  @click.prevent="scrollToClose('welcome')">Welcome</a>
      <a href="#services" @click.prevent="scrollToClose('services')">Services</a>
      <a href="#contact"  @click.prevent="scrollToClose('contact')">Contact Me</a>
      <a href="#about"    @click.prevent="scrollToClose('about')">About Me</a>
      <a href="#gallery"  @click.prevent="scrollToClose('gallery')">Gallery</a>
    </nav>
  </div>

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

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  border-top: 1px solid #f0f0f0;
  color: #666;
}

/* accessibility helper */
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
</style>
