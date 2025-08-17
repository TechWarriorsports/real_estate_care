<template>
  <div class="min-h-screen rec-bg flex items-center justify-center">
    <div class="rec-card p-8 shadow-lg max-w-2xl w-full">
      <h1 class="text-2xl font-bold rec-text mb-6">Openstaande Inspecties</h1>

      <ul v-if="openstaande.length" class="space-y-4">
        <li
          v-for="item in openstaande"
          :key="item.id"
          class="rec-card p-4 hover:bg-gray-50 transition"
        >
          <div class="flex items-center justify-between">
            <span class="rec-text">{{ item.title }}</span>
            <router-link
              :to="`/inspectie/${item.id}`"
              class="rec-btn px-3 py-1 text-sm rounded"
            >
              Bekijk details
            </router-link>
          </div>
        </li>
      </ul>

      <p v-else class="text-gray-500 italic">
        Geen openstaande inspecties...
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useInspectionStore } from '../stores/inspectionStore'

const store = useInspectionStore()

onMounted(() => {
  store.loadInspections()
})

const openstaande = computed(() =>
  store.inspections.filter(i => !i.done)
)
</script>
