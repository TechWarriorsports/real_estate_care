<script setup>
import { useInspectionStore } from '../stores/inspectionStore'

const props = defineProps({ ins: Object })
const store = useInspectionStore()

function save() {
  store.updateInspection(props.ins.id, { onderhoud: props.ins.onderhoud })
}
</script>

<template>
  <section class="rec-card p-6 space-y-4">
    <h2 class="text-lg font-semibold rec-text">Achterstallig onderhoud</h2>

    <label class="block text-sm font-medium rec-text">
      Locatie
      <input v-model="ins.onderhoud.locatie"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="block text-sm font-medium rec-text">
      Soort onderhoud
      <input v-model="ins.onderhoud.soort"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="inline-flex items-center gap-2 text-sm rec-text">
      <input type="checkbox" v-model="ins.onderhoud.acuteActie"
             class="rounded border focus:ring-[var(--rec-teal)]" />
      Acute actie vereist
    </label>

    <label class="block text-sm font-medium rec-text">
      Kostenindicatie
      <select v-model="ins.onderhoud.kostenIndicatie"
              class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]">
        <option value="">—</option>
        <option>0-500</option>
        <option>500-1.500</option>
        <option>1.500+</option>
      </select>
    </label>

    <button class="rec-btn px-4 py-2 rounded shadow" @click="save">
      Opslaan
    </button>
  </section>
</template>

