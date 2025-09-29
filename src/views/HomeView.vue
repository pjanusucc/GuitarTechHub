<template>
  <!-- HERO -->
  <section id="welcome" class="hero">
    <img class="hero__img" :src="asset('images/hero.jpg')" alt="Guitar bench and tools" />
    <div class="hero__content reveal fade-up" data-animate>
      <h1>Guitar Tech Hub</h1>
      <p>Professional setups, fretwork, electronics & custom builds.</p>
      <div class="hero__cta">
        <!-- now scrolls to Services -->
        <a href="#services" @click.prevent="scrollTo('services')" class="btn">Learn more</a>
        <a href="#gallery" @click.prevent="scrollTo('gallery')" class="btn btn--ghost">See gallery</a>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="section">
    <div class="container">
      <h2 class="reveal fade-up" data-animate>Services</h2>
      <p class="muted reveal fade-in" data-animate style="--d:.08s">
        Essential work to keep your instrument feeling and sounding right.
      </p>

      <div class="services">
        <ul class="services__col">
          <li class="reveal slide-right" data-animate style="--d:.05s">Setup</li>
          <li class="reveal slide-right" data-animate style="--d:.10s">Pickup Installation</li>
          <li class="reveal slide-right" data-animate style="--d:.15s">Truss Rod Adjustment</li>
          <li class="reveal slide-right" data-animate style="--d:.20s">Structural Repairs</li>
        </ul>
        <ul class="services__col">
          <li class="reveal slide-left" data-animate style="--d:.05s">Fret Work</li>
          <li class="reveal slide-left" data-animate style="--d:.10s">Electronics</li>
          <li class="reveal slide-left" data-animate style="--d:.15s">Intonation</li>
          <li class="reveal slide-left" data-animate style="--d:.20s">Hardware Install</li>
        </ul>
      </div>

      <!-- Pricing note with inline link to Contact -->
      <p class="muted reveal fade-in" data-animate style="--d:.25s; margin-top:1rem;">
        Pricing varies by instrument and scope of work. For an exact estimate,
        <a href="#contact" @click.prevent="scrollTo('contact')" class="link">contact me</a>.
      </p>
    </div>
  </section>

  <!-- CONTACT (title + copy on the left, two cards side-by-side on the right) -->
  <section id="contact" class="section section--alt">
    <div class="container contact">
      <div class="contact__text reveal fade-up" data-animate>
        <h2>Contact Me</h2>
        <p class="muted">
          Have a question about services or pricing? Get in touch and I’ll get back to you soon.
        </p>
      </div>

      <!-- 2-up layout on desktop, stacks automatically on smaller widths -->
      <div
        class="contact__methods"
        :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }"
      >
        <a class="contact__row reveal fade-up" data-animate style="--d:.05s" href="tel:0851085441">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.6a1 1 0 01-.9 1A19 19 0 013 5.9a1 1 0 011-1h3.6a1 1 0 011 1c0 1.22.2 2.42.57 3.56a1 1 0 01-.24 1.02l-2.3 2.31z"/>
            </svg>
          </span>
          <span class="contact__label">Phone</span>
          <span class="contact__value">085 108 5441</span>
        </a>

        <a
          class="contact__row reveal fade-up"
          data-animate
          style="--d:.10s"
          href="https://www.instagram.com/miuzikman/"
          target="_blank"
          rel="noopener"
        >
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1 1 0 11-1 1 1 1 0 011-1z"/>
            </svg>
          </span>
          <span class="contact__label">Instagram</span>
          <span class="contact__value link">/miuzikman</span>
        </a>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="section section--dark">
    <div class="container grid">
      <div class="grid__text reveal slide-right" data-animate ref="aboutText">
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

      <div class="grid__media reveal slide-left" data-animate ref="aboutMedia">
        <img :src="asset('images/about.jpg')" alt="At the workbench" />
      </div>
    </div>
  </section>

  <!-- GALLERY (continuous carousel, no subheading) -->
  <section id="gallery" class="section section--alt">
    <div class="container">
      <h2 class="reveal fade-up" data-animate>Gallery</h2>

      <div
        class="carousel reveal fade-up"
        data-animate
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
      >
        <!-- Track (two identical sequences for seamless wrapping) -->
        <div class="carousel__track" ref="trackRef" aria-label="Auto-scrolling gallery">
          <figure
            v-for="(img, i) in looped"
            :key="'a'+i"
            class="carousel__slide"
            @click="openLightbox(img.src)"
          >
            <img :src="img.src" :alt="img.alt" loading="lazy" />
          </figure>
          <figure
            v-for="(img, i) in looped"
            :key="'b'+i"
            class="carousel__slide"
            @click="openLightbox(img.src)"
          >
            <img :src="img.src" :alt="img.alt" loading="lazy" />
          </figure>
        </div>
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
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'

