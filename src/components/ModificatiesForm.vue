<script setup>
import { useInspectionStore } from '../stores/inspectionStore'

const props = defineProps({ ins: Object })
const store = useInspectionStore()

function save() {
  store.updateInspection(props.ins.id, { modificaties: props.ins.modificaties })
}
</script>

<template>
  <section class="rec-card p-6 space-y-4">
    <h2 class="text-lg font-semibold rec-text">Modificaties</h2>

    <label class="block text-sm font-medium rec-text">
      Bestaand document
      <input v-model="ins.modificaties.bestaand"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="block text-sm font-medium rec-text">
      Locatie
      <input v-model="ins.modificaties.locatie"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="block text-sm font-medium rec-text">
      Uitgevoerd door
      <input v-model="ins.modificaties.uitgevoerdDoor"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="block text-sm font-medium rec-text">
      Beschrijving
      <textarea v-model="ins.modificaties.beschrijving"
                class="mt-1 w-full border rounded px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]"></textarea>
    </label>

    <label class="block text-sm font-medium rec-text">
      Te ondernemen actie
      <input v-model="ins.modificaties.teOndernemen"
             class="mt-1 w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]" />
    </label>

    <label class="block text-sm font-medium rec-text">
      Opmerkingen
      <textarea v-model="ins.modificaties.opmerkingen"
                class="mt-1 w-full border rounded px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-[var(--rec-teal)]"></textarea>
    </label>

    <button class="rec-btn px-4 py-2 rounded shadow" @click="save">
      Opslaan
    </button>
  </section>
</template>
