<template>
  <!-- HERO -->
  <section id="welcome" class="hero">
    <img class="hero__img" :src="asset('images/hero.jpg')" alt="Guitar bench and tools" />
    <div class="hero__content">
      <h1>Guitar Tech Hub</h1>
      <p>
        Professional guitar setup, repairs & custom work. I keep your instrument
        playing its best - so you can stay in the creative flow. ( Placeholder)
      </p>
      <div class="hero__cta">
        <a href="#about" @click.prevent="scrollTo('about')" class="btn">Learn more</a>
        <a href="#gallery" @click.prevent="scrollTo('gallery')" class="btn btn--ghost">See gallery</a>
      </div>
    </div>
  </section>

  <!-- ABOUT (dark section, white text) -->
  <section id="about" class="section section--dark">
    <div class="container grid">
      <div class="grid__text">
        <h2>About Me</h2>

        <p>
          I have always had a deep passion for music and instruments, which has guided both my studies and my career path.
          After completing a music course at CSN, I went on to study guitar building at St. John’s College, where I earned my
          QQI Level 6 qualification in Instrument Building and Repair.
        </p>

        <p>
          Through this journey, I’ve developed not only technical skills but also a strong eye for detail, ensuring every
          instrument I work on receives the highest level of care. My hands-on experience with music and instruments has given
          me a deep understanding of both their craftsmanship and their role in inspiring creativity.
        </p>

        <p>
          Driven by a genuine love for music and the artistry behind every instrument, I take pride in bringing out the best
          sound and playability in each piece I repair or build.
        </p>
      </div>

      <div class="grid__media">
        <img :src="asset('images/about.jpg')" alt="At the workbench" />
      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section id="gallery" class="section section--alt">
    <div class="container">
      <h2>Gallery</h2>
      <p class="muted">A few recent instruments on the bench.</p>

      <div class="gallery">
        <figure v-for="(img, i) in gallery" :key="i" class="card" @click="openLightbox(img.src)">
          <img :src="img.src" :alt="img.alt" loading="lazy" />
          <figcaption v-if="img.caption">{{ img.caption }}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- LIGHTBOX -->
  <div v-if="lightbox.open" class="lightbox" @click="closeLightbox">
    <img :src="lightbox.src" alt="" @click.stop />
    <button class="close" @click="closeLightbox" aria-label="Close">×</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const asset = (p) => import.meta.env.BASE_URL + p

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const gallery = ref([
  { src: asset('images/gallery/g1.jpg'), alt: 'Example', caption: 'Guitar 1' },
  { src: asset('images/gallery/g2.jpg'), alt: 'Example',   caption: 'Guitar 2' },
  { src: asset('images/gallery/g3.jpg'), alt: 'Example',       caption: 'Guitar 3' },
  { src: asset('images/gallery/g4.jpg'), alt: 'Example',     caption: 'Some Other' },
])

const lightbox = ref({ open: false, src: '' })
function openLightbox(src) { lightbox.value = { open: true, src } }
function closeLightbox()    { lightbox.value = { open: false, src: '' } }
</script>

<style scoped>
/* Core layout */
.container { max-width: 1100px; margin: 0 auto; padding: 2rem 1rem; }
.section { padding: 3rem 0; }
.section--alt { background: #fafafa; }
h1, h2 { letter-spacing: 0.2px; }

/* HERO */
.hero {
  position: relative;
  min-height: clamp(420px, 65vh, 680px);
  display: grid;
  place-items: center;
  overflow: clip;
}
.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.05) saturate(1.05);
  transform: scale(1.02);
}
.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,.15));
}
.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 0 1rem;
  max-width: 820px;
}
.hero__content h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: .5rem;
}
.hero__content p {
  font-size: clamp(1rem, 2.3vw, 1.2rem);
  opacity: .95;
}
.hero__cta {
  margin-top: 1rem;
  display: flex;
  gap: .75rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: .65rem 1rem;
  border-radius: .6rem;
  border: 1px solid #fff;
  color: #111;
  background: #fff;
  text-decoration: none;
  font-weight: 600;
}
.btn--ghost { background: transparent; color: #fff; }

/* ABOUT (dark) */
.section--dark { background: #1f1f1f; color: #fff; }
.section--dark h2 { color: #fff; }
.section--dark p { color: #e9e9e9; }

/* ABOUT grid */
.grid {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 2rem;
  /* Make both columns equal height (match tallest) */
  align-items: stretch;
}

.grid__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.grid__text p { margin: .75rem 0 1rem; line-height: 1.7; }

/* Image column fills the full row height */
.grid__media { height: 100%; }
.grid__media img {
  width: 100%;
  height: 100%;          /* match text column height */
  object-fit: cover;     /* crop to fill nicely */
  border-radius: 12px;
  box-shadow: 0 10px 24px rgba(0,0,0,.25);
}

/* Responsive */
@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .grid__media img {
    height: auto;        /* natural height on mobile to avoid over-cropping */
  }
}

/* GALLERY */
.gallery {
  --min: 220px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--min), 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  cursor: zoom-in;
  display: grid;
}
.card img {
  width: 100%;
  height: 230px;           /* uniform thumb height */
  object-fit: cover;
  display: block;
}
.card figcaption {
  padding: .5rem .75rem .75rem;
  color: #555;
  font-size: .95rem;
}

/* LIGHTBOX */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.85);
  display: grid;
  place-items: center;
  z-index: 1000;
}
.lightbox img {
  max-width: 95vw;
  max-height: 90vh;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,.45);
}
.lightbox .close {
  position: fixed;
  top: 14px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: none;
  background: #fff;
  color: #111;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
