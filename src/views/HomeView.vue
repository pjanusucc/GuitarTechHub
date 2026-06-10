<template>
  <!-- HERO -->
  <section id="welcome" class="hero">
    <img class="hero__img" :src="asset('images/hero.jpg')" alt="Guitar bench and tools" />

    <div class="hero__content reveal fade-up" data-animate>
      <p class="hero__eyebrow">Guitar setup, repair and maintenance in Cork City</p>
      <h1>Professional guitar care for better tone, comfort, and playability.</h1>
      <p class="hero__lead">
        Professional guitar setup, electronics, fret work, hardware installation and careful repair work.
      </p>

      <div class="hero__tags" aria-label="Main services">
        <span>Setups</span>
        <span>Repairs</span>
        <span>Electronics</span>
        <span>Fret Work</span>
      </div>

      <div class="hero__cta">
        <a href="#contact" @click.prevent="scrollTo('contact')" class="btn">Get a quote</a>
        <a href="#gallery" @click.prevent="scrollTo('gallery')" class="btn btn--ghost">See gallery</a>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="section">
    <div class="container">
      <div class="section-heading reveal fade-up" data-animate>
        <p class="section-kicker">Services</p>
        <h2>Practical work that makes your instrument play better.</h2>
        <p class="muted">
  Based in Cork City, GuitarTechHub provides guitar setups, repairs, maintenance,
  electronics work, fret work and hardware installation for players in Cork and
  across Ireland where practical. Prices vary by instrument and scope, so message
  me with your guitar model and what needs doing, and I’ll do my best to provide
  you with a quote.
</p>
      </div>

      <div class="service-grid">
        <article
          v-for="(service, i) in services"
          :key="service.title"
          class="service-card reveal fade-up"
          data-animate
          :style="{ '--d': `${i * 0.06}s` }"
        >
          <div class="service-card__icon" aria-hidden="true">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
          <ul>
            <li v-for="item in service.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>

      <div class="notice-card reveal fade-in" data-animate>
        <strong>Currently services are only provided in Cork City.</strong>
        <span>Need something not listed? Please get in touch. I’m continually expanding my services and may be able to help.</span>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section
    id="contact"
    class="section contact-bg"
    :style="{ '--contact-bg': `url(${asset('images/' + contactBg)})` }"
  >
    <div class="container">
      <div class="contact__band reveal fade-up" data-animate>
        <div class="contact">
          <div class="contact__text">
            <p class="section-kicker section-kicker--light">Contact</p>
            <h2>Tell me what your guitar needs.</h2>
            <p class="muted">
              If you have any questions, please do not hesitate to contact me.
              Any extra information, such as your guitar model, the issue, and photos if helpful,
              will make it easier for me to advise you. I’ll get back to you as soon as I can.
            </p>
          </div>

          <div class="contact__methods">
            <a class="contact__row" :href="whatsAppHref" target="_blank" rel="noopener">
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M20 3.5A10 10 0 1 0 3.5 20L3 22l2-.5A10 10 0 1 0 20 3.5zM12 4a8 8 0 0 1 0 16 7.9 7.9 0 0 1-4.07-1.14L6 19l.86-1.9A7.9 7.9 0 0 1 4 12 8 8 0 0 1 12 4zm4.46 9.74c-.26-.13-1.53-.75-1.77-.83s-.41-.13-.59.13-.68.83-.83 1-.31.19-.57.06a6.49 6.49 0 0 1-1.9-1.17 7 7 0 0 1-1.29-1.6c-.14-.26 0-.4.1-.53s.26-.31.4-.48.19-.26.29-.43a.5.5 0 0 0 0-.48c-.06-.13-.59-1.42-.81-1.94s-.43-.45-.59-.46h-.5a1 1 0 0 0-.73.34c-.25.26-1 1-1 2.38s1.06 2.76 1.21 2.95a9.6 9.6 0 0 0 3.66 3.25 12.46 12.46 0 0 0 1.24.46 3 3 0 0 0 1.38.09c.42-.06 1.3-.53 1.48-1.06s.18-1 .13-1.06-.22-.16-.48-.29z"/>
                </svg>
              </span>
              <span class="contact__label">WhatsApp</span>
              <span class="contact__value">+353 85 108 5441</span>
            </a>

            <a class="contact__row" href="https://www.instagram.com/miuzikman/" target="_blank" rel="noopener">
              <span class="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1 1 0 11-1 1 1 1 0 011-1z"/>
                </svg>
              </span>
              <span class="contact__label">Instagram</span>
              <span class="contact__value link">/miuzikman</span>
            </a>

            <a class="contact__row" href="mailto:p.janusso@yahoo.co.uk">
              <span class="icon" aria-hidden="true">
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
  <p class="section-kicker section-kicker--light">About Me</p>
  <h2>Careful work, proper attention to detail.</h2>

  <p>
    My name is Pawel Janus, and I am a musician, luthier and guitar technician based in Shanakiel,
    Cork, County Cork, Ireland. I have been part of the Cork music scene for many years, not only
    through instrument work, but also as a live performer, recording musician and someone
    who has helped other bands and artists whenever possible.
  </p>

  <p>
    Being involved in music from different sides has shaped the way I work. I understand how important
    an instrument can be, whether it is used for practice at home, studio recording, live shows or regular
    gigging. My goal is to approach every guitar with the care of a technician and the understanding of
    a musician.
  </p>

  <p>
    I have always had a deep passion for music and instruments, which has guided both my studies and my
    career path. After completing a music course at CSN, I went on to study guitar building at St. John’s
    College, where I earned my QQI Level 6 qualification in Instrument Building and Repair.
  </p>

  <p>
    Through this journey, I’ve developed not only technical skills but also a strong eye for detail, ensuring
    every instrument I work on receives the highest level of care. My hands-on experience with music and
    instruments has given me a deep understanding of both their craftsmanship and their role in inspiring
    creativity.
  </p>

  <p>
    Driven by a genuine love for music and the artistry behind every instrument, I take pride in bringing out
    the best sound and playability in each piece I repair or build.
  </p>
