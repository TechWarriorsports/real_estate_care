<template>
  <div class="min-h-screen rec-bg flex items-center justify-center">
    <div class="rec-card p-8 shadow-lg max-w-2xl w-full">
      <h1 class="text-2xl font-bold rec-text mb-4">Uitgevoerde Inspecties</h1>

      <ul v-if="uitgevoerde.length" class="space-y-4">
        <li
          v-for="item in uitgevoerde"
          :key="item.id"
          class="border-b border-gray-200 pb-2"
        >
          <div class="flex items-center justify-between">
            <div>
              <strong>{{ item.title }}</strong><br />
              <span class="text-sm text-gray-600">{{ item.body }}</span>
            </div>
            <router-link
              :to="`/inspectie/${item.id}`"
              class="rec-btn px-3 py-1 text-sm rounded"
            >
              Bekijk details
            </router-link>
          </div>
        </li>
      </ul>

      <p v-else class="text-gray-500 italic">Geen uitgevoerde inspecties...</p>
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

const uitgevoerde = computed(() =>
  store.inspections.filter(i => i.done)
)
</script>
