import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'  // ← voeg dit toe
import './tailwind.css'

const app = createApp(App)

app.use(router)
app.use(createPinia())  // ← voeg deze regel toe
app.mount('#app')