</div>

      <div class="grid__media reveal slide-left" data-animate ref="aboutMedia">
        <img :src="asset('images/about.jpg')" alt="At the workbench" />
      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section id="gallery" class="section section--alt">
    <div class="container">
      <div class="section-heading reveal fade-up" data-animate>
        <p class="section-kicker">Gallery</p>
        <h2>Recent work and workshop details.</h2>
        <p class="muted">
          Tap any image to open the gallery view. You can then browse using the arrows or thumbnails.
        </p>
      </div>

      <div
        class="carousel reveal fade-up"
        data-animate
        @mouseenter="isPaused = true"
        @mouseleave="isPaused = false"
      >
        <div class="carousel__track" ref="trackRef" aria-label="Auto-scrolling gallery">
          <figure
            v-for="(img, i) in looped"
            :key="'a'+i"
            class="carousel__slide"
            @click="openLightbox(i)"
          >
            <img :src="img.src" :alt="img.alt" loading="lazy" />
          </figure>

          <figure
            v-for="(img, i) in looped"
            :key="'b'+i"
            class="carousel__slide"
            @click="openLightbox(i)"
          >
            <img :src="img.src" :alt="img.alt" loading="lazy" />
          </figure>
        </div>
      </div>
    </div>
  </section>

  <!-- REVIEWS / TRUST SECTION -->
  <section
    id="reviews"
    class="section reviews-bg"
    :style="{ '--reviews-bg': `url(${asset('images/about2.jpg')})` }"
  >
    <div class="container">
      <div class="reviews__band reveal fade-up" data-animate>
        <p class="section-kicker section-kicker--light">My Aim</p>
        <h2>The aim is simple: careful work, clear advice, and a guitar that feels better to play.</h2>

        <div class="trust-grid">
          <article class="trust-card" v-for="item in trustItems" :key="item.title">
  <div class="trust-card__head">
    <h3>{{ item.title }}</h3>
    <div class="review-card__icon" aria-hidden="true">{{ item.icon }}</div>
  </div>
  <p>{{ item.text }}</p>
