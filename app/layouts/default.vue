<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-end h-16 relative px-8">
          <!-- Logo -->
          <NuxtLink to="/" class="flex absolute left-10 top-4 items-center">
            <img 
              src="/images/glr-logo.png" 
              alt="Grafisch Lyceum Rotterdam" 
              class="h-28"
            />
          </NuxtLink>

          <!-- Navigation -->
          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
              to="/"
              class="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/search"
              class="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Alle vacatures
            </NuxtLink>
            <a
              href="#"
              class="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Voor bedrijven
            </a>
            <a
              href="#"
              class="px-4 py-2 bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors uppercase text-sm"
            >
              Inloggen
            </a>
          </nav>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-gray-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-300 mt-16">
      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <!-- About -->
          <div>
            <div class="mb-4">
              <img 
                src="/images/glr-logo.png" 
                alt="Grafisch Lyceum Rotterdam" 
                class="h-12"
              />
            </div>
            <p class="text-sm text-gray-400">
              Dé plek voor MBO studenten om hun perfecte stage te vinden bij topbedrijven.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="font-semibold text-white mb-4">Snelle links</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <NuxtLink to="/" class="hover:text-white transition-colors">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/search" class="hover:text-white transition-colors">
                  Alle vacatures
                </NuxtLink>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  Voor studenten
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  Voor bedrijven
                </a>
              </li>
            </ul>
          </div>

          <!-- Info -->
          <div>
            <h3 class="font-semibold text-white mb-4">Informatie</h3>
            <ul class="space-y-2 text-sm">
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white transition-colors">
                  Voorwaarden
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h3 class="font-semibold text-white mb-4">Contact</h3>
            <ul class="space-y-2 text-sm">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rotterdam, Nederland</span>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@glr-stagemarkt.nl</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {{ new Date().getFullYear() }} GLR Stagemarkt - Grafisch Lyceum Rotterdam. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Default layout for all pages
</script>
