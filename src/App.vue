<template>
  <header class="site-header">
    <nav class="nav">
      <a href="#welcome" @click.prevent="scrollTo('welcome')">Welcome</a>
      <a href="#about"   @click.prevent="scrollTo('about')">About Me</a>
      <a href="#gallery" @click.prevent="scrollTo('gallery')">Gallery</a>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>

  <footer class="footer">
    <small>© {{ new Date().getFullYear() }} GuitarTechHub</small>
  </footer>
</template>

<script setup>
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(6px);
  background: color-mix(in oklab, white 70%, transparent);
  border-bottom: 1px solid #eee;
}
.nav {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: center; /* top middle */
  gap: 1.25rem;
  font-weight: 600;
}
.nav a {
  text-decoration: none;
  color: #222;
  opacity: 0.85;
}
.nav a:hover { opacity: 1; }

main { min-height: 70vh; }

.footer {
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  border-top: 1px solid #f0f0f0;
  color: #666;
}
</style>