</article>
        </div>

        <div class="review-section">
  <div class="review-section__head">
    <h3>Customer Reviews</h3>
    <p>Feedback from customers, musicians and bands I have worked with.</p>
  </div>

  <div class="reviews__grid">
    <article
      class="review-card review-card--customer"
      v-for="review in sortedReviews"
      :key="review.id"
    >
      <header class="review-card__head">
        <div class="review-card__authors">
          <a
            v-for="author in review.authors"
            :key="author.name"
            class="review-card__person"
            :href="author.url"
            target="_blank"
            rel="noopener"
          >
            <svg class="instagram-mini" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1 1 0 11-1 1 1 1 0 011-1z"
              />
            </svg>
            <span>{{ author.name }}</span>
          </a>
        </div>

        <span class="review-card__date">{{ review.date }}</span>
      </header>

      <p class="review-card__body">{{ review.text }}</p>

      <footer class="review-card__footer">
        <span class="review-card__footer-label">{{ review.footerLabel }}</span>

        <div class="review-card__links">
          <a
            v-for="link in review.links"
            :key="link.name"
            class="review-card__link"
            :href="link.url"
            target="_blank"
            rel="noopener"
          >
            <svg class="instagram-mini" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zM18 6.5a1 1 0 11-1 1 1 1 0 011-1z"
              />
            </svg>
            <span>{{ link.name }}</span>
          </a>
        </div>
      </footer>
    </article>
  </div>
</div>
      </div>
    </div>
  </section>

  <!-- LIGHTBOX -->
  <div
    v-if="lightbox.open"
    class="lightbox"
    role="dialog"
    aria-modal="true"
    aria-label="Gallery image viewer"
    @click.self="closeLightbox"
  >
    <button class="lightbox__close" @click="closeLightbox" aria-label="Close gallery">×</button>

    <div class="lightbox__shell">
      <div class="lightbox__stage">
        <button class="lightbox__nav lightbox__nav--prev" @click.stop="prevImage" aria-label="Previous image">
          ‹
        </button>

        <img
          class="lightbox__image"
          :src="currentImage.src"
          :alt="currentImage.alt"
          @click.stop
        />

        <button class="lightbox__nav lightbox__nav--next" @click.stop="nextImage" aria-label="Next image">
          ›
        </button>
      </div>

      <aside class="lightbox__panel" @click.stop>
        <div class="lightbox__panel-head">
          <strong>Gallery</strong>
          <span>{{ lightbox.index + 1 }} / {{ gallery.length }}</span>
        </div>

        <div class="lightbox__thumbs" ref="thumbsRef">
          <button
            v-for="(img, i) in gallery"
            :key="img.src"
            class="lightbox__thumb"
            :class="{ active: i === lightbox.index }"
            @click="selectImage(i)"
            :aria-label="`Open image ${i + 1}`"
            :aria-current="i === lightbox.index ? 'true' : undefined"
          >
            <img :src="img.src" :alt="img.alt" />
          </button>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'

const asset = (p) => import.meta.env.BASE_URL + p

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const services = ref([
  {
    icon: '01',
    title: 'Setup & Playability',
    text: 'Adjustments that help your guitar feel smoother, cleaner and easier to play.',
    items: ['Full setup', 'Truss rod adjustment', 'Intonation', 'Action adjustment']
  },
  {
    icon: '02',
    title: 'Electronics & Pickups',
    text: 'Clean installation and repair work for tone, signal and reliability issues.',
    items: ['Pickup installation', 'Electronics checks', 'Output issues', 'Wiring work']
  },
  {
    icon: '03',
    title: 'Fret Work',
    text: 'Work focused on improving comfort, reducing buzzing and restoring clean playability.',
    items: ['Fret checks', 'Buzz diagnosis', 'Fret work', 'Playability improvements']
  },
  {
    icon: '04',
    title: 'Repairs & Hardware',
    text: 'Practical repair and installation work carried out with care and attention.',
    items: ['Structural repairs', 'Hardware install', 'Maintenance', 'General repair advice']
  }
])

const gallery = ref([
  { src: asset('images/gallery/g1.jpg'), alt: 'Guitar repair work image 1' },
  { src: asset('images/gallery/g2.jpg'), alt: 'Guitar repair work image 2' },
  { src: asset('images/gallery/g3.jpg'), alt: 'Guitar repair work image 3' },
  { src: asset('images/gallery/g4.jpg'), alt: 'Guitar repair work image 4' },
  { src: asset('images/gallery/g5.jpg'), alt: 'Guitar repair work image 5' },
  { src: asset('images/gallery/g6.jpg'), alt: 'Guitar repair work image 6' },
  { src: asset('images/gallery/g7.jpg'), alt: 'Guitar repair work image 7' },
  { src: asset('images/gallery/g8.jpg'), alt: 'Guitar repair work image 8' },
  { src: asset('images/gallery/g9.jpg'), alt: 'Guitar repair work image 9' },
  { src: asset('images/gallery/g10.jpg'), alt: 'Guitar repair work image 10' },
  { src: asset('images/gallery/g11.jpg'), alt: 'Guitar repair work image 11' },
  { src: asset('images/gallery/g12.jpg'), alt: 'Guitar repair work image 12' },
  { src: asset('images/gallery/g13.jpg'), alt: 'Guitar repair work image 13' },
  { src: asset('images/gallery/g14.jpg'), alt: 'Guitar repair work image 14' },
  { src: asset('images/gallery/g15.jpg'), alt: 'Guitar repair work image 15' },
  { src: asset('images/gallery/g16.jpg'), alt: 'Guitar repair work image 16' },
  { src: asset('images/gallery/g17.jpg'), alt: 'Guitar repair work image 17' },
  { src: asset('images/gallery/g18.jpg'), alt: 'Guitar repair work image 18' },
  { src: asset('images/gallery/g19.jpg'), alt: 'Guitar repair work image 19' },
  { src: asset('images/gallery/g20.jpg'), alt: 'Guitar repair work image 20' },
])

