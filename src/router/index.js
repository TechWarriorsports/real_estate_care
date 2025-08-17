import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

// Pages (mag ook lazy via () => import('...'))
import Login from '../pages/Login.vue'
import TwoFactor from '../pages/TwoFactor.vue'
import Openstaande from '../pages/Openstaande.vue'
import Uitgevoerde from '../pages/Uitgevoerde.vue'
import Instellingen from '../pages/Instellingen.vue'
import KnowledgeBase from '../pages/KnowledgeBase.vue'
import InspectieDetail from '../pages/InspectieDetail.vue' // << NIEUW

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/2fa', component: TwoFactor },

  { path: '/openstaande', component: Openstaande },
  { path: '/uitgevoerde', component: Uitgevoerde },
  { path: '/instellingen', component: Instellingen },
  { path: '/kennisbank', component: KnowledgeBase },

  // detailpagina
  { path: '/inspectie/:id', component: InspectieDetail, props: true },

  // fallback (optioneel)
  { path: '/:pathMatch(.*)*', redirect: '/openstaande' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route guard met juiste redirects
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  const protectedRoutes = [
    '/openstaande', '/uitgevoerde', '/instellingen', '/kennisbank'
  ]
  const isDetail = to.path.startsWith('/inspectie/')

  const needsAuth = protectedRoutes.includes(to.path) || isDetail

  // niet ingelogd -> login
  if (needsAuth && !auth.isLoggedIn) return next('/login')

  // wel ingelogd maar 2FA niet bevestigd -> 2FA
  if (needsAuth && auth.isLoggedIn && !auth.is2FAVerified) {
    if (to.path !== '/2fa') return next('/2fa')
  }

  // /2fa alleen zinvol als je al ingelogd bent
  if (to.path === '/2fa' && !auth.isLoggedIn) return next('/login')

  next()
})

export default router
