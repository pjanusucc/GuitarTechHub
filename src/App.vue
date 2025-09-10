<template>
  <header class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.nav { display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #eee; }
main { padding: 1rem; }
</style>