const looped = computed(() => gallery.value)

const trustItems = ref([
  {
    icon: '✓',
    title: 'Clear advice',
    text: 'You’ll get straightforward guidance on what your instrument needs before any work is carried out.'
  },
  {
    icon: '✓',
    title: 'Careful handling',
    text: 'Every instrument is treated with care, whether it needs a simple setup or more detailed repair work.'
  },
  {
    icon: '✓',
    title: 'Focused on playability',
    text: 'The goal is always the same: a guitar that feels better, sounds better and inspires you to play.'
  }
])

const reviews = ref([
  {
    id: 'alex-worn-out',
    sortDate: '2026-05-26',
    sortOrder: 4,
    date: '26/05/2026',
    authors: [
      {
        name: 'Alex',
        url: 'https://www.instagram.com/alex__dissonance/'
      }
    ],
    text: `"Pawel took care of most of my guitars over the years, always bring them up to par before hitting the road. Fresh strings, fixed intonation, taking care of fretwork as well as cleaning the guitars up to a great standard. On top of that I could always feel in every guitar that I handed him that he just loves working on them Not only is his service top notch, it was always affordable and also delivered fast even when I was a bit strapped for time, something that I greatly appreciate. On top of that it is always great to feel his enthusiasm even when you approach him with projects that seem a bit outlandish first. If you need some solid guitar service from someone who just loves guitars, Pawel is THE go to guy! "`,
    footerLabel: 'Band',
    links: [
      {
        name: 'Worn Out',
        url: 'https://www.instagram.com/wornoutnoise/'
      }
    ]
  },
  {
    id: 'cian-mullane',
    sortDate: '2026-05-26',
    sortOrder: 3,
    date: '26/05/2026',
    authors: [
      {
        name: 'Cian Mullane',
        url: 'https://www.instagram.com/mvllane/'
      }
    ],
    text: `“Pawel made my gigging guitars more comfortable than ever and brought life back into my older less used instruments”`,
    footerLabel: 'Bands',
    links: [
      {
        name: 'God Alone',
        url: 'https://www.instagram.com/god.alone_cork/'
      },
      {
        name: 'Red Sun Alert',
        url: 'https://www.instagram.com/redsunalert/'
      },
      {
        name: 'Uncultivates',
        url: 'https://www.instagram.com/uncultivates/'
      },
      {
        name: 'Last Call',
        url: 'https://www.instagram.com/lastcall_theband/'
      }
    ]
  },
  {
    id: 'vince-noel-following-the-signs',
    sortDate: '2026-05-27',
    sortOrder: 2,
    date: '27/05/2026',
    authors: [
      {
        name: 'Vince',
        url: 'https://www.instagram.com/ton6gro2c'
      },
      {
        name: 'Noel',
        url: 'https://www.instagram.com/noelc_99/'
      }
    ],
    text: `“We needed to change the settings on our LTD H-330 FMNT and Ltd EC-1000B, and Pawel really listened to what we wanted. He adjusted the guitars exactly to our own needs, and now they feel amazing to play. Since then, we've kept coming back for anything guitar-related.”`,
    footerLabel: 'Band',
    links: [
      {
        name: 'Following the Signs',
        url: 'https://www.instagram.com/followingthesigns.cork/'
      }
    ]
  },
  {
    id: 'ben-opw',
    sortDate: '2026-06-02',
    sortOrder: 1,
    date: '02/06/2026',
    authors: [
      {
        name: 'Ben',
        url: 'https://www.instagram.com/forgingphysiques/'
      }
    ],
    text: `"Pawel is the only guitar tech I’ll trust with my guitars. They come back perfect and playing like a dream. I cannot recommend him highly enough!"`,
    footerLabel: 'Band',
    links: [
      {
        name: 'OPW',
        url: 'https://www.instagram.com/opwband/'
      }
    ]
  },
  {
  id: 'emmet-rpc',
  sortDate: '2026-06-10',
  sortOrder: 0,
  date: '10/06/2026',
  authors: [
    {
      name: 'Emmet',
      url: 'https://www.instagram.com/emmet_hickey.jpg/'
    }
  ],
  text: `"Absolutely bang on job done by Pawel on my bass. It’s sounding, looking and feeling better than it ever has before, could not recommend him more for breathing new life into your instrument"`,
  footerLabel: 'Band',
  links: [
    {
      name: 'RPC',
      url: 'https://www.instagram.com/rpc.band/'
    }
  ]
}
])