/* ---------- utils ---------- */
const asset = (p) => import.meta.env.BASE_URL + p
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ---------- content ---------- */
const gallery = ref([
  { src: asset('images/gallery/g1.jpg'), alt: 'Guitar 1' },
  { src: asset('images/gallery/g2.jpg'), alt: 'Guitar 2' },
  { src: asset('images/gallery/g3.jpg'), alt: 'Guitar 3' },
  { src: asset('images/gallery/g4.jpg'), alt: 'Guitar 4' },
  { src: asset('images/gallery/g5.jpg'), alt: 'Guitar 5' },
  { src: asset('images/gallery/g6.jpg'), alt: 'Guitar 6' },
  { src: asset('images/gallery/g7.jpg'), alt: 'Guitar 7' },
  { src: asset('images/gallery/g8.jpg'), alt: 'Guitar 8' },
])
const looped = computed(() => gallery.value)

/* ---------- lightbox ---------- */
const lightbox = ref({ open: false, src: '' })
function openLightbox(src) { lightbox.value = { open: true, src } }
function closeLightbox()    { lightbox.value = { open: false, src: '' } }

/* ---------- carousel (RAF ticker) ---------- */
const trackRef = ref(null)
const isPaused = ref(false)          // pause on hover / lightbox
const direction = ref(1)             // 1 = left

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// speed tuning (px/sec) – slight bump for smoothness
let baseSpeed = prefersReduced ? 0 : 105

// ticker state
let offset = 0
let seqWidth = 0
let rafId = 0
let lastTs = 0
let ro = null

function measure() {
  const track = trackRef.value
  if (!track) return

  const style = getComputedStyle(track)
  const gap = parseFloat(style.columnGap || style.gap || '0')

  const slides = Array.from(track.children)
  const half = Math.floor(slides.length / 2)
  let w = 0
  for (let i = 0; i < half; i++) {
    const r = slides[i].getBoundingClientRect()
    w += r.width
    if (i < half - 1) w += gap
  }
  seqWidth = w

  if (seqWidth > 0) {
    while (offset <= -seqWidth) offset += seqWidth
    while (offset >= 0)         offset -= seqWidth
  }
  applyTransform()
}

function applyTransform() {
  const track = trackRef.value
  if (track) track.style.transform = `translateX(${offset}px)`
}

function loop(ts) {
  if (!lastTs) lastTs = ts
  const dt = (ts - lastTs) / 1000
  lastTs = ts

  const tabHidden = typeof document !== 'undefined' && document.hidden

  if (!isPaused.value && !tabHidden && seqWidth > 0 && baseSpeed > 0) {
    offset -= direction.value * baseSpeed * dt
    if (offset <= -seqWidth) offset += seqWidth
    if (offset >= 0)         offset -= seqWidth
    applyTransform()
  }
  rafId = requestAnimationFrame(loop)
}

// Pause ticker while lightbox is open
watch(() => lightbox.value.open, (open) => {
  isPaused.value = !!open
})

/* ---------- ABOUT: sync image height to text height on desktop ---------- */
const aboutText = ref(null)
const aboutMedia = ref(null)
let aboutRO = null

function syncAboutHeights() {
  const textEl = aboutText.value
  const mediaEl = aboutMedia.value
  if (!textEl || !mediaEl) return

  // On mobile (stacked), let the image size naturally
  const stacked = window.matchMedia('(max-width: 900px)').matches
  if (stacked) {
    mediaEl.style.height = 'auto'
    const imgM = mediaEl.querySelector('img')
    if (imgM && imgM.style) imgM.style.removeProperty('height')
    return
  }

  // Match media block to text block height
  const h = textEl.offsetHeight
  mediaEl.style.height = `${h}px`
  const img = mediaEl.querySelector('img')
  if (img) img.style.height = '100%'
}

/* ---------- lifecycle ---------- */
onMounted(async () => {
  // About sizing
  syncAboutHeights()
  window.addEventListener('resize', syncAboutHeights)
  if ('ResizeObserver' in window && aboutText.value) {
    aboutRO = new ResizeObserver(syncAboutHeights)
    aboutRO.observe(aboutText.value)
  }

  // Carousel
  await nextTick()
  measure()
  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(() => measure())
    ro.observe(trackRef.value)
  } else {
    window.addEventListener('resize', measure)
  }
  rafId = requestAnimationFrame(loop)
})

onUnmounted(() => {
  // About cleanup
  window.removeEventListener('resize', syncAboutHeights)
  if (aboutRO) aboutRO.disconnect()

  // Carousel cleanup
  if (ro) ro.disconnect()
  else window.removeEventListener('resize', measure)
  cancelAnimationFrame(rafId)
})
</script>
