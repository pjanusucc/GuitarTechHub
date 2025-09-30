<template>
  <!-- HERO -->
  <section id="welcome" class="hero">
    <img class="hero__img" :src="asset('images/hero.jpg')" alt="Guitar bench and tools" />
    <div class="hero__content reveal fade-up" data-animate>
      <h1>Guitar Tech Hub</h1>
      <p>Professional guitar setup, repairs & custom work.</p>
      <div class="hero__cta">
        <!-- Learn more now scrolls to Services -->
        <a href="#services" @click.prevent="scrollTo('services')" class="btn">Learn more</a>
        <a href="#gallery" @click.prevent="scrollTo('gallery')" class="btn btn--ghost">See gallery</a>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="section">
    <div class="container">
      <h2 class="reveal fade-up" data-animate>Services</h2>

      <!-- Intro + pricing note -->
      <p class="muted reveal fade-in" data-animate style="--d:.08s">
        Essential work to keep your instrument feeling and sounding right.
        Prices vary by instrument and scope —
        <a href="#contact" @click.prevent="scrollTo('contact')">contact me</a> for a quick quote.
      </p>

      <!-- Service lists -->
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

            <!-- Availability notice -->
       <p class="reveal fade-in" data-animate style="--d:.12s; font-weight:700; margin:.4rem 0 0;">
        <strong>Currently services are only provided in Cork City.</strong>
      </p>

      <!-- Post-list reassurance -->
      <p class="muted reveal fade-in" data-animate style="--d:.24s; margin-top:.6rem;">
        Need something not listed? <strong>Please get in touch</strong> — I’m continually expanding my services and may be able to help.
      </p>
    </div>
  </section>

  <!-- CONTACT (full-width blurred band over background photo) -->
  <section
    id="contact"
    class="section contact-bg"
    :style="{ '--contact-bg': `url(${asset('images/' + contactBg)})` }"
  >
    <div class="container">
      <!-- the band holds the text + the three tiles -->
      <div class="contact__band reveal fade-up" data-animate>
        <div class="contact">
          <div class="contact__text">
            <h2>Contact Me</h2>
            <p class="muted">
              Have a question about services or pricing? Get in touch and I’ll get back to you soon.
            </p>
          </div>

          <div class="contact__methods">
            <a class="contact__row"
               :href="whatsAppHref" target="_blank" rel="noopener">
              <span class="icon" aria-hidden="true">
                <!-- WhatsApp -->
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M20 3.5A10 10 0 1 0 3.5 20L3 22l2-.5A10 10 0 1 0 20 3.5zM12 4a8 8 0 0 1 0 16 7.9 7.9 0 0 1-4.07-1.14L6 19l.86-1.9A7.9 7.9 0 0 1 4 12 8 8 0 0 1 12 4zm4.46 9.74c-.26-.13-1.53-.75-1.77-.83s-.41-.13-.59.13-.68.83-.83 1-.31.19-.57.06a6.49 6.49 0 0 1-1.9-1.17 7 7 0 0 1-1.29-1.6c-.14-.26 0-.4.1-.53s.26-.31.4-.48.19-.26.29-.43a.5.5 0 0 0 0-.48c-.06-.13-.59-1.42-.81-1.94s-.43-.45-.59-.46h-.5a1 1 0 0 0-.73.34c-.25.26-1 1-1 2.38s1.06 2.76 1.21 2.95a9.6 9.6 0 0 0 3.66 3.25 12.46 12.46 0 0 0 1.24.46 3 3 0 0 0 1.38.09c.42-.06 1.3-.53 1.48-1.06s.18-1 .13-1.06-.22-.16-.48-.29z"/>
                </svg>
              </span>
              <span class="contact__label">WhatsApp</span>
              <span class="contact__value">+353 85 108 5441</span>
            </a>

            <a class="contact__row"
               href="https://www.instagram.com/miuzikman/" target="_blank" rel="noopener">
              <span class="icon" aria-hidden="true">
                <!-- Instagram -->
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1 1 0 11-1 1 1 1 0 011-1z"/>
                </svg>
              </span>
              <span class="contact__label">Instagram</span>
              <span class="contact__value link">/miuzikman</span>
            </a>

            <a class="contact__row" href="mailto:p.janusso@yahoo.co.uk">
              <span class="icon" aria-hidden="true">
                <!-- Email -->
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 6 8-6v10H4z"/>
                </svg>
              </span>
              <span class="contact__label">Email</span>
              <span class="contact__value link">p.janusso@yahoo.co.uk</span>
            </a>
          </div>
        </div>
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

  <!-- GALLERY (continuous carousel) -->
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

<!-- REVIEWS (blurred band over background photo) -->
<section
  id="reviews"
  class="section reviews-bg"
  :style="{ '--reviews-bg': `url(${asset('images/about2.jpg')})` }"
>
  <div class="container">
    <div class="reviews__band reveal fade-up" data-animate>
      <h2>Reviews</h2>

      <div class="reviews__grid">
        <article class="review-card" v-for="(r, i) in reviews" :key="i">
          <header class="review-card__head">
            <strong class="review-card__name">{{ r.name }}</strong>
            <span class="review-card__date">{{ r.date }}</span>
          </header>
          <p class="review-card__body">“{{ r.text }}”</p>
        </article>
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

// speed tuning (px/sec)
let baseSpeed = prefersReduced ? 0 : 105

const contactBg = 'about3.jpg'

// WhatsApp deep link (E.164 format, no spaces)
const waNumber = '353851085441'
const whatsAppHref = `https://wa.me/${waNumber}`

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
    const imgMobile = mediaEl.querySelector('img')
    if (imgMobile && imgMobile.style) imgMobile.style.removeProperty('height')
    return
  }

  // Match media block to text block height
  const h = textEl.offsetHeight
  mediaEl.style.height = `${h}px`
  const img = mediaEl.querySelector('img')
  if (img) img.style.height = '100%'
}


/* ---------- reviews (placeholder) ---------- */
const reviews = ref([
  {
    name: 'First Name',
    date: '30/09/2025',
    text:
      'Place Holder text for review, '
  },
  {
    name: 'First Name',
    date: '30/09/2025',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
])


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