const sortedReviews = computed(() => {
  return [...reviews.value].sort((a, b) => {
    const dateCompare = b.sortDate.localeCompare(a.sortDate)

    if (dateCompare !== 0) {
      return dateCompare
    }

    return a.sortOrder - b.sortOrder
  })
})

const contactBg = 'about3.jpg'
const waNumber = '353851085441'
const whatsAppHref = `https://wa.me/${waNumber}`

/* ---------- lightbox ---------- */
const lightbox = ref({ open: false, index: 0 })
const thumbsRef = ref(null)

const currentImage = computed(() => {
  return gallery.value[lightbox.value.index] || gallery.value[0]
})

function openLightbox(index) {
  lightbox.value = { open: true, index }
  document.body.classList.add('no-scroll')
  nextTick(() => scrollActiveThumbIntoView())
}

function closeLightbox() {
  lightbox.value = { open: false, index: 0 }
  document.body.classList.remove('no-scroll')
}

function selectImage(index) {
  lightbox.value.index = index
  nextTick(() => scrollActiveThumbIntoView())
}

function nextImage() {
  lightbox.value.index = (lightbox.value.index + 1) % gallery.value.length
  nextTick(() => scrollActiveThumbIntoView())
}

function prevImage() {
  lightbox.value.index =
    (lightbox.value.index - 1 + gallery.value.length) % gallery.value.length
  nextTick(() => scrollActiveThumbIntoView())
}

function scrollActiveThumbIntoView() {
  const panel = thumbsRef.value
  if (!panel) return

  const active = panel.querySelector('.lightbox__thumb.active')
  if (active) {
    active.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }
}

function handleKeydown(event) {
  if (!lightbox.value.open) return

  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowRight') nextImage()
  if (event.key === 'ArrowLeft') prevImage()
}

/* ---------- carousel ---------- */
const trackRef = ref(null)
const isPaused = ref(false)
const direction = ref(1)

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

let baseSpeed = prefersReduced ? 0 : 105
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
    while (offset >= 0) offset -= seqWidth
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
    if (offset >= 0) offset -= seqWidth

    applyTransform()
  }

  rafId = requestAnimationFrame(loop)
}

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

  const stacked = window.matchMedia('(max-width: 900px)').matches

  if (stacked) {
    mediaEl.style.height = 'auto'
    const imgMobile = mediaEl.querySelector('img')
    if (imgMobile && imgMobile.style) imgMobile.style.removeProperty('height')
    return
  }

  const h = textEl.offsetHeight
  mediaEl.style.height = `${h}px`

  const img = mediaEl.querySelector('img')
  if (img) img.style.height = '100%'
}

onMounted(async () => {
  window.addEventListener('keydown', handleKeydown)

  syncAboutHeights()
  window.addEventListener('resize', syncAboutHeights)

  if ('ResizeObserver' in window && aboutText.value) {
    aboutRO = new ResizeObserver(syncAboutHeights)
    aboutRO.observe(aboutText.value)
  }

  await nextTick()

  measure()

  if ('ResizeObserver' in window) {
    ro = new ResizeObserver(() => measure())
    if (trackRef.value) ro.observe(trackRef.value)
  } else {
    window.addEventListener('resize', measure)
  }

  rafId = requestAnimationFrame(loop)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', syncAboutHeights)
  document.body.classList.remove('no-scroll')

  if (aboutRO) aboutRO.disconnect()

  if (ro) ro.disconnect()
  else window.removeEventListener('resize', measure)

  cancelAnimationFrame(rafId)
})
</script>