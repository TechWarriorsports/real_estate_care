<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useInspectionStore } from '../stores/inspectionStore'

import SchadeForm from '../components/SchadeForm.vue'
import OnderhoudForm from '../components/OnderhoudForm.vue'
import InstallatiesForm from '../components/InstallatiesForm.vue'
import ModificatiesForm from '../components/ModificatiesForm.vue'
import FotoUpload from '../components/FotoUpload.vue'

const route = useRoute()
const router = useRouter()
const store = useInspectionStore()

const activeTab = ref('schade') // 'schade' | 'onderhoud' | 'installaties' | 'modificaties' | 'fotos'
const ins = computed(() => store.getById(route.params.id))

onMounted(async () => {
  await store.loadInspections()
  if (!ins.value) router.push('/openstaande')
})

function complete() {
  if (!ins.value) return
  store.markDone(ins.value.id)
  router.push('/uitgevoerde')
}
</script>

<template>
  <main class="p-6 space-y-6 max-w-5xl mx-auto">
    <div v-if="ins" class="rec-card p-6 space-y-6">
      <!-- Titel + terugknop -->
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold rec-text">
          Inspectie #{{ ins.id }} — {{ ins.title }}
        </h1>
        <button class="px-3 py-2 rounded-md border border-rec-teal text-rec-teal hover:bg-rec-teal hover:text-white transition-colors"
                @click="$router.back()">
          ← Terug
        </button>
      </div>

      <!-- Tabs -->
      <nav class="flex gap-2" role="tablist" aria-label="Secties">
        <button
          v-for="t in ['schade','onderhoud','installaties','modificaties','fotos']"
          :key="t"
          class="px-4 py-2 rounded-xl border border-rec-teal text-rec-teal font-medium
                 hover:bg-rec-teal hover:text-white transition-colors"
          :class="{'bg-rec-teal text-white': activeTab===t}"
          @click="activeTab = t"
          role="tab"
          :aria-selected="activeTab===t"
        >
          {{ t.charAt(0).toUpperCase() + t.slice(1) }}
        </button>
      </nav>

      <!-- Content -->
      <SchadeForm       v-if="activeTab==='schade'"       :ins="ins" />
      <OnderhoudForm    v-else-if="activeTab==='onderhoud'" :ins="ins" />
      <InstallatiesForm v-else-if="activeTab==='installaties'" :ins="ins" />
      <ModificatiesForm v-else-if="activeTab==='modificaties'" :ins="ins" />
      <FotoUpload       v-else-if="activeTab==='fotos'" :ins="ins" />

      <!-- Afronden -->
      <div class="pt-4">
        <button class="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
                @click="complete">
          Markeer als afgerond
        </button>
      </div>
    </div>

    <p v-else class="text-gray-600">Inspectie niet gevonden…</p>
  </main>
</template>
